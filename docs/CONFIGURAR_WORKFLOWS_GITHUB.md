# Configurar workflows manualmente no GitHub

## Por que este guia existe?

A aplicação **Arena AI Coding Agent** usada nesta sessão tem acesso de escrita ao código, mas a instalação atual não possui a permissão GitHub **Workflows**. Por isso, ela não consegue criar ou alterar arquivos em `.github/workflows/`.

O código do projeto pode ser publicado normalmente. Para ativar a automação completa, crie ou atualize os dois arquivos abaixo diretamente pela interface do GitHub, usando uma conta com permissão de escrita no repositório.

## 1. Criar a verificação de qualidade

No GitHub, abra **Actions** → **New workflow** → **set up a workflow**. Salve o arquivo como `.github/workflows/ci.yml` e substitua seu conteúdo por:

```yaml
name: Qualidade

on:
  pull_request:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read

concurrency:
  group: ci-${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  validate:
    name: Validar aplicação
    runs-on: ubuntu-latest
    env:
      NEXT_PUBLIC_BASE_PATH: /${{ github.event.repository.name }}
      NEXT_PUBLIC_SITE_ORIGIN: https://${{ github.repository_owner }}.github.io
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Configurar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Instalar dependências imutáveis
        run: npm ci

      - name: Executar verificações
        run: npm run check
```

## 2. Atualizar a publicação no GitHub Pages

No repositório, abra `.github/workflows/deploy.yml`, clique em **Edit** e substitua todo o conteúdo por:

```yaml
name: Publicar no GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: github-pages
  cancel-in-progress: true

jobs:
  build:
    name: Gerar site estático
    runs-on: ubuntu-latest
    env:
      NEXT_PUBLIC_BASE_PATH: /${{ github.event.repository.name }}
      NEXT_PUBLIC_SITE_ORIGIN: https://${{ github.repository_owner }}.github.io
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Configurar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Instalar dependências imutáveis
        run: npm ci

      - name: Build de produção
        run: npm run build

      - name: Desabilitar Jekyll
        run: touch out/.nojekyll

      - name: Enviar artefato do Pages
        uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    name: Publicar
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Publicar no GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Depois clique em **Commit changes**. Em **Settings → Pages**, confirme que a origem é **GitHub Actions**. O deploy será executado em cada push para `main`.

## Conferência final

1. Abra a aba **Actions** e confirme que os workflows `Qualidade` e `Publicar no GitHub Pages` aparecem.
2. Execute `Qualidade` manualmente ou faça um push para `main`.
3. Após o deploy, verifique o endereço do GitHub Pages configurado para o repositório.
