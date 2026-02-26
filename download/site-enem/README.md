# 📚 Curso de História para o ENEM

Um site completo e interativo para estudantes do ensino médio que desejam estudar História para o ENEM.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

## 🌟 Características

- ✅ **4 Módulos completos** com todos os temas cobrados no ENEM
- ✅ **51+ aulas** com conteúdo didático
- ✅ **Questões interativas** estilo ENEM com feedback
- ✅ **Design responsivo** para estudar em qualquer dispositivo
- ✅ **100% gratuito** e sem propagandas
- ✅ **Hospedado no GitHub Pages** - sem custos

## 📦 Estrutura do Projeto

```
├── src/
│   ├── app/
│   │   ├── page.tsx              # Página inicial
│   │   ├── layout.tsx            # Layout com navegação
│   │   ├── modulos/
│   │   │   ├── page.tsx          # Lista de módulos
│   │   │   └── [modulo]/
│   │   │       ├── page.tsx      # Lista de aulas do módulo
│   │   │       └── [aula]/
│   │   │           └── page.tsx  # Conteúdo da aula
│   │   └── globals.css
│   └── data/
│       └── curso.ts              # Dados do curso (aulas, questões)
├── public/
├── next.config.ts
└── package.json
```

## 📖 Módulos Disponíveis

| Módulo | Aulas | Porcentagem no ENEM |
|--------|-------|---------------------|
| 🇧🇷 História do Brasil | 15 | ~50% |
| 🌍 História Geral | 25 | ~30% |
| 🌎 História da América | 7 | ~4% |
| 🌍 História da África | 4 | ~1% |

## 🚀 Deploy no GitHub Pages

### Passo 1: Fork este repositório

Clique no botão "Fork" no canto superior direito desta página.

### Passo 2: Ativar GitHub Pages

1. Vá em **Settings** → **Pages**
2. Em **Source**, selecione **GitHub Actions**
3. O deploy será automático a cada push

### Passo 3: Personalizar (opcional)

Edite o arquivo `next.config.ts` para ajustar o `basePath` se necessário:

```typescript
const nextConfig = {
  output: 'export',
  basePath: '/seu-repo-name', // Ajuste para o nome do seu repo
  images: {
    unoptimized: true,
  },
};
```

## 💻 Desenvolvimento Local

```bash
# Instalar dependências
bun install

# Rodar em desenvolvimento
bun run dev

# Build para produção
bun run build

# Os arquivos estáticos estarão em .next/server/app/
```

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-aula`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova aula sobre X'`)
4. Push para a branch (`git push origin feature/nova-aula`)
5. Abra um Pull Request

### Adicionando Novas Aulas

As aulas são definidas em `src/data/curso.ts`. Para adicionar uma nova aula:

```typescript
{
  id: '1-16',
  slug: 'nova-aula',
  titulo: 'Título da Nova Aula',
  conteudo: `
    ## Introdução
    Conteúdo da aula em Markdown...
  `,
  dicaEnem: 'Dica importante para o ENEM...',
  questoes: [
    {
      enunciado: 'Pergunta da questão...',
      alternativas: ['a) ...', 'b) ...', 'c) ...', 'd) ...', 'e) ...'],
      correta: 2, // Índice da resposta correta (0-4)
      comentario: 'Explicação da resposta...'
    }
  ],
  exercicios: [
    {
      enunciado: 'Pergunta do exercício...',
      alternativas: ['a) ...', 'b) ...', 'c) ...', 'd) ...', 'e) ...'],
      correta: 1
    }
  ]
}
```

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais.

---

Feito com 💜 para estudantes brasileiros
