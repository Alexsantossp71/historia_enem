# História ENEM

[![GitHub Pages](https://github.com/Alexsantossp71/historia_enem/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/Alexsantossp71/historia_enem/actions/workflows/deploy.yml)
[![Licença MIT](https://img.shields.io/badge/license-MIT-22c55e.svg)](LICENSE)

> Curso aberto, gratuito e estático de História para a preparação do ENEM.

**[Acessar o site](https://alexsantossp71.github.io/historia_enem/)** · **[Reportar problema](https://github.com/Alexsantossp71/historia_enem/issues/new/choose)** · **[Contribuir](CONTRIBUTING.md)**

## O que há aqui

- **4 módulos e 20 aulas** publicadas, de História do Brasil, Geral, da América e da África;
- sínteses em Markdown, dicas de estudo, questões comentadas e exercícios interativos;
- **20 narrativas históricas de apoio**, incluindo uma leitura ilustrada com narração;
- acompanhamento de progresso local — sem login, cookies de rastreamento ou banco de dados;
- exportação estática para GitHub Pages, com SEO, sitemap, manifesto e suporte a subdiretórios;
- interface responsiva, navegação por teclado, skip link e respeito a `prefers-reduced-motion`.

> As narrativas são obras de ficção para contextualização. Elas complementam as aulas e não substituem a consulta a fontes históricas confiáveis.

## Conteúdo atual

| Módulo              | Aulas | Exemplos de temas                                                             |
| ------------------- | ----: | ----------------------------------------------------------------------------- |
| História do Brasil  |    15 | povos indígenas, colonização, Império, República, ditadura e redemocratização |
| História Geral      |     3 | Pré-História, Mesopotâmia e Egito Antigo                                      |
| História da América |     1 | civilizações pré-colombianas                                                  |
| História da África  |     1 | reinos e impérios africanos                                                   |

A seleção é um ponto de partida para revisão. Consulte sempre a documentação oficial do [Inep/ENEM](https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem) e o edital da edição que você fará.

## Começar a desenvolver

### Pré-requisitos

- [Node.js](https://nodejs.org/) **20.9+** (a CI usa Node 22)
- npm 10+

```bash
# 1. Clone e entre no projeto
git clone https://github.com/Alexsantossp71/historia_enem.git
cd historia_enem

# 2. Instale exatamente as dependências registradas
npm ci

# 3. Inicie o ambiente local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). O servidor é exposto em `0.0.0.0`, o que também facilita testes em dispositivos da mesma rede.

### Scripts de qualidade

| Comando                | Finalidade                                       |
| ---------------------- | ------------------------------------------------ |
| `npm run dev`          | inicia o ambiente de desenvolvimento             |
| `npm run build`        | gera a exportação estática em `out/`             |
| `npm run start`        | serve o build de produção                        |
| `npm run lint`         | executa ESLint sem avisos permitidos             |
| `npm run typecheck`    | valida TypeScript em modo estrito                |
| `npm test`             | verifica a integridade do catálogo e do conteúdo |
| `npm run format:check` | confere formatação com Prettier                  |
| `npm run check`        | executa formato, lint, tipos, testes e build     |

Antes de abrir um pull request, rode:

```bash
npm run check
```

## Arquitetura

```text
src/
├── app/                         # Rotas estáticas do Next.js e metadados
│   └── modulos/[modulo]/[aula]/ # Aula, exercícios e narrativa complementar
├── components/                  # Componentes reutilizáveis e acessíveis
├── content/contos/              # Fonte Markdown das narrativas
├── data/curso.ts                # Catálogo tipado de módulos, aulas e atividades
└── lib/                         # Leitura de conteúdo e configuração do site
```

O curso é deliberadamente **sem backend**. O status de conclusão usa `localStorage` no navegador; nenhum dado do estudante é enviado ao projeto.

## Adicionar ou revisar conteúdo

1. Edite a aula em [`src/data/curso.ts`](src/data/curso.ts).
2. Atualize ou crie a narrativa correspondente em [`src/content/contos/`](src/content/contos/), quando aplicável.
3. Garanta cinco alternativas e um índice de resposta válido em cada atividade.
4. Revise datas, termos, diversidade de perspectivas e fontes.
5. Rode `npm run check`.

Leia o [guia de contribuição](CONTRIBUTING.md) para o fluxo completo e critérios editoriais.

## Deploy no GitHub Pages

O workflow [`deploy.yml`](.github/workflows/deploy.yml) publica automaticamente cada push em `main`.

1. Em **Settings → Pages**, escolha **GitHub Actions** como fonte.
2. Faça push para `main`.
3. O workflow injeta `NEXT_PUBLIC_BASE_PATH` com o nome do repositório, então forks funcionam sem alterar `next.config.ts`.

Se a sua integração GitHub não tiver permissão para editar workflows, siga o [guia de configuração manual](docs/CONFIGURAR_WORKFLOWS_GITHUB.md).

Para um domínio próprio, configure no ambiente de build:

```bash
NEXT_PUBLIC_BASE_PATH="" \
NEXT_PUBLIC_SITE_ORIGIN="https://seu-dominio.example" \
npm run build
```

## Segurança e comunidade

- Consulte [SECURITY.md](SECURITY.md) para relatar uma vulnerabilidade de forma responsável.
- Consulte [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) para as regras de convivência.
- O Dependabot acompanha dependências npm e GitHub Actions semanalmente.

## Licença

Este projeto é distribuído sob a [licença MIT](LICENSE). O conteúdo educacional deve ser reutilizado com atribuição e revisão histórica responsável.

---

Feito com cuidado para estudantes brasileiros. Bons estudos! 📚
