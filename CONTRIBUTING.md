# Como contribuir

Obrigado por querer melhorar o História ENEM. Contribuições de código, acessibilidade, revisão histórica, novas questões e documentação são bem-vindas.

## Antes de começar

1. Abra uma issue para mudanças grandes ou novos módulos.
2. Faça um fork e crie uma branch descritiva.
3. Instale as dependências com `npm ci`.
4. Execute `npm run dev` para conferir a experiência no navegador.

## Fluxo recomendado

```bash
git checkout -b feat/nova-aula
npm ci
# faça suas alterações
npm run check
git commit -m "feat: adiciona aula sobre ..."
```

Abra um pull request explicando o problema, a solução e como ela foi validada. O template de PR traz a checklist completa.

## Diretrizes para conteúdo histórico

O curso é educacional; precisão e responsabilidade importam tanto quanto clareza.

- Priorize fontes primárias, instituições de pesquisa, universidades, museus, livros acadêmicos e documentos do Inep.
- Diferencie fato documentado, interpretação historiográfica e ficção narrativa.
- Evite linguagem estereotipada, etnocêntrica ou que reduza povos e grupos a uma experiência única.
- Contextualize relações de poder, agência e diversidade social quando forem relevantes.
- Revise nomes, datas, mapas, termos e alternativas antes de enviar.
- Cada questão e exercício deve ter **cinco alternativas**, resposta correta entre `0` e `4` e texto claro.
- Narrativas em `src/content/contos/` devem apoiar uma aula existente com o mesmo slug.

Ao sugerir uma correção factual, inclua ao menos uma referência verificável na issue ou no PR.

## Diretrizes de código

- Use TypeScript estrito; não contorne erros de build com `any`, `@ts-ignore` ou configurações que ignorem erros.
- Preserve a exportação estática: não introduza dependência de banco de dados, API privada ou runtime de servidor sem discussão prévia.
- Prefira HTML semântico, rótulos explícitos e interações acessíveis por teclado.
- Não inclua chaves, dados pessoais, builds, arquivos em `out/` ou dependências não usadas.
- Use componentes pequenos e reutilizáveis; evite duplicar regras de negócio do catálogo.

## Validação obrigatória

```bash
npm run check
```

Esse comando confere formatação, lint, tipos, testes de integridade do catálogo e build estático. Para alterações visuais, teste também ao menos uma largura de celular e outra de desktop.

## Código de conduta

Ao participar, você concorda com o [Código de Conduta](CODE_OF_CONDUCT.md).
