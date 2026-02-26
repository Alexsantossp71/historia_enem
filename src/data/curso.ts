export interface Aula {
  id: string;
  slug: string;
  titulo: string;
  conteudo: string;
  dicaEnem: string;
  questoes: Questao[];
  exercicios: Exercicio[];
}

export interface Modulo {
  id: string;
  slug: string;
  titulo: string;
  descricao: string;
  icone: string;
  cor: string;
  aulas: Aula[];
}

export interface Questao {
  enunciado: string;
  alternativas: string[];
  correta: number;
  comentario: string;
}

export interface Exercicio {
  enunciado: string;
  alternativas: string[];
  correta: number;
}

export const modulos: Modulo[] = [
  {
    id: '1',
    slug: 'historia-brasil',
    titulo: 'História do Brasil',
    descricao: 'Do Brasil pré-colonial à redemocratização, passando pelo Império, República e Ditadura Militar.',
    icone: '🇧🇷',
    cor: '#22c55e',
    aulas: [
      {
        id: '1-1',
        slug: 'povos-indigenas',
        titulo: 'Brasil Pré-Colonial: Povos Indígenas',
        conteudo: `
## Introdução

Antes da chegada dos europeus em 1500, o território que hoje corresponde ao Brasil era habitado por diversos povos indígenas há milhares de anos. Estima-se que, no momento do contato com os portugueses, havia entre 2 e 4 milhões de indígenas no território brasileiro, distribuídos em centenas de etnias diferentes, com línguas, costumes e organizações sociais distintas.

## Troncos Linguísticos no Brasil

Os povos indígenas brasileiros podem ser agrupados em quatro grandes troncos linguísticos principais:

### Tronco Tupi
Era o mais difundido, ocupando grande parte do litoral brasileiro. Incluía os Tupinambá, Tupiniquim, Potiguara, Tabajara e muitos outros.

### Tronco Jê (Macro-Jê)
Englobava povos que habitavam principalmente o interior do Brasil, como os Kayapó, Xavante e Bororo.

### Troncos Aruak e Karib
Compostos por povos que ocupavam principalmente a região Norte do Brasil.

## Os Tupinambá

Os Tupinambá foram um dos povos mais estudados pelos cronistas coloniais. Habitavam o litoral da região que vai da Bahia ao Rio de Janeiro.

**Organização Social:**
- Aldeias chamadas "tabas"
- Economia baseada na agricultura de coivara
- Cultivo de mandioca, milho, batata e amendoim
- Prática da antropofagia ritualística

## Organização Social e Cultural

- As aldeias variavam grandemente em tamanho
- O parentesco era a base da organização social
- Estrutura matrilinear entre os Tupi
- Religiosidade animista
- Pajés como intermediários entre mundos

## Guerras Intertribais

A guerra entre grupos indígenas era uma prática constante e tinha múltiplos significados: captura de prisioneiros, vingança e demonstração de valor guerreiro.
        `,
        dicaEnem: 'As questões sobre povos indígenas costumam abordar a diversidade cultural, a organização social, as relações com os colonizadores e a compreensão das práticas indígenas em seus próprios termos culturais, evitando visões etnocêntricas.',
        questoes: [
          {
            enunciado: 'Os tupinambás sentiam a necessidade da vingança para aplacar a tristeza e compensar a morte de um parente. Mas havia também um objetivo adicional. Ao matarem o prisioneiro, os indígenas tentavam absorver, por meio do canibalismo, as qualidades do inimigo — como se fosse um ato de incorporação. O texto apresenta uma explicação para o canibalismo praticado pelos tupinambás que:',
            alternativas: [
              'reforça a ideia de que os indígenas eram selvagens e precisavam ser catequizados.',
              'demonstra que o canibalismo era uma prática comum a todos os povos indígenas brasileiros.',
              'revela o significado ritualístico da prática, associado à vingança e à absorção de qualidades.',
              'indica que o canibalismo era uma forma de punição para criminosos dentro da tribo.',
              'sugere que o canibalismo resultava da falta de alimentos nas aldeias indígenas.'
            ],
            correta: 2,
            comentario: 'O canibalismo entre os Tupinambá tinha significado ritualístico, relacionado à vingança e à absorção das qualidades do inimigo, não sendo resultado de selvageria ou fome.'
          }
        ],
        exercicios: [
          {
            enunciado: 'Sobre os povos indígenas que habitavam o território brasileiro antes da chegada dos portugueses, é correto afirmar:',
            alternativas: [
              'Constituíam um grupo homogêneo, com mesma língua e costumes.',
              'Pertenciam exclusivamente ao tronco linguístico Tupi.',
              'Eram divididos em diversos grupos com línguas e culturas diferentes.',
              'Não praticavam a agricultura, vivendo apenas da caça e coleta.',
              'Desconheciam completamente a noção de propriedade coletiva.'
            ],
            correta: 2
          }
        ]
      },
      {
        id: '1-2',
        slug: 'periodo-pre-colonial',
        titulo: 'Período Pré-Colonial (1500-1530)',
        conteudo: `
## Introdução

O período pré-colonial, compreendido entre 1500 e 1530, representa uma fase singular na história do Brasil, caracterizada pela ausência de uma colonização efetiva por parte da Coroa Portuguesa.

## A Chegada dos Portugueses

### A Expedição de Pedro Álvares Cabral
- 22 de abril de 1500: frota avistou o Monte Pascoal
- 13 navios e cerca de 1.500 homens
- Carta de Pero Vaz de Caminha: documento mais importante
- Primeira missa em 26 de abril de 1500

### O Tratado de Tordesilhas (1494)
- Linha imaginária a 370 léguas a oeste de Cabo Verde
- Divisão do mundo entre Portugal e Espanha
- Maior parte do atual Brasil ficava no lado português

## A Exploração do Pau-Brasil

O pau-brasil foi a primeira riqueza natural que atraiu o interesse econômico dos portugueses.

**Características da exploração:**
- Madeira vermelha para tintura de tecidos
- Sistema de feitorias no litoral
- Escambo com os indígenas
- Monopólio real

## O Escambo

A relação entre portugueses e indígenas foi marcada pelo escambo comercial:
- Indígenas cortavam e transportavam pau-brasil
- Recebiam ferramentas, tecidos, miçangas
- Criou dependência dos produtos europeus

## A Transição para a Colonização

### Motivos para colonização efetiva:
- Ameaça de invasões estrangeiras (franceses)
- Concorrência com a Espanha
- Crise do comércio oriental

### Expedição de Martim Afonso de Sousa (1530)
- Fundação de São Vicente (1532)
- Início do sistema de Capitanias Hereditárias
        `,
        dicaEnem: 'O período pré-colonial é frequentemente cobrado em questões sobre o escambo, as feitorias, e a transição para a colonização efetiva. Entenda as diferenças entre exploração e colonização.',
        questoes: [
          {
            enunciado: 'Durante o período denominado "pré-colonial", a relação entre portugueses e indígenas foi marcada pelo escambo, que consistia na:',
            alternativas: [
              'utilização da mão de obra indígena para a agricultura de exportação.',
              'captura de indígenas para serem vendidos como escravos na Europa.',
              'troca de produtos europeus por pau-brasil extraído pelos indígenas.',
              'conversão dos indígenas ao cristianismo em troca de proteção.',
              'aliança militar contra os invasores franceses e holandeses.'
            ],
            correta: 2,
            comentario: 'O escambo era a troca de produtos europeus por pau-brasil extraído pelos indígenas. Não envolvia trabalho forçado ou escravidão neste período.'
          }
        ],
        exercicios: [
          {
            enunciado: 'O período compreendido entre 1500 e 1530 é conhecido como pré-colonial porque:',
            alternativas: [
              'os portugueses não tinham conhecimento da existência do território.',
              'não houve tentativas de exploração econômica do território.',
              'os franceses ocuparam militarmente a região.',
              'não houve colonização efetiva, apenas exploração do pau-brasil.',
              'os indígenas resistiram a qualquer contato com os europeus.'
            ],
            correta: 3
          }
        ]
      },
      {
        id: '1-3',
        slug: 'administracao-colonial',
        titulo: 'Administração Colonial',
        conteudo: `
## O Sistema de Capitanias Hereditárias (1534)

### Contexto e Motivações
- Ameaça de invasões estrangeiras
- Contrabando de pau-brasil
- Ausência de ocupação efetiva
- Coroa sem recursos para colonização

### Características do Sistema
- 15 capitanias distribuídas a 12 donatários
- Carta de doação definia direitos e obrigações
- Transmissibilidade hereditária
- Donatários responsáveis por povoar e defender

### Resultados Desiguais
- **Sucesso:** Pernambuco e São Vicente
- **Fracasso:** Capitanias do Norte, Bahia

## O Governo Geral (1548)

### Motivação
- Necessidade de centralização administrativa
- Insuficiência do sistema de capitanias
- Defesa contra invasões

### Estrutura
- **Governador Geral:** autoridade máxima
- **Ouvidor-Mor:** justiça
- **Provedor-Mor:** fazenda

### Primeiros Governadores
- **Tomé de Sousa (1549-1553):** fundação de Salvador, trouxe jesuítas
- **Duarte da Costa (1553-1558):** conflitos com jesuítas
- **Mem de Sá (1558-1572):** expulsão dos franceses do RJ

## Câmaras Municipais

- Órgãos de administração local
- Controlados pelos "homens bons"
- Vereadores eleitos por proprietários
- Funções: comércio local, ordem pública, obras

## Comparação entre Sistemas

| Aspecto | Capitanias | Governo Geral |
|---------|-----------|---------------|
| Natureza | Privatista | Centralizada |
| Autoridade | Donatário | Governador |
| Nomeação | Hereditária | Real |
        `,
        dicaEnem: 'Compare sempre os dois sistemas administrativos: Capitanias Hereditárias (descentralizado, privatista) e Governo Geral (centralizado, real). Entenda as motivações de cada um.',
        questoes: [
          {
            enunciado: 'Em 1534, o rei de Portugal D. João III dividiu o território brasileiro em quinze partes, chamadas capitanias hereditárias. Essa divisão tinha como principal objetivo:',
            alternativas: [
              'promover a independência do Brasil em relação a Portugal.',
              'democratizar o acesso à terra para todos os colonos.',
              'ocupar e defender o território com menores custos para a Coroa.',
              'estimular a imigração de funcionários reais para a colônia.',
              'criar um sistema federativo de governo na América portuguesa.'
            ],
            correta: 2,
            comentario: 'O sistema permitia transferir os custos de ocupação para os donatários, já que a Coroa não dispunha de recursos para financiar a colonização.'
          }
        ],
        exercicios: [
          {
            enunciado: 'A criação do Governo Geral em 1548 representou uma mudança na política administrativa portuguesa para o Brasil, pois:',
            alternativas: [
              'extinguiu todas as capitanias hereditárias existentes.',
              'centralizou a administração colonial sob autoridade real.',
              'transferiu a capital de Salvador para o Rio de Janeiro.',
              'concedeu independência administrativa às capitanias.',
              'eliminou a participação dos colonos na administração local.'
            ],
            correta: 1
          }
        ]
      },
      {
        id: '1-4',
        slug: 'economia-aucareira',
        titulo: 'Economia Açucareira',
        conteudo: `
## O Açúcar no Contexto Mundial

O açúcar era, no século XVI, um produto de alto valor na Europa, consumido principalmente pelas elites.

**Portugal possuía experiência em:**
- Ilhas atlânticas (Madeira, Açores, Cabo Verde)
- Técnicas de cultivo e processamento
- Redes comerciais estabelecidas

## A Estrutura do Engenho

O engenho era a unidade básica de produção açucareira, um complexo agroindustrial.

### Componentes:
- **Canaviais:** áreas de cultivo
- **Moenda:** extração do caldo
- **Casa das caldeiras:** fervura e purificação
- **Casa de purgar:** secagem e acabamento

### Tipos de Engenho
- **Engenho real:** açúcar de qualidade superior
- **Engenho de fazer mel:** rapadura e mel

## A Sociedade Açucareira

### Hierarquia Social
1. **Senhor de engenho:** topo da pirâmide
2. **Comerciantes e funcionários:** elite
3. **Lavradores de cana:** camada intermediária
4. **Trabalhadores livres pobres:** base livre
5. **Escravizados africanos:** base da pirâmide

### Família Patriarcal
- Pai com autoridade absoluta
- Mulheres reclusas ao espaço doméstico
- Poligamia informal

## O Declínio

A partir do século XVII:
- Concorrência das Antilhas
- Holandeses levaram tecnologia para o Caribe
- Estagnação econômica do Nordeste
        `,
        dicaEnem: 'A economia açucareira é tema frequente. Foque em: estrutura do engenho, hierarquia social, pacto colonial e o declínio com a concorrência antilhana.',
        questoes: [
          {
            enunciado: 'O engenho de açúcar no Brasil colonial era uma unidade de produção que combinava agricultura e transformação artesanal. Sobre a estrutura do engenho, é correto afirmar que:',
            alternativas: [
              'era baseado na pequena propriedade familiar e na mão de obra livre.',
              'constituía um complexo agroindustrial que dependia de grande investimento de capital.',
              'dedicava-se à produção diversificada de alimentos para o mercado interno.',
              'empregava exclusivamente trabalhadores assalariados europeus.',
              'estava voltado para o abastecimento do mercado colonial.'
            ],
            correta: 1,
            comentario: 'O engenho exigia investimentos significativos em terras, equipamentos, mão de obra escravizada e infraestrutura.'
          }
        ],
        exercicios: [
          {
            enunciado: 'A economia açucareira implantada no Brasil colonial caracterizou-se por:',
            alternativas: [
              'pequenas propriedades voltadas para a subsistência.',
              'mão de obra livre e assalariada de imigrantes europeus.',
              'monocultura exportadora baseada na grande propriedade.',
              'diversificação produtiva para o mercado interno.',
              'produção artesanal independente do capital mercantil.'
            ],
            correta: 2
          }
        ]
      },
      {
        id: '1-5',
        slug: 'mineracao',
        titulo: 'Mineração e Interiorização',
        conteudo: `
## A Descoberta do Ouro

- **1693:** primeiras descobertas em Minas Gerais
- Corrida do ouro atraiu milhares de pessoas
- Descobertas posteriores em Goiás (1720s) e Mato Grosso (1719)

## Transformações

### Espaciais
- Interiorização do povoamento
- Mudança do eixo econômico (NE → Centro-Sul)
- Transferência da capital (Salvador → Rio de Janeiro, 1763)

### Urbanização
- Vila Rica (Ouro Preto)
- Sabará
- São João del-Rei
- Diamantina

## Sociedade Mineradora

**Diferenças em relação à sociedade açucareira:**
- Maior urbanização
- Maior mobilidade social
- População mais diversificada
- Barroco mineiro

## Conflitos

### Guerra dos Emboabas (1707-1709)
- Conflito entre paulistas e forasteiros
- Disputa pelas minas
- Vitória dos emboabas

### Inconfidência Mineira (1789)
- Movimento pela independência
- Líderes: Tiradentes, Cláudio Manuel da Costa, Tomás Antônio Gonzaga
- Denunciado antes de se concretizar
- Tiradentes executado em 1792
        `,
        dicaEnem: 'O ciclo do ouro trouxe transformações espaciais importantes: interiorização, urbanização e mudança do eixo econômico. A Inconfidência Mineira é tema frequente.',
        questoes: [
          {
            enunciado: 'O ciclo do ouro, no século XVIII, provocou profundas transformações na colônia brasileira, entre as quais se destaca:',
            alternativas: [
              'a manutenção do eixo econômico no Nordeste açucareiro.',
              'o aumento da urbanização e a interiorização do povoamento.',
              'o declínio do tráfico negreiro e a abolição da escravidão.',
              'a redução do controle fiscal por parte da metrópole.',
              'o fim dos conflitos entre paulistas e emboabas.'
            ],
            correta: 1,
            comentario: 'O ciclo do ouro promoveu a interiorização do povoamento e estimulou a urbanização com cidades como Vila Rica.'
          }
        ],
        exercicios: [
          {
            enunciado: 'A Inconfidência Mineira (1789) foi um movimento que:',
            alternativas: [
              'pretendia a independência do Brasil e a manutenção da escravidão.',
              'foi liderado exclusivamente por membros da elite intelectual mineira.',
              'fracassou após ser denunciado às autoridades portuguesas.',
              'obteve apoio popular generalizado em Minas Gerais.',
              'resultou na execução de todos os conspiradores.'
            ],
            correta: 2
          }
        ]
      },
      {
        id: '1-6',
        slug: 'escravidao',
        titulo: 'Escravidão no Brasil',
        conteudo: `
## O Tráfico Negreiro

O tráfico negreiro foi o maior deslocamento forçado de pessoas da história.

**Números:**
- Cerca de 4,8 milhões de africanos trazidos ao Brasil
- Séculos XVI a XIX
- Principais portos: Luanda, Benguela, Costa da Mina

## O Escravo na Sociedade Colonial

- Considerado propriedade, sem personalidade jurídica
- Trabalhava em diversas atividades
- Alforria possível, mas rara
- Dependência do tráfico africano

## Resistência à Escravidão

### Formas de Resistência
- Fugas individuais e coletivas
- Formação de quilombos
- Revoltas
- Assassinatos de senhores
- Suicídios e infanticídios
- Sabotagem

### Quilombo dos Palmares
- Localizado em Alagoas
- Resistiu por quase todo o século XVII
- Destruição em 1694
- Zumbi: líder mais famoso
        `,
        dicaEnem: 'A escravidão é um dos temas mais cobrados. Foque em: tráfico negreiro, resistência (quilombos), e a presença africana na formação cultural brasileira.',
        questoes: [
          {
            enunciado: 'O Quilombo dos Palmares, existente no atual estado de Alagoas durante o século XVII, foi:',
            alternativas: [
              'uma comunidade de indígenas que resistiu à colonização portuguesa.',
              'um reduto de escravos fugidos que resistiu por décadas à dominação colonial.',
              'uma vila de portugueses que se rebelou contra a Coroa.',
              'um entreposto comercial de franceses no litoral nordestino.',
              'uma missão jesuítica que catequizava indígenas.'
            ],
            correta: 1,
            comentario: 'Palmares foi o maior quilombo do Brasil, formado por escravos fugidos que resistiu por quase todo o século XVII.'
          }
        ],
        exercicios: [
          {
            enunciado: 'O tráfico negreiro para o Brasil:',
            alternativas: [
              'trouxe cerca de 500 mil africanos ao longo de três séculos.',
              'foi responsável pela vinda de cerca de 4,8 milhões de africanos.',
              'foi proibido desde o início da colonização.',
              'envolvia apenas portugueses e brasileiros.',
              'decorreu da escassez de mão de obra indígena.'
            ],
            correta: 1
          }
        ]
      },
      {
        id: '1-7',
        slug: 'primeiro-reinado',
        titulo: 'Primeiro Reinado',
        conteudo: `
## A Independência do Brasil

- **7 de setembro de 1822:** Grito do Ipiranga
- D. Pedro I proclama a independência
- Separação negociada
- Elite agrária mantida no poder

## Constituição de 1824

- Outorgada por D. Pedro I
- **Poder Moderador:** intervenção do imperador
- Catolicismo como religião oficial
- Voto censitário

## Conflitos

### Confederação do Equador (1824)
- Movimento separatista em Pernambuco
- Líder: Frei Caneca
- Duramente reprimido

## Abdicação

- **7 de abril de 1831:** D. Pedro I abdica
- Pressões políticas e militares
- Herdeiro com apenas 5 anos
        `,
        dicaEnem: 'A Independência e o Primeiro Reinado são temas importantes. Entenda o papel do Poder Moderador e a Confederação do Equador como movimento de resistência.',
        questoes: [
          {
            enunciado: 'A Constituição de 1824, outorgada por D. Pedro I, estabeleceu o Poder Moderador, que:',
            alternativas: [
              'garantia a separação entre Igreja e Estado.',
              'permitia ao imperador intervir nos demais poderes.',
              'estabelecia o voto universal e secreto.',
              'criava um sistema parlamentarista puro.',
              'garantia a liberdade de religião.'
            ],
            correta: 1,
            comentario: 'O Poder Moderador permitia ao imperador intervir nos demais poderes, concentrando autoridade na figura do monarca.'
          }
        ],
        exercicios: [
          {
            enunciado: 'A Independência do Brasil, proclamada em 1822, caracterizou-se por:',
            alternativas: [
              'ter sido um processo revolucionário com participação popular.',
              'manter a unidade territorial e a elite agrária no poder.',
              'abolir imediatamente a escravidão.',
              'instalar um regime republicano.',
              'contar com apoio unânime das províncias.'
            ],
            correta: 1
          }
        ]
      },
      {
        id: '1-8',
        slug: 'periodo-regencial',
        titulo: 'Período Regencial',
        conteudo: `
## Contexto

- D. Pedro II tinha apenas 5 anos
- Regências governaram em seu nome
- Período de instabilidade

## Regências

- **Regência Trina (1831-1834):** três regentes
- **Regência Una (1834-1840):** um regente

## Ato Adicional de 1834

- Maior autonomia às províncias
- Criou Assembleias Legislativas Provinciais

## Revoltas Regenciais

### Cabanagem (PA, 1835-1840)
- Revolta popular
- Cabanos tomaram o poder
- Maior participação popular

### Balaiada (MA, 1838-1841)
- Combateu grandes proprietários
- Envolveu vaqueiros e escravos

### Sabinada (BA, 1837-1838)
- Movimento separatista
- Líder: Francisco Sabino

### Revolução Farroupilha (RS, 1835-1845)
- Maior duração
- Reivindicações federalistas
- República de Piratini

## Maioridade

- **1840:** D. Pedro II declarado maior
- Golpe da Maioridade
- Fim do período regencial
        `,
        dicaEnem: 'O Período Regencial foi marcado por revoltas provinciais. Entenda as características de cada movimento e a relação com a centralização/descentralização.',
        questoes: [
          {
            enunciado: 'O Período Regencial (1831-1840) foi marcado por diversas revoltas provinciais, entre as quais se destaca a Cabanagem, ocorrida no:',
            alternativas: [
              'Rio Grande do Sul, reivindicando maior autonomia fiscal.',
              'Maranhão, contra os grandes proprietários de terras.',
              'Pará, com participação popular significativa.',
              'Bahia, liderada por Francisco Sabino.',
              'Minas Gerais, contra a cobrança de impostos.'
            ],
            correta: 2,
            comentario: 'A Cabanagem no Pará foi um movimento com grande participação popular, chegando os cabanos a tomar o poder provincial.'
          }
        ],
        exercicios: [
          {
            enunciado: 'A Revolução Farroupilha (1835-1845) foi:',
            alternativas: [
              'uma revolta de escravos contra a monarquia.',
              'o movimento regencial de maior duração.',
              'um conflito entre portugueses e brasileiros.',
              'uma guerra contra a Argentina.',
              'uma rebelião de militares no Rio de Janeiro.'
            ],
            correta: 1
          }
        ]
      },
      {
        id: '1-9',
        slug: 'segundo-reinado',
        titulo: 'Segundo Reinado',
        conteudo: `
## Estabilidade Política

- Longo reinado de D. Pedro II (1840-1889)
- Sistema parlamentarista
- Alternância entre Partido Liberal e Conservador

## Economia Cafeeira

- Café como principal produto de exportação
- Expansão pelo Vale do Paraíba e Oeste Paulista
- Imigração europeia para as lavouras

## Abolição Gradual

- **Lei Eusébio de Queirós (1850):** fim do tráfico
- **Lei do Ventre Livre (1871):** filhos de escravas nasciam livres
- **Lei dos Sexagenários (1885):** liberdade aos maiores de 60 anos
- **Lei Áurea (1888):** abolição total

## Guerra do Paraguai (1864-1870)

- Maior conflito da América do Sul
- Tríplice Aliança: Brasil, Argentina, Uruguai
- Devastação do Paraguai
- Consequências para o Brasil

## Questão Militar

- Conflitos entre militares e governo civil
- Militares insatisfeitos com tratamento
- Antecedente da Proclamação da República
        `,
        dicaEnem: 'O Segundo Reinado é tema frequente. Foque na abolição gradual, na Guerra do Paraguai e na transição para a República.',
        questoes: [
          {
            enunciado: 'A Lei Áurea, assinada pela Princesa Isabel em 13 de maio de 1888, representou:',
            alternativas: [
              'o início do processo abolicionista no Brasil.',
              'a abolição gradual da escravidão ao longo de dez anos.',
              'o fim oficial da escravidão no Brasil sem indenização aos proprietários.',
              'a concessão de terras aos escravos libertos.',
              'a implementação de um plano de integração dos ex-escravos ao mercado de trabalho.'
            ],
            correta: 2,
            comentario: 'A Lei Áurea aboliu totalmente a escravidão sem qualquer indenização aos proprietários e sem medidas de integração dos libertos.'
          }
        ],
        exercicios: [
          {
            enunciado: 'A Guerra do Paraguai (1864-1870):',
            alternativas: [
              'envolveu apenas Brasil e Paraguai.',
              'foi vencida pelo Paraguai.',
              'contou com a Tríplice Aliança contra o Paraguai.',
              'não afetou a política interna brasileira.',
              'resultou na anexação do Paraguai pelo Brasil.'
            ],
            correta: 2
          }
        ]
      },
      {
        id: '1-10',
        slug: 'proclamacao-republica',
        titulo: 'Proclamação da República',
        conteudo: `
## O Golpe de 1889

- **15 de novembro de 1889:** Proclamação da República
- Marechal Deodoro da Fonseca liderou o golpe
- D. Pedro II deposto sem resistência

## República da Espada (1889-1894)

- Governos militares provisórios
- Deodoro da Fonseca (1889-1891)
- Floriano Peixoto (1891-1894)

## Constituição de 1891

- Forma federativa de governo
- Presidencialismo
- Três poderes independentes
- Voto aberto (masculino e restrito)
- Separação Igreja-Estado

## Transformações

- Fim do poder hereditário
- Estados com autonomia
- Nova bandeira nacional
- Mudança de símbolos nacionais
        `,
        dicaEnem: 'A Proclamação da República foi um golpe militar, não um movimento popular. Entenda as características da República da Espada e da Constituição de 1891.',
        questoes: [
          {
            enunciado: 'A Proclamação da República, em 15 de novembro de 1889, caracterizou-se por:',
            alternativas: [
              'ter sido um movimento popular com ampla participação de trabalhadores.',
              'resultar de um golpe militar liderado pelo Marechal Deodoro da Fonseca.',
              'instalar imediatamente um regime democrático com voto universal.',
              'contar com o apoio ativo da família imperial brasileira.',
              'promover profundas reformas sociais logo nos primeiros dias.'
            ],
            correta: 1,
            comentario: 'A República foi proclamada por um golpe militar liderado por Deodoro da Fonseca, sem participação popular significativa.'
          }
        ],
        exercicios: [
          {
            enunciado: 'A Constituição de 1891 estabeleceu:',
            alternativas: [
              'o voto universal e secreto para todos os cidadãos.',
              'o parlamentarismo como sistema de governo.',
              'a forma federativa de Estado.',
              'a religião católica como oficial do Estado.',
              'o poder hereditário através do senado.'
            ],
            correta: 2
          }
        ]
      },
      {
        id: '1-11',
        slug: 'republica-velha',
        titulo: 'República Velha',
        conteudo: `
## Política do Café com Leite

- Domínio de São Paulo e Minas Gerais
- Alternância entre presidentes paulistas e mineiros
- Controle do poder federal

## Coronelismo

- Chefes locais controlavam eleitores
- Voto de cabresto
- Fidelidade em troca de favores

## Política dos Governadores

- Apoio federal às oligarquias estaduais
- Troca de favores entre governo federal e estaduais
- Estabilidade política mantida

## Movimentos de Oposição

### Tenentismo
- Movimento militar reformista
- Revolta dos 18 do Forte (1922)
- Coluna Prestes (1925-1927)

### Semana de Arte Moderna (1922)
- Marco do modernismo brasileiro
- Rompimento com padrões acadêmicos
- Nova identidade cultural

## Crise

- Crise de 1929 afetou a economia cafeeira
- Quebra da hegemonia oligárquica
- Revolução de 1930
        `,
        dicaEnem: 'A República Velha é tema muito cobrado. Entenda: coronelismo, voto de cabresto, política do café com leite e o movimento tenentista.',
        questoes: [
          {
            enunciado: 'Durante a República Velha (1889-1930), o controle político era exercido através do coronelismo, que consistia:',
            alternativas: [
              'no poder dos militares sobre o governo civil.',
              'no domínio dos grandes industriais sobre a política nacional.',
              'no controle dos chefes locais sobre os eleitores através de favores.',
              'na influência da Igreja Católica sobre as eleições.',
              'no poder dos sindicatos sobre os trabalhadores rurais.'
            ],
            correta: 2,
            comentario: 'O coronelismo era o controle exercido pelos chefes locais (coronéis) sobre os eleitores, através de favores e coerção.'
          }
        ],
        exercicios: [
          {
            enunciado: 'A Revolução de 1930 foi desencadeada por:',
            alternativas: [
              'uma insatisfação popular com a monarquia.',
              'uma aliança entre oligarquias dissidentes e tenentes.',
              'um golpe militar isolado sem apoio civil.',
              'uma intervenção estrangeira.',
              'uma greve geral dos trabalhadores industriais.'
            ],
            correta: 1
          }
        ]
      },
      {
        id: '1-12',
        slug: 'era-vargas',
        titulo: 'Era Vargas (1930-1945)',
        conteudo: `
## Revolução de 1930

- Fim da República Velha
- Getúlio Vargas assumiu o poder
- Governo Provisório (1930-1934)

## Governo Constitucional

- Constituição de 1934
- Voto feminino e secreto
- Justiça Eleitoral

## Estado Novo (1937-1945)

### Características
- Ditadura
- Centralização política
- Nacionalismo econômico
- Censura e repressão

### Realizações
- **Industrialização:** CSN, Vale do Rio Doce, Petrobras
- **CLT:** Consolidação das Leis do Trabalho
- **Infraestrutura:** estradas, usinas

## Fim do Estado Novo

- Pressões democráticas pós-Segunda Guerra
- Vargas deposto em 1945
- Início do período democrático
        `,
        dicaEnem: 'A Era Vargas é um dos temas mais cobrados. Foque nas características do Estado Novo, na industrialização e na CLT.',
        questoes: [
          {
            enunciado: 'O Estado Novo (1937-1945), governo ditatorial de Getúlio Vargas, caracterizou-se por:',
            alternativas: [
              'liberalismo econômico e descentralização política.',
              'nacionalismo econômico e repressão política.',
              'governo parlamentarista e liberdade de imprensa.',
              'aliança com países do Eixo durante a Segunda Guerra.',
              'abolição dos direitos trabalhistas conquistados anteriormente.'
            ],
            correta: 1,
            comentario: 'O Estado Novo foi uma ditadura com nacionalismo econômico, industrialização via estatais e repressão política com censura.'
          }
        ],
        exercicios: [
          {
            enunciado: 'A Consolidação das Leis do Trabalho (CLT), de 1943:',
            alternativas: [
              'extinguiu todos os direitos trabalhistas existentes.',
              'unificou a legislação trabalhista brasileira.',
              'foi criada durante o governo de Juscelino Kubitschek.',
              'estabeleceu o trabalho escravo.',
              'foi rejeitada pelos trabalhadores.'
            ],
            correta: 1
          }
        ]
      },
      {
        id: '1-13',
        slug: 'republica-populista',
        titulo: 'República Populista (1945-1964)',
        conteudo: `
## Contexto

- Período democrático
- Alternância entre PSD e UDN
- Desenvolvimento econômico com demandas sociais

## Presidentes

### Getúlio Vargas (1951-1954)
- Eleito democraticamente
- Oposição forte
- Suicídio em 1954

### Juscelino Kubitschek (1956-1961)
- "50 anos em 5"
- Industrialização acelerada
- Construção de Brasília
- Endividamento externo

### Jânio Quadros (1961)
- Eleito com promessa de moralização
- Governou apenas 7 meses
- Renúncia surpreendente

### João Goulart (1961-1964)
- Vice de Jânio
- Crise política
- Reformas de base
- Golpe militar em 1964
        `,
        dicaEnem: 'O período populista é cobrado com frequência. Entenda as Reformas de Base, a construção de Brasília e o contexto do golpe de 1964.',
        questoes: [
          {
            enunciado: 'O governo de Juscelino Kubitschek (1956-1961) caracterizou-se pelo slogan "50 anos em 5", que representava:',
            alternativas: [
              'um projeto de reforma agrária em larga escala.',
              'um plano de industrialização acelerada do país.',
              'uma campanha de alfabetização de adultos.',
              'um programa de integração dos ex-escravos.',
              'uma política de isolamento internacional.'
            ],
            correta: 1,
            comentario: 'O slogan "50 anos em 5" representava o projeto de industrialização acelerada, incluindo a construção de Brasília.'
          }
        ],
        exercicios: [
          {
            enunciado: 'João Goulart foi deposto em 1964 por:',
            alternativas: [
              'uma revolta popular.',
              'um golpe militar apoiado por setores conservadores.',
              'uma eleição fraudada.',
              'um impeachment no Congresso.',
              'uma intervenção estrangeira.'
            ],
            correta: 1
          }
        ]
      },
      {
        id: '1-14',
        slug: 'ditadura-militar',
        titulo: 'Ditadura Militar (1964-1985)',
        conteudo: `
## O Golpe de 1964

- 31 de março a 1º de abril de 1964
- Deposição de João Goulart
- Instalação do regime autoritário

## Fases do Regime

### Castelo Branco (1964-1967)
- "Moderados"
- Constituição de 1967

### Costa e Silva e Médici (1967-1974)
- "Linha-dura"
- AI-5 (1968): fechamento do Congresso
- Anos de chumbo
- Milagre econômico

### Geisel e Figueiredo (1974-1985)
- Abertura "lenta, gradual e segura"
- Lei da Anistia (1979)
- Diretas Já (1984)

## Características

- Censura prévia
- Tortura e repressão
- Cassação de direitos políticos
- Intervenção em sindicatos e universidades

## Resistência

- Movimento estudantil
- Guerrilhas urbanas e rurais
- Oposição política
- Movimentos sociais
        `,
        dicaEnem: 'A Ditadura Militar é tema muito cobrado. Entenda: AI-5, anos de chumbo, milagre econômico, abertura política e Lei da Anistia.',
        questoes: [
          {
            enunciado: 'O Ato Institucional número 5 (AI-5), decretado em 1968 durante o regime militar, estabeleceu:',
            alternativas: [
              'a redemocratização completa do país.',
              'o fechamento do Congresso Nacional e a suspensão de garantias constitucionais.',
              'a eleição direta para presidente.',
              'a anistia para todos os presos políticos.',
              'o fim da censura aos meios de comunicação.'
            ],
            correta: 1,
            comentario: 'O AI-5 foi o mais repressivo dos Atos Institucionais, fechando o Congresso e suspendendo garantias constitucionais.'
          }
        ],
        exercicios: [
          {
            enunciado: 'A Campanha das Diretas Já, em 1984:',
            alternativas: [
              'conseguiu aprovar eleições diretas para presidente em 1984.',
              'mobilizou milhões de brasileiros exigindo eleições diretas.',
              'foi organizada pelo governo militar.',
              'não teve participação popular significativa.',
              'resultou na volta da monarquia.'
            ],
            correta: 1
          }
        ]
      },
      {
        id: '1-15',
        slug: 'brasil-contemporaneo',
        titulo: 'Brasil Contemporâneo',
        conteudo: `
## Redemocratização

- Eleição indireta de Tancredo Neves (1984)
- Morte de Tancredo
- José Sarney assume (1985-1990)

## Constituição de 1988

- "Constituição Cidadã"
- Direitos e garantias individuais
- SUS, FGTS, 13º salário
- Voto aos analfabetos

## Planos Econômicos

### Collor (1990-1992)
- Confisco das poupanças
- Abertura comercial
- Impeachment em 1992

### Itamar Franco (1992-1994)
- Plano Real
- Estabilização da moeda
- FHC ministro da Fazenda

### FHC (1995-2002)
- Privatizações
- Reeleição
- Estabilidade econômica

### Lula (2003-2010)
- Bolsa Família
- Expansão do consumo
- Polêmicas sobre mensalão

### Dilma (2011-2016)
- Crise econômica
- Protestos de 2013
- Impeachment em 2016
        `,
        dicaEnem: 'O Brasil contemporâneo é cobrado em questões sobre redemocratização, Constituição de 1988, planos econômicos e desafios atuais.',
        questoes: [
          {
            enunciado: 'A Constituição brasileira de 1988, conhecida como "Constituição Cidadã", estabeleceu:',
            alternativas: [
              'o voto censitário para cargos executivos.',
              'o Sistema Único de Saúde (SUS) e diversos direitos sociais.',
              'o regime monárquico de governo.',
              'a censura prévia aos meios de comunicação.',
              'o fim das eleições diretas para presidente.'
            ],
            correta: 1,
            comentario: 'A Constituição de 1988 garantiu direitos como o SUS, além de ampliar direitos sociais e individuais.'
          }
        ],
        exercicios: [
          {
            enunciado: 'O Plano Real, implementado em 1994:',
            alternativas: [
              'confiscou as poupanças dos brasileiros.',
              'estabilizou a moeda e controlou a inflação.',
              'aumentou a inflação para níveis recordes.',
              'foi implementado durante o governo Collor.',
              'introduziu o cruzeiro como nova moeda.'
            ],
            correta: 1
          }
        ]
      }
    ]
  },
  {
    id: '2',
    slug: 'historia-geral',
    titulo: 'História Geral',
    descricao: 'Das primeiras civilizações ao mundo contemporâneo, passando por todas as eras históricas.',
    icone: '🌍',
    cor: '#3b82f6',
    aulas: [
      {
        id: '2-1',
        slug: 'pre-historia',
        titulo: 'Pré-História e Revolução Neolítica',
        conteudo: `
## A Pré-História

Período anterior à invenção da escrita, dividido em:

### Paleolítico (Idade da Pedra Lascada)
- Caçadores-coletores nômades
- Vida em bandos
- Ferramentas de pedra lascada
- Domínio do fogo
- Arte rupestre

### Neolítico (Idade da Pedra Polida)
- Desenvolvimento da agricultura
- Sedentarismo
- Cerâmica e tecelagem
- Construções megalíticas

## Revolução Neolítica

Transformação fundamental ocorrida há aproximadamente 10.000 anos:

**Mudanças:**
- Transição para agricultura e pecuária
- Sedentarismo
- Aumento populacional
- Divisão do trabalho
- Surgimento das primeiras cidades
- Desenvolvimento da propriedade privada
- Estratificação social
        `,
        dicaEnem: 'A Revolução Neolítica é tema importante. Entenda a transição de caçador-coletor para agricultor e as consequências do sedentarismo.',
        questoes: [
          {
            enunciado: 'A Revolução Neolítica, ocorrida há aproximadamente 10.000 anos, foi marcada por:',
            alternativas: [
              'pelo desenvolvimento da escrita.',
              'pela transição para a agricultura e o sedentarismo.',
              'pela invenção da máquina a vapor.',
              'pela expansão do Império Romano.',
              'pelo início das grandes navegações.'
            ],
            correta: 1,
            comentario: 'A Revolução Neolítica foi marcada pela transição para a agricultura, pecuária e sedentarismo.'
          }
        ],
        exercicios: [
          {
            enunciado: 'Durante o Paleolítico, os humanos:',
            alternativas: [
              'viviam em cidades permanentes.',
              'eram caçadores-coletores nômades.',
              'praticavam a agricultura em larga escala.',
              'utilizavam exclusivamente ferramentas de metal.',
              'conheciam a escrita.'
            ],
            correta: 1
          }
        ]
      },
      {
        id: '2-2',
        slug: 'mesopotamia',
        titulo: 'Mesopotâmia',
        conteudo: `
## A Terra Entre Rios

- Região entre os rios Tigre e Eufrates
- Atual Iraque
- Crescente Fértil

## Povos da Mesopotâmia

### Sumérios
- Primeiros habitantes
- Cidades-Estado independentes
- Escrita cuneiforme
- Zigurates

### Babilônios
- Hamurabi e seu código de leis
- Unificação da região
- Jardins Suspensos da Babilônia

### Assírios
- Império militarista
- Exército organizado
- Biblioteca de Nínive

### Persas
- Ciro, o Grande
- Dario e o sistema de satrapias
- Estrada Real
- Tolerância cultural
        `,
        dicaEnem: 'A Mesopotâmia é tema importante. Foque na escrita cuneiforme, Código de Hamurabi e organização dos persas.',
        questoes: [
          {
            enunciado: 'O Código de Hamurabi, criado na Babilônia, é importante por:',
            alternativas: [
              'estabelecer a democracia na região.',
              'ser um dos primeiros conjuntos de leis escritas da história.',
              'abolir a escravidão no território.',
              'unificar todas as religiões do império.',
              'criar o primeiro sistema eleitoral.'
            ],
            correta: 1,
            comentario: 'O Código de Hamurabi é um dos primeiros conjuntos de leis escritas, estabelecendo regras para a sociedade babilônica.'
          }
        ],
        exercicios: [
          {
            enunciado: 'Os sumérios desenvolveram:',
            alternativas: [
              'a democracia ateniense.',
              'a escrita cuneiforme.',
              'o alfabeto fenício.',
              'os hieróglifos egípcios.',
              'o sistema numérico romano.'
            ],
            correta: 1
          }
        ]
      },
      {
        id: '2-3',
        slug: 'egito-antigo',
        titulo: 'Egito Antigo',
        conteudo: `
## A Terra do Nilo

- Civilização desenvolvida às margens do rio Nilo
- Cheias regulares fertilizavam o solo
- Isolamento geográfico favoreceu unidade

## Organização Política

- Faraó: deus vivo, poder absoluto
- Centralização política
- Burocracia de funcionários

## Estrutura Social

1. **Faraó:** topo da sociedade
2. **Nobres e sacerdotes:** elite
3. **Escribas:** funcionários letrados
4. **Camponeses:** maioria da população
5. **Escravos:** base da pirâmide

## Realizações

- Pirâmides de Gizé
- Escrita hieroglífica
- Mumificação
- Avanços em medicina e matemática
- Calendário solar
        `,
        dicaEnem: 'O Egito Antigo é tema frequente. Entenda a teocracia faraônica, a estrutura social e as realizações culturais.',
        questoes: [
          {
            enunciado: 'No Egito Antigo, o faraó era considerado:',
            alternativas: [
              'um representante eleito pelo povo.',
              'um deus vivo com poder absoluto.',
              'um general do exército sem poder religioso.',
              'um sacerdote subordinado aos nobres.',
              'um comerciante enriquecido.'
            ],
            correta: 1,
            comentario: 'O faraó era considerado um deus vivo, concentrando poder político e religioso.'
          }
        ],
        exercicios: [
          {
            enunciado: 'A escrita egípcia era chamada de:',
            alternativas: [
              'cuneiforme.',
              'hieroglífica.',
              'alfabética.',
              'ideogramática.',
              'fenícia.'
            ],
            correta: 1
          }
        ]
      }
    ]
  },
  {
    id: '3',
    slug: 'historia-america',
    titulo: 'História da América',
    descricao: 'Civilizações pré-colombianas, colonização e independência das Américas.',
    icone: '🌎',
    cor: '#f59e0b',
    aulas: [
      {
        id: '3-1',
        slug: 'civilizacoes-pre-colombianas',
        titulo: 'Civilizações Pré-Colombianas',
        conteudo: `
## Os Maias

- Península de Yucatán
- Cidades-Estado independentes
- Escrita hieroglífica
- Calendário preciso
- Matemática avançada (conceito de zero)

## Os Astecas

- Vale do México
- Capital: Tenochtitlán
- Império tributário
- Guerras sagradas
- Sacrifícios humanos

## Os Incas

- Andes Sul-Americanos
- Capital: Cusco
- Estado centralizado
- Estradas e mensageiros (chasquis)
- Quipus para contabilidade
- Agricultura em terraços
        `,
        dicaEnem: 'As civilizações pré-colombianas são cobradas em comparação. Entenda as características específicas de cada uma.',
        questoes: [
          {
            enunciado: 'Os incas desenvolveram um sistema de comunicação e contabilidade baseado em:',
            alternativas: [
              'hieróglifos.',
              'quipus.',
              'cuneiforme.',
              'alfabeto fenício.',
              'códices.'
            ],
            correta: 1,
            comentario: 'Os quipus eram cordéis com nós usados para contabilidade e registro de informações.'
          }
        ],
        exercicios: [
          {
            enunciado: 'A capital do Império Asteca era:',
            alternativas: [
              'Cusco.',
              'Tenochtitlán.',
              'Machu Picchu.',
              'Teotihuacán.',
              'Chichén Itzá.'
            ],
            correta: 1
          }
        ]
      }
    ]
  },
  {
    id: '4',
    slug: 'historia-africa',
    titulo: 'História da África',
    descricao: 'Reinos africanos, tráfico negreiro, colonização e África contemporânea.',
    icone: '🌍',
    cor: '#8b5cf6',
    aulas: [
      {
        id: '4-1',
        slug: 'africa-antiga',
        titulo: 'África Antiga: Reinos e Impérios',
        conteudo: `
## Reinos e Impérios Africanos

### Império de Ghana (séc. VIII-XI)
- Sahel, África Ocidental
- Comércio de ouro e sal
- Rota transaariana

### Império do Mali (séc. XIII-XVI)
- Mansa Musa: rei mais rico
- Tombuctu: centro cultural
- Islã como religião oficial

### Império Songai
- Sucessor do Mali
- Maior império da história africana
- Tombuctu e Djenné

### Grande Zimbabwe
- África Austral
- Construções em pedra
- Comércio com árabes e indianos
        `,
        dicaEnem: 'Os reinos africanos são temas crescentes no ENEM. Conheça os principais impérios e suas características.',
        questoes: [
          {
            enunciado: 'O Império do Mali, na África Ocidental, teve seu apogeu durante o reinado de:',
            alternativas: [
              'Shaka Zulu.',
              'Mansa Musa.',
              'Haile Selassie.',
              'Kwame Nkrumah.',
              'Nelson Mandela.'
            ],
            correta: 1,
            comentario: 'Mansa Musa foi o mais famoso rei do Império do Mali, considerado um dos homens mais ricos da história.'
          }
        ],
        exercicios: [
          {
            enunciado: 'O Grande Zimbabwe era conhecido por:',
            alternativas: [
              'suas pirâmides.',
              'suas construções em pedra.',
              'seu exército naval.',
              'sua indústria automobilística.',
              'seus arranha-céus.'
            ],
            correta: 1
          }
        ]
      }
    ]
  }
];

export function getModuloBySlug(slug: string): Modulo | undefined {
  return modulos.find(m => m.slug === slug);
}

export function getAulaBySlug(moduloSlug: string, aulaSlug: string): Aula | undefined {
  const modulo = getModuloBySlug(moduloSlug);
  return modulo?.aulas.find(a => a.slug === aulaSlug);
}

export function getTotalAulas(): number {
  return modulos.reduce((acc, m) => acc + m.aulas.length, 0);
}
