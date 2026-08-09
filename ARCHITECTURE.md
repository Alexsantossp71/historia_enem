# Arquitetura — Historia ENEM

## Visao geral

Aplicacao de curso estatico de Historia para o ENEM, construida com **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS v4** e implantada no **GitHub Pages** via exportacao estatica (`output: "export"`).

Nao ha banco de dados, API de servidor ou coleta de dados pessoais. Todo o conteudo e armazenado como codigo TypeScript e Markdown, e o site e pre-renderizado em HTML/CSS/JS no momento do build.

## Estrutura de diretorios

```
src/
  app/                          # Rotas (App Router)
    page.tsx                    # Pagina inicial (hero + modulos + progresso)
    layout.tsx                  # Layout raiz (nav, footer, metadata SEO)
    globals.css                 # CSS global (Tailwind + custom)
    not-found.tsx               # Pagina 404
    robots.ts                   # robots.txt dinamico
    sitemap.ts                  # sitemap.xml dinamico
    manifest.ts                 # Web app manifest
    modulos/
      page.tsx                  # Listagem de modulos
      [modulo]/
        page.tsx                # Detalhe do modulo + lista de aulas
        [aula]/
          page.tsx              # Pagina da aula (conteudo + questoes + exercicios)
          components.tsx        # QuestaoComponent + ExercicioComponent (client)
          conto/
            page.tsx            # Narrativa historica ilustrada
  components/
    course-progress.tsx         # Barra de progresso local (localStorage)
    markdown-content.tsx        # Renderizador de Markdown com Tailwind
  data/
    curso.ts                    # Catalogo completo (modulos, aulas, questoes)
    curso.test.ts               # Testes de integridade do catalogo
  content/
    contos/                     # 20 narrativas historicas em Markdown
  lib/
    site.ts                     # Utilitarios: basePath, siteUrl, assetUrl
    narrativas.ts               # Leitura de Markdown em build time
  types/
    next-url-pattern.d.ts        # Tipos para URLPattern polyfill
```

## Fluxo de dados

1. **Build time**: `next build` pre-renderiza todas as rotas estaticas via `generateStaticParams`
2. **Conteudo**: `curso.ts` exporta arrays tipados com 4 modulos, 20 aulas, questoes e exercicios
3. **Narrativas**: `narrativas.ts` le arquivos `.md` do filesystem durante o build
4. **Progresso**: Componente client usa `localStorage` via `useSyncExternalStore` (sem cookies)
5. **Deploy**: GitHub Actions faz build + upload do diretorio `out/` para GitHub Pages

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 16 (App Router, `output: "export"`) |
| Linguagem | TypeScript strict |
| Estilo | Tailwind CSS v4 |
| Markdown | react-markdown + remark-gfm |
| Testes | Vitest |
| Lint | ESLint + eslint-config-next |
| Formatacao | Prettier |
| Deploy | GitHub Pages (GitHub Actions) |

## Convencoes

- Componentes client marcados com `"use client"` no topo
- Rotas dinamicas usam `params: Promise<...>` (Next.js 16 async params)
- Imports usam alias `@/` mapeado para `src/`
- Nenhum dado sensivel ou API key no codigo-fonte
