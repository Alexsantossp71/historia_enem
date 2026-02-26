# -*- coding: utf-8 -*-
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.lib.units import cm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
import os

# Register fonts
pdfmetrics.registerFont(TTFont('SimHei', '/usr/share/fonts/truetype/chinese/SimHei.ttf'))
pdfmetrics.registerFont(TTFont('Times New Roman', '/usr/share/fonts/truetype/english/Times-New-Roman.ttf'))
pdfmetrics.registerFont(TTFont('Microsoft YaHei', '/usr/share/fonts/truetype/chinese/msyh.ttf'))

# Register font families
registerFontFamily('SimHei', normal='SimHei', bold='SimHei')
registerFontFamily('Times New Roman', normal='Times New Roman', bold='Times New Roman')
registerFontFamily('Microsoft YaHei', normal='Microsoft YaHei', bold='Microsoft YaHei')

# Create document
doc = SimpleDocTemplate(
    "/home/z/my-project/download/Curso_Historia_ENEM.pdf",
    pagesize=A4,
    rightMargin=2*cm,
    leftMargin=2*cm,
    topMargin=2*cm,
    bottomMargin=2*cm,
    title="Curso Completo de História para o ENEM",
    author="Z.ai",
    creator="Z.ai",
    subject="Curso preparatório para o ENEM - História"
)

# Define styles
styles = getSampleStyleSheet()

# Cover styles
cover_title = ParagraphStyle(
    'CoverTitle',
    fontName='Microsoft YaHei',
    fontSize=28,
    leading=34,
    alignment=TA_CENTER,
    spaceAfter=20,
    textColor=colors.HexColor('#1F4E79')
)

cover_subtitle = ParagraphStyle(
    'CoverSubtitle',
    fontName='SimHei',
    fontSize=16,
    leading=22,
    alignment=TA_CENTER,
    spaceAfter=40,
    textColor=colors.HexColor('#333333')
)

# Heading styles
h1_style = ParagraphStyle(
    'H1Style',
    fontName='Microsoft YaHei',
    fontSize=18,
    leading=24,
    alignment=TA_LEFT,
    spaceBefore=20,
    spaceAfter=12,
    textColor=colors.HexColor('#1F4E79')
)

h2_style = ParagraphStyle(
    'H2Style',
    fontName='Microsoft YaHei',
    fontSize=14,
    leading=20,
    alignment=TA_LEFT,
    spaceBefore=16,
    spaceAfter=8,
    textColor=colors.HexColor('#2E75B6')
)

h3_style = ParagraphStyle(
    'H3Style',
    fontName='SimHei',
    fontSize=12,
    leading=18,
    alignment=TA_LEFT,
    spaceBefore=12,
    spaceAfter=6,
    textColor=colors.HexColor('#333333')
)

# Body styles
body_style = ParagraphStyle(
    'BodyStyle',
    fontName='SimHei',
    fontSize=11,
    leading=18,
    alignment=TA_LEFT,
    spaceAfter=8,
    firstLineIndent=24,
    wordWrap='CJK'
)

body_no_indent = ParagraphStyle(
    'BodyNoIndent',
    fontName='SimHei',
    fontSize=11,
    leading=18,
    alignment=TA_LEFT,
    spaceAfter=8,
    wordWrap='CJK'
)

# Table styles
table_header = ParagraphStyle(
    'TableHeader',
    fontName='SimHei',
    fontSize=10,
    leading=14,
    alignment=TA_CENTER,
    textColor=colors.white
)

table_cell = ParagraphStyle(
    'TableCell',
    fontName='SimHei',
    fontSize=10,
    leading=14,
    alignment=TA_CENTER,
    wordWrap='CJK'
)

# Quote style
quote_style = ParagraphStyle(
    'QuoteStyle',
    fontName='SimHei',
    fontSize=10,
    leading=16,
    alignment=TA_LEFT,
    leftIndent=20,
    rightIndent=20,
    spaceBefore=8,
    spaceAfter=8,
    textColor=colors.HexColor('#555555'),
    wordWrap='CJK'
)

story = []

# Cover Page
story.append(Spacer(1, 100))
story.append(Paragraph("Curso Completo de História para o ENEM", cover_title))
story.append(Spacer(1, 20))
story.append(Paragraph("Um guia abrangente para dominar todos os temas cobrados no Exame", cover_subtitle))
story.append(Spacer(1, 40))
story.append(Paragraph("Distribuição das Questões no ENEM", h2_style))

# Table with distribution
dist_data = [
    [Paragraph('<b>Área</b>', table_header), Paragraph('<b>Porcentagem</b>', table_header), Paragraph('<b>Aprox. Questões</b>', table_header)],
    [Paragraph('História do Brasil', table_cell), Paragraph('49,79%', table_cell), Paragraph('~15 questões', table_cell)],
    [Paragraph('História Geral', table_cell), Paragraph('30,46%', table_cell), Paragraph('~9 questões', table_cell)],
    [Paragraph('História da América', table_cell), Paragraph('4,20%', table_cell), Paragraph('~1-2 questões', table_cell)],
    [Paragraph('História da África', table_cell), Paragraph('0,84%', table_cell), Paragraph('~1 questão', table_cell)],
]

dist_table = Table(dist_data, colWidths=[5*cm, 4*cm, 4*cm])
dist_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
    ('FONTNAME', (0, 0), (-1, -1), 'SimHei'),
    ('FONTSIZE', (0, 0), (-1, -1), 10),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
    ('TOPPADDING', (0, 0), (-1, -1), 8),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#F5F5F5')]),
]))

story.append(dist_table)
story.append(Spacer(1, 60))
story.append(Paragraph("Preparado por: Z.ai", cover_subtitle))
story.append(PageBreak())

# MODULE 1: HISTÓRIA DO BRASIL
story.append(Paragraph("MÓDULO 1: HISTÓRIA DO BRASIL", h1_style))
story.append(Spacer(1, 20))

# Aula 1.1
story.append(Paragraph("Aula 1.1: Brasil Pré-Colonial - Povos Indígenas", h2_style))
story.append(Spacer(1, 10))

story.append(Paragraph("<b>Introdução</b>", h3_style))
story.append(Paragraph(
    "Antes da chegada dos europeus em 1500, o território que hoje corresponde ao Brasil era habitado por diversos povos indígenas há milhares de anos. Estima-se que, no momento do contato com os portugueses, havia entre 2 e 4 milhões de indígenas no território brasileiro, distribuídos em centenas de etnias diferentes, com línguas, costumes e organizações sociais distintas. O estudo desses povos é fundamental para compreender a formação da sociedade brasileira e as relações estabelecidas durante o período colonial, além de ser um tema recorrente nas questões do ENEM.",
    body_style
))

story.append(Paragraph("<b>Troncos Linguísticos no Brasil</b>", h3_style))
story.append(Paragraph(
    "Os povos indígenas brasileiros podem ser agrupados em quatro grandes troncos linguísticos principais. O tronco Tupi era o mais difundido, ocupando grande parte do litoral brasileiro no momento da chegada dos portugueses. Os povos de língua Tupi incluíam os Tupinambá, Tupiniquim, Potiguara, Tabajara e muitos outros. O tronco Jê (ou Macro-Jê) englobava povos que habitavam principalmente o interior do Brasil, como os Kayapó, Xavante e Bororo. Os troncos Aruak e Karib eram compostos por povos que ocupavam principalmente a região Norte do Brasil.",
    body_style
))

story.append(Paragraph("<b>Os Tupinambá</b>", h3_style))
story.append(Paragraph(
    "Os Tupinambá foram um dos povos mais estudados pelos cronistas coloniais. Habitavam o litoral da região que vai da Bahia ao Rio de Janeiro e eram conhecidos por sua organização social baseada em aldeias chamadas 'tabas'. A economia Tupinambá era baseada na agricultura de coivara, cultivando principalmente mandioca, milho, batata e amendoim. A prática da antropofagia ritual entre os Tupinambá foi amplamente documentada e distorcida pelos europeus. Para esses povos, o canibalismo tinha significado religioso e ritualístico, relacionado à vingança e à incorporação das qualidades do inimigo.",
    body_style
))

story.append(Paragraph("<b>Organização Social e Cultural</b>", h3_style))
story.append(Paragraph(
    "As aldeias indígenas variavam grandemente em tamanho e organização. Entre os povos Tupi, as tabas podiam conter de 4 a 10 malocas grandes, cada uma abrigando múltiplas famílias. O parentesco constituía a base da organização social indígena. Entre os povos Tupi, a estrutura de parentesco era matrilinear. A religiosidade indígena era animista, acreditando que todas as coisas possuíam espíritos ou almas. Os xamãs, chamados de 'pajés', eram os intermediários entre o mundo dos vivos e o mundo dos espíritos.",
    body_style
))

story.append(Paragraph("<b>Relevância para o ENEM</b>", h3_style))
story.append(Paragraph(
    "As questões sobre povos indígenas no ENEM costumam abordar: a diversidade cultural dos povos antes da chegada dos europeus; a organização social, estrutura das aldeias e parentesco; as relações com os colonizadores através de alianças e conflitos; as concepções dos europeus sobre os indígenas; e as formas de resistência indígena ao longo da história. É fundamental compreender as práticas indígenas em seus próprios termos culturais, evitando visões etnocêntricas e estereótipos.",
    body_style
))

story.append(PageBreak())

# Aula 1.2
story.append(Paragraph("Aula 1.2: Brasil Colônia - Período Pré-Colonial (1500-1530)", h2_style))
story.append(Spacer(1, 10))

story.append(Paragraph("<b>Introdução</b>", h3_style))
story.append(Paragraph(
    "O período pré-colonial, compreendido entre 1500 e 1530, representa uma fase singular na história do Brasil, caracterizada pela ausência de uma colonização efetiva por parte da Coroa Portuguesa. Durante esses trinta anos, a relação entre portugueses e indígenas foi marcada principalmente pelo escambo comercial, pela exploração do pau-brasil e por contatos iniciais que moldariam o futuro da colonização.",
    body_style
))

story.append(Paragraph("<b>A Expedição de Pedro Álvares Cabral</b>", h3_style))
story.append(Paragraph(
    "Em 22 de abril de 1500, a frota de Pedro Álvares Cabral, composta por treze navios e cerca de 1.500 homens, avistou o Monte Pascoal, no litoral sul da atual Bahia. A carta de Pero Vaz de Caminha, escrivão da frota, constitui o documento mais importante sobre esse primeiro contato. A primeira missa foi celebrada no dia 26 de abril, marcando o início da presença católica no território. O Tratado de Tordesilhas (1494) estabelecia uma linha imaginária a 370 léguas a oeste de Cabo Verde, garantindo a Portugal a posse da maior parte do atual território brasileiro.",
    body_style
))

story.append(Paragraph("<b>A Exploração do Pau-Brasil</b>", h3_style))
story.append(Paragraph(
    "O pau-brasil foi a primeira riqueza natural do território que atraiu o interesse econômico dos portugueses. Essa árvore produzia uma madeira vermelha muito valorizada na Europa para a produção de tintura de tecidos. Para organizar a exploração, os portugueses estabeleceram feitorias - entrepostos comerciais fortificados localizados em pontos estratégicos do litoral. A relação estabelecida entre portugueses e indígenas foi essencialmente comercial, baseada no escambo: os indígenas cortavam e transportavam o pau-brasil em troca de ferramentas de metal, tecidos e outros produtos europeus.",
    body_style
))

story.append(Paragraph("<b>A Transição para a Colonização</b>", h3_style))
story.append(Paragraph(
    "No início da década de 1530, Portugal decidiu iniciar a colonização efetiva do Brasil por uma combinação de fatores: a ameaça de invasões estrangeiras, especialmente francesas; a concorrência colonial com a Espanha; e a crise do comércio oriental português. A expedição de Martim Afonso de Sousa (1530) marcou o início da transição, resultando na fundação de São Vicente (1532) e no início do sistema de Capitanias Hereditárias.",
    body_style
))

story.append(PageBreak())

# Aula 1.3
story.append(Paragraph("Aula 1.3: Administração Colonial", h2_style))
story.append(Spacer(1, 10))

story.append(Paragraph("<b>O Sistema de Capitanias Hereditárias (1534)</b>", h3_style))
story.append(Paragraph(
    "As Capitanias Hereditárias foram criadas em 1534 como primeira tentativa de ocupação efetiva do território. Foram criadas quinze capitanias, distribuídas a doze donatários. Cada donatário recebia uma carta de doação que estabelecia seus direitos e obrigações, incluindo a propriedade hereditária da terra, o monopólio da exploração econômica e a jurisdição sobre os habitantes. Em contrapartida, deveriam povoar e defender o território com recursos próprios. O sistema apresentou resultados desiguais: Pernambuco e São Vicente prosperaram com a produção de açúcar, enquanto outras capitanias fracassaram.",
    body_style
))

story.append(Paragraph("<b>O Governo Geral (1548)</b>", h3_style))
story.append(Paragraph(
    "Diante dos resultados desiguais do sistema de capitanias e da necessidade de uma administração mais centralizada, a Coroa Portuguesa criou o Governo Geral em 1548. O Governador Geral era nomeado pelo rei e detinha amplos poderes. O primeiro foi Tomé de Sousa (1549-1553), que trouxe os primeiros jesuítas. Mem de Sá (1558-1572) enfrentou os maiores desafios, combatendo os franceses no Rio de Janeiro e fundando a cidade em 1565. As Câmaras Municipais eram órgãos de administração local controlados pelos 'homens bons' - proprietários de terra e comerciantes abastados.",
    body_style
))

story.append(PageBreak())

# Aula 1.4
story.append(Paragraph("Aula 1.4: Economia Açucareira", h2_style))
story.append(Spacer(1, 10))

story.append(Paragraph("<b>O Açúcar no Contexto Mundial</b>", h3_style))
story.append(Paragraph(
    "O açúcar era, no século XVI, um produto de alto valor na Europa, consumido principalmente pelas elites. Portugal possuía experiência acumulada na produção em suas ilhas atlânticas (Madeira, Açores, Cabo Verde, São Tomé). A posição geográfica do litoral nordestino, com clima tropical, solo de massapê e abundância de água, mostrou-se ideal para o cultivo da cana-de-açúcar. O açúcar tornou-se o primeiro produto de exportação em larga escala do Brasil, integrando a colônia ao comércio internacional dominado pelas potências europeias.",
    body_style
))

story.append(Paragraph("<b>A Estrutura do Engenho</b>", h3_style))
story.append(Paragraph(
    "O engenho era a unidade básica de produção açucareira, constituindo um complexo agroindustrial que combinava agricultura e transformação artesanal. Incluía as terras de cultivo (canaviais), a moenda (para extração do caldo), a casa das caldeiras (para fervura) e a casa de purgar (para secagem). Os engenhos reais produziam açúcar de qualidade superior, enquanto os engenhos de fazer mel produziam rapadura. Os lavradores de cana cultivavam a cana mas não possuíam equipamentos de processamento.",
    body_style
))

story.append(Paragraph("<b>A Sociedade Açucareira</b>", h3_style))
story.append(Paragraph(
    "A sociedade açucareira era rigidamente hierarquizada. No topo estava o senhor de engenho, proprietário da terra, do engenho e dos escravizados. Abaixo, comerciantes, funcionários e membros do clero. Os lavradores de cana constituíam camada intermediária. Na base, a grande massa de escravizados africanos. A família patriarcal era a unidade básica da organização social, com o pai exercendo autoridade absoluta. Gilberto Freyre descreveu essa sociedade como marcada por uma 'intimidade contraditória' entre senhores e escravizados.",
    body_style
))

story.append(Paragraph("<b>O Declínio da Produção</b>", h3_style))
story.append(Paragraph(
    "A partir do século XVII, a economia açucareira brasileira enfrentou a concorrência da produção das Antilhas. Os holandeses, expulsos do Nordeste em 1654, levaram o conhecimento técnico para o Caribe. A produção antilhana, com menor custo e melhor qualidade, suplantou a brasileira no mercado internacional. A região Nordeste enfrentou longo período de estagnação econômica.",
    body_style
))

story.append(PageBreak())

# Aula 1.5
story.append(Paragraph("Aula 1.5: Mineração e Interiorização", h2_style))
story.append(Spacer(1, 10))

story.append(Paragraph("<b>A Descoberta do Ouro</b>", h3_style))
story.append(Paragraph(
    "Em 1693, as primeiras descobertas significativas de ouro ocorreram na região que seria conhecida como Minas Gerais. A notícia desencadeou uma corrida do ouro, atraindo milhares de pessoas. Descobertas posteriores ocorreram em Goiás (década de 1720) e Mato Grosso (1719). A mineração promoveu a interiorização do povoamento e a mudança do eixo econômico do Nordeste para o Centro-Sul. Em 1763, a capital foi transferida de Salvador para o Rio de Janeiro.",
    body_style
))

story.append(Paragraph("<b>A Sociedade Mineradora</b>", h3_style))
story.append(Paragraph(
    "Diferentemente da sociedade açucareira, a sociedade mineradora desenvolveu núcleos urbanos significativos como Vila Rica (Ouro Preto), Sabará e São João del-Rei. Apresentava maior mobilidade social, embora marcada por desigualdades. A elite era dominada por grandes mineradores e comerciantes portugueses. Os escravizados africanos constituíam a maior parte da população. O Barroco mineiro desenvolveu-se como expressão artística característica, com destaque para as obras de Aleijadinho.",
    body_style
))

story.append(Paragraph("<b>Conflitos e Revoltas</b>", h3_style))
story.append(Paragraph(
    "A Guerra dos Emboabas (1707-1709) opôs paulistas e forasteiros pela posse das minas, terminando com a vitória dos emboabas e intervenção da Coroa. A Inconfidência Mineira (1789) foi um movimento conspiratório que pretendia a independência, liderado por Tiradentes, Cláudio Manuel da Costa, Tomás Antônio Gonzaga e outros. Denunciado antes de se concretizar, resultou na execução de Tiradentes, que se tornou mártir da independência brasileira.",
    body_style
))

story.append(PageBreak())

# Continue with more content...
story.append(Paragraph("Aula 1.6: Escravidão no Brasil", h2_style))
story.append(Spacer(1, 10))

story.append(Paragraph("<b>O Tráfico Negreiro</b>", h3_style))
story.append(Paragraph(
    "O tráfico negreiro foi o maior deslocamento forçado de pessoas da história. Estima-se que cerca de 4,8 milhões de africanos foram trazidos para o Brasil entre os séculos XVI e XIX. Os principais portos de embarque na África eram Luanda, Benguela e a Costa da Mina. O 'caminho do meio' era a rota que trazia escravizados da Costa da Mina. O tráfico era altamente lucrativo, movimentando grandes capitais e envolvendo comerciantes portugueses, brasileiros e de outras nacionalidades.",
    body_style
))

story.append(Paragraph("<b>O Escravo na Sociedade Colonial</b>", h3_style))
story.append(Paragraph(
    "O escravo era considerado propriedade, sem personalidade jurídica. Trabalhava nas mais diversas atividades: lavoura, mineração, serviços domésticos, artesanato, transporte. O código de leis sobre a escravidão era disperso e frequentemente contraditório. As Ordenações Filipinas previam a possibilidade de alforria, mas a maioria dos escravizados permanecia em cativeiro por toda a vida. A reprodução endógena era insuficiente, mantendo a dependência do tráfico africano.",
    body_style
))

story.append(Paragraph("<b>Resistência à Escravidão</b>", h3_style))
story.append(Paragraph(
    "A resistência à escravidão assumiu múltiplas formas: fugas individuais e coletivas, formação de quilombos, revoltas, assassinatos de senhores e feitores, suicídios, infanticídios, sabotagem do trabalho. Os quilombos eram comunidades de escravos fugidos que mantinham formas de organização social e cultural africana. O Quilombo de Palmares, em Alagoas, foi o maior e mais conhecido, resistindo por quase todo o século XVII até sua destruição em 1694. Zumbi foi seu líder mais famoso, tornando-se símbolo da resistência negra.",
    body_style
))

story.append(PageBreak())

# Aula 1.7-1.15 resumidos
story.append(Paragraph("Aula 1.7 a 1.10: Brasil Império", h2_style))
story.append(Spacer(1, 10))

story.append(Paragraph("<b>Primeiro Reinado (1822-1831)</b>", h3_style))
story.append(Paragraph(
    "A Independência do Brasil foi proclamada por D. Pedro I em 7 de setembro de 1822, às margens do riacho Ipiranga. A separação de Portugal foi negociada, mantendo a unidade territorial e a elite agrária no poder. A Constituição de 1824, outorgada por D. Pedro I, estabeleceu o Poder Moderador, que permitia ao imperador intervir nos demais poderes. A Confederação do Equador (1824) foi um movimento separatista em Pernambuco, duramente reprimido. D. Pedro I abdicou em 1831, pressionado por crises políticas e militares.",
    body_style
))

story.append(Paragraph("<b>Período Regencial (1831-1840)</b>", h3_style))
story.append(Paragraph(
    "O Período Regencial foi marcado por instabilidade política e revoltas provinciais. As Regências Trina e Una tentaram governar em nome do herdeiro D. Pedro II. O Ato Adicional de 1834 concedeu maior autonomia às províncias. Diversas revoltas eclodiram: Cabanagem (PA, 1835-1840), Balaiada (MA, 1838-1841), Sabinada (BA, 1837-1838), Revolução Farroupilha (RS, 1835-1845). A maioridade de D. Pedro II foi antecipada em 1840, encerrando o período.",
    body_style
))

story.append(Paragraph("<b>Segundo Reinado (1840-1889)</b>", h3_style))
story.append(Paragraph(
    "O Segundo Reinado foi marcado por relativa estabilidade política. O sistema parlamentarista funcionava com o Partido Liberal e o Partido Conservador alternando-se no poder. A economia baseava-se no café, produzido no Vale do Paraíba e posteriormente em São Paulo. A Lei Eusébio de Queirós (1850) extinguiu o tráfico negreiro. A Lei do Ventre Livre (1871), a Lei dos Sexagenários (1885) e a Lei Áurea (1888) aboliram progressivamente a escravidão. A Guerra do Paraguai (1864-1870) foi o maior conflito militar da América do Sul.",
    body_style
))

story.append(Paragraph("<b>Proclamação da República (1889)</b>", h3_style))
story.append(Paragraph(
    "A República foi proclamada em 15 de novembro de 1889 por um golpe militar liderado pelo Marechal Deodoro da Fonseca. D. Pedro II foi deposto sem resistência significativa. A República da Espada (1889-1894) foi o período inicial, com governos militares provisórios. A Constituição de 1891 estabeleceu a forma federativa de governo, o presidencialismo e o voto aberto (masculino e restrito).",
    body_style
))

story.append(PageBreak())

# Aulas 1.11-1.15
story.append(Paragraph("Aula 1.11 a 1.15: República", h2_style))
story.append(Spacer(1, 10))

story.append(Paragraph("<b>República Velha (1889-1930)</b>", h3_style))
story.append(Paragraph(
    "A República Velha foi dominada pelas oligarquias cafeicultoras de São Paulo e Minas Gerais, através da 'política do café com leite'. O coronelismo era o controle dos chefes locais sobre os eleitores. O voto de cabresto garantia a vitória dos candidatos oficiais. A política dos governadores assegurava apoio federal às oligarquias estaduais. Os tenentes, movimento militar reformista, organizaram a Revolta dos 18 do Forte (1922) e a Coluna Prestes (1925-1927). A Semana de Arte Moderna (1922) marcou o início do modernismo brasileiro.",
    body_style
))

story.append(Paragraph("<b>Era Vargas (1930-1945)</b>", h3_style))
story.append(Paragraph(
    "A Revolução de 1930 derrubou a República Velha e levou Getúlio Vargas ao poder. O Governo Provisório (1930-1934) centralizou o poder e criou o voto feminino e secreto. A Constituição de 1934 foi de curta duração. O Estado Novo (1937-1945) foi uma ditadura que promoveu a industrialização (CSN, Vale do Rio Doce), a legislação trabalhista (CLT) e o nacionalismo. Vargas foi deposto em 1945 pelos mesmos militares que o haviam apoiado.",
    body_style
))

story.append(Paragraph("<b>República Populista (1945-1964)</b>", h3_style))
story.append(Paragraph(
    "O período foi marcado pela alternância entre PSD e UDN, com presidentes que buscavam conciliar desenvolvimento econômico com demandas populares. Getúlio Vargas (1951-1954) enfrentou forte oposição e suicidou-se. Juscelino Kubitschek (1956-1961) promoveu a industrialização acelerada ('50 anos em 5') e construiu Brasília. Jânio Quadros (1961) teve governo breve e renunciou. João Goulart (1961-1964) enfrentou crise política que culminou no golpe militar de 1964.",
    body_style
))

story.append(Paragraph("<b>Ditadura Militar (1964-1985)</b>", h3_style))
story.append(Paragraph(
    "O golpe de 1964 instalou um regime autoritário que durou 21 anos. Os Atos Institucionais, especialmente o AI-5 (1968), concentraram poderes e suspenderam garantias constitucionais. A repressão política incluiu prisões, torturas e assassinatos. O 'milagre econômico' (1968-1973) trouxe crescimento com concentração de renda. A abertura 'lenta, gradual e segura' foi iniciada por Geisel. A Lei da Anistia (1979) permitiu o retorno dos exilados. A campanha das Diretas Já (1984) mobilizou milhões.",
    body_style
))

story.append(Paragraph("<b>Brasil Contemporâneo</b>", h3_style))
story.append(Paragraph(
    "A redemocratização culminou na Constituição de 1988, chamada de 'Constituição Cidadã'. O Plano Collor (1990) confiscou poupanças e o presidente foi impeachment em 1992. Itamar Franco (1992-1994) implementou o Plano Real, que estabilizou a moeda. FHC (1995-2002) privatizou empresas estatais e reelegeu-se. Lula (2003-2010) expandeu programas sociais (Bolsa Família). Dilma (2011-2016) enfrentou crise econômica e foi impeachment. A Operação Lava Jato investigou corrupção sistemática.",
    body_style
))

story.append(PageBreak())

# MODULE 2: HISTÓRIA GERAL
story.append(Paragraph("MÓDULO 2: HISTÓRIA GERAL", h1_style))
story.append(Spacer(1, 20))

story.append(Paragraph("Aula 2.1: Pré-História e Revolução Neolítica", h2_style))
story.append(Spacer(1, 10))

story.append(Paragraph(
    "A Pré-História é o período da história humana anterior à invenção da escrita, subdividido em Paleolítico (Idade da Pedra Lascada), Neolítico (Idade da Pedra Polida) e Idade dos Metais. Durante o Paleolítico, os humanos eram caçadores-coletores nômades, vivendo em bandos e utilizando ferramentas de pedra lascada. O domínio do fogo foi uma conquista fundamental. A Revolução Neolítica, ocorrida há aproximadamente 10.000 anos, representou a transição para a agricultura e a pecuária, permitindo o sedentarismo, o aumento populacional, a divisão do trabalho e o surgimento das primeiras cidades.",
    body_style
))

story.append(Paragraph("Aula 2.2-2.5: Idade Antiga", h2_style))
story.append(Spacer(1, 10))

story.append(Paragraph("<b>Mesopotâmia</b>", h3_style))
story.append(Paragraph(
    "A Mesopotâmia ('terra entre rios') desenvolveu-se entre os rios Tigre e Eufrates, no atual Iraque. Os sumérios criaram a escrita cuneiforme e as primeiras cidades-Estado. Os babilônios, sob Hamurabi, unificaram a região e criaram um código de leis famoso. Os assírios formaram um império militarista. Os persas, sob Ciro e Dario, unificaram o Oriente Próximo, criando um sistema de satrapias e estradas que facilitavam a administração e o comércio.",
    body_style
))

story.append(Paragraph("<b>Egito Antigo</b>", h3_style))
story.append(Paragraph(
    "O Egito desenvolveu-se ao longo do rio Nilo, cujas cheias regulares fertilizavam o solo. O faraó era considerado deus vivo, governando um Estado centralizado. A sociedade era estratificada: nobres, sacerdotes, escribas, camponeses e escravos. A religião era politeísta, com crença na vida após a morte. As pirâmides foram construídas como túmulos reais. A escrita hieroglífica foi decifrada por Champollion usando a Pedra de Roseta.",
    body_style
))

story.append(Paragraph("<b>Grécia Antiga</b>", h3_style))
story.append(Paragraph(
    "A Grécia desenvolveu-se em cidades-Estado independentes (pólis). Esparta era uma oligarquia militarizada, com economia baseada na escravidão (hilotas) e educação voltada para a guerra. Atenas desenvolveu a democracia no século V a.C., embora restrita aos cidadãos homens livres. A cultura grega produziu avanços na filosofia (Sócrates, Platão, Aristóteles), teatro (Ésquilo, Sófocles, Eurípides), história (Heródoto, Tucídides) e arquitetura. As Guerras Pérsicas e a Guerra do Peloponeso marcaram o período clássico.",
    body_style
))

story.append(Paragraph("<b>Roma Antiga</b>", h3_style))
story.append(Paragraph(
    "Roma passou por Monarquia (753-509 a.C.), República (509-27 a.C.) e Império (27 a.C.-476 d.C.). A República era governada por cônsules, senado e assembleias. As Guerras Púnicas contra Cartago expandiram o território. O cristianismo surgiu no século I e foi perseguido até Constantino (Edito de Milão, 313). A crise do século III e as invasões bárbaras levaram à queda do Império Romano do Ocidente em 476. O Direito Romano influenciou a legislação ocidental.",
    body_style
))

story.append(PageBreak())

story.append(Paragraph("Aula 2.6-2.8: Idade Média", h2_style))
story.append(Spacer(1, 10))

story.append(Paragraph("<b>Feudalismo</b>", h3_style))
story.append(Paragraph(
    "O feudalismo foi um sistema político, social e econômico baseado na terra (feudo) e nas relações de suserania e vassalagem. O senhor feudal concedia proteção e terras ao vassalo em troca de fidelidade e serviços. A economia era agrária e autossuficiente. A sociedade dividia-se em estamentos: nobreza, clero e servos (camponeses presos à terra). O servo devia corveia (trabalho), talha (parte da produção), banalidades (uso das instalações) e dízimo à Igreja.",
    body_style
))

story.append(Paragraph("<b>Igreja e Cruzadas</b>", h3_style))
story.append(Paragraph(
    "A Igreja Católica era a instituição mais poderosa da Idade Média, controlando cerca de um terço das terras, monopolizando a cultura e a educação, e exercendo poder político significativo. O Papado enfrentou o Império Romano-Germânico pela Questão das Investiduras. As Cruzadas (séculos XI-XIII) foram expedições militares para reconquistar a Terra Santa dos muçulmanos, mas também tiveram objetivos econômicos e políticos. A Inquisição foi criada para combater heresias.",
    body_style
))

story.append(Paragraph("<b>Crise e Transição</b>", h3_style))
story.append(Paragraph(
    "A crise do século XIV incluiu a Peste Negra (1347-1354), que matou cerca de um terço da população europeia; a Guerra dos Cem Anos (1337-1453) entre Inglaterra e França; e revoltas camponesas. A crise levou ao declínio do feudalismo e ao surgimento do capitalismo comercial. A burguesia ascendente, o fortalecimento do poder real e a expansão marítima marcaram a transição para a Idade Moderna.",
    body_style
))

story.append(Paragraph("Aula 2.9-2.12: Idade Moderna", h2_style))
story.append(Spacer(1, 10))

story.append(Paragraph("<b>Renascimento</b>", h3_style))
story.append(Paragraph(
    "O Renascimento foi um movimento cultural que floresceu na Itália entre os séculos XIV e XVI, caracterizado pelo humanismo (valorização do ser humano e da razão), pela recuperação da cultura clássica e pelo naturalismo nas artes. Artistas como Leonardo da Vinci, Michelangelo e Rafael produziram obras-primas. O mecenato de famílias como os Médici financiou as artes. A imprensa de Gutenberg (século XV) democratizou o acesso aos livros.",
    body_style
))

story.append(Paragraph("<b>Reforma e Contrarreforma</b>", h3_style))
story.append(Paragraph(
    "A Reforma Protestante foi iniciada por Martinho Lutero em 1517, criticando a venda de indulgências e defendendo a justificação pela fé. João Calvino desenvolveu o calvinismo, com a doublina da predestinação. Henrique VIII fundou a Igreja Anglicana. A Contrarreforma católica reagiu no Concílio de Trento (1545-1563), reafirmando dogmas, criando seminários e fortalecendo a Inquisição e a Companhia de Jesus.",
    body_style
))

story.append(Paragraph("<b>Absolutismo e Mercantilismo</b>", h3_style))
story.append(Paragraph(
    "O absolutismo concentrava todos os poderes nas mãos do rei, justificado pelo direito divino. Luís XIV, o 'Rei Sol', foi o exemplo máximo do absolutismo francês. O mercantilismo era a doutrina econômica que orientava as políticas estatais: metalismo (acúmulo de metais preciosos), balança comercial favorável, protecionismo e colonialismo. O bulionismo, colbertismo e protecionismo eram variantes do mercantilismo.",
    body_style
))

story.append(Paragraph("<b>Expansão Marítima</b>", h3_style))
story.append(Paragraph(
    "A expansão marítima europeia foi impulsionada pela busca de rotas para as Índias, pela necessidade de metais preciosos e pelo espírito de cruzada. Portugal, pioneiro, contornou a África (Bartolomeu Dias, 1488) e chegou à Índia (Vasco da Gama, 1498). Colombo chegou à América em 1492. O Tratado de Tordesilhas (1494) dividiu o mundo entre Portugal e Espanha. A colonização da América gerou o genocídio indígena e o tráfico negreiro.",
    body_style
))

story.append(PageBreak())

story.append(Paragraph("Aula 2.13-2.25: Idade Contemporânea", h2_style))
story.append(Spacer(1, 10))

story.append(Paragraph("<b>Revolução Francesa (1789)</b>", h3_style))
story.append(Paragraph(
    "A Revolução Francesa foi um dos marcos da transição da Idade Moderna para a Contemporânea. Causada pela crise econômica, desigualdades sociais e ideais iluministas, teve fases distintas: Monarquia Constitucional (1789-1792), República Girondina (1792-1793), República Jacobina ou Terror (1793-1794) e Diretório (1795-1799). A Declaração dos Direitos do Homem e do Cidadão proclamou liberdade, igualdade e fraternidade. Napoleão Bonaparte assumiu o poder em 1799.",
    body_style
))

story.append(Paragraph("<b>Revolução Industrial</b>", h3_style))
story.append(Paragraph(
    "A Revolução Industrial iniciou-se na Inglaterra no século XVIII, com a mecanização da produção, o uso do carvão e do vapor como fontes de energia, e a organização fabril. A burguesia industrial tornou-se a nova classe dominante. O proletariado enfrentou condições precárias de trabalho e vida. O ludismo foi o movimento de destruição de máquinas. Os movimentos operários organizaram-se em sindicatos e partidos socialistas. Marx e Engels publicaram O Manifesto Comunista em 1848.",
    body_style
))

story.append(Paragraph("<b>Guerras Mundiais</b>", h3_style))
story.append(Paragraph(
    "A Primeira Guerra Mundial (1914-1918) foi causada por nacionalismos, imperialismo, corrida armamentista e alianças militares. O assassinato de Francisco Ferdinando em Sarajevo foi o estopim. O Tratado de Versalhes impôs duras condições à Alemanha. A Revolução Russa (1917) derrubou o czarismo e instalou o primeiro regime socialista do mundo. A Crise de 1929 originou-se na quebra da Bolsa de Nova York. O nazismo e o fascismo surgiram no entreguerras. A Segunda Guerra Mundial (1939-1945) foi o maior conflito da história, com o Holocausto e o uso da bomba atômica.",
    body_style
))

story.append(Paragraph("<b>Guerra Fria e Mundo Contemporâneo</b>", h3_style))
story.append(Paragraph(
    "A Guerra Fria (1947-1991) foi o confronto entre EUA e URSS, com divisão do mundo em blocos de influência. A OTAN e o Pacto de Varsóvia eram as alianças militares. A corrida espacial e armamentista marcaram o período. A descolonização afro-asiática criou novos países. A queda do Muro de Berlim (1989) e o fim da URSS (1991) encerraram a Guerra Fria. A globalização, o terrorismo e os novos conflitos regionais caracterizam o mundo contemporâneo.",
    body_style
))

story.append(PageBreak())

# MODULE 3: HISTÓRIA DA AMÉRICA
story.append(Paragraph("MÓDULO 3: HISTÓRIA DA AMÉRICA", h1_style))
story.append(Spacer(1, 20))

story.append(Paragraph("<b>Civilizações Pré-Colombianas</b>", h3_style))
story.append(Paragraph(
    "Os maias desenvolveram-se na Península de Yucatán, criando cidades-Estado, escrita hieroglífica, calendário preciso e avançada matemática. Os astecas fundaram Tenochtitlán (atual Cidade do México) e construíram um império baseado em tributos e guerras sagradas. Os incas desenvolveram-se nos Andes, com capital em Cusco, criando um Estado centralizado, estradas, sistema de comunicação por quipus e agricultura em terraços. A conquista espanholha destruiu essas civilizações.",
    body_style
))

story.append(Paragraph("<b>Colonização da América</b>", h3_style))
story.append(Paragraph(
    "A colonização espanhola foi baseada na extração de metais preciosos (Potosí), no sistema de encomienda (trabalho indígena em troca de catequese) e na mita (trabalho compulsório). A colonização inglesa na América do Norte foi diversificada: colônias do Norte (comércio, manufaturas), colônias do Centro (agricultura diversificada) e colônias do Sul (plantation, escravidão). As diferenças entre as colonizações ibérica e inglesa refletiram-se nas formações sociais posteriores.",
    body_style
))

story.append(Paragraph("<b>Independência das Américas</b>", h3_style))
story.append(Paragraph(
    "A independência dos Estados Unidos (1776) foi a primeira da América, influenciada pelo iluminismo e pela guerra contra a Inglaterra. A independência da América espanhola foi liderada por Simón Bolívar e José de San Martín, fragmentando-se em múltiplos países. O pan-americanismo de Bolívar não se concretizou. A Revolução Mexicana (1910) foi um movimento social que resultou na Constituição de 1917. A Revolução Cubana (1959) instalou um regime socialista na América Latina.",
    body_style
))

story.append(PageBreak())

# MODULE 4: HISTÓRIA DA ÁFRICA
story.append(Paragraph("MÓDULO 4: HISTÓRIA DA ÁFRICA", h1_style))
story.append(Spacer(1, 20))

story.append(Paragraph("<b>África Antiga</b>", h3_style))
story.append(Paragraph(
    "A África foi berço de civilizações avançadas. O Egito Antigo desenvolveu-se às margens do Nilo. O Reino de Kush, ao sul do Egito, controlou o comércio de ouro e marfim. O Império de Ghana (séculos VIII-XI) desenvolveu-se no Sahel, controlando o comércio transaariano de ouro e sal. O Império do Mali (séculos XIII-XVI), com Mansa Musa, foi um dos mais ricos da história. O Império Songai sucedeu o Mali. O Grande Zimbabwe desenvolveu-se na África Austral, com avançada arquitetura em pedra.",
    body_style
))

story.append(Paragraph("<b>Tráfico Negreiro e Colonização</b>", h3_style))
story.append(Paragraph(
    "O tráfico negreiro causou devastação demográfica, cultural e econômica na África. Estima-se que 12 a 15 milhões de africanos foram deportados. A partilha da África na Conferência de Berlim (1884-1885) dividiu o continente entre as potências europeias. A exploração colonial extraiu recursos e impôs fronteiras artificiais. Os movimentos de independência intensificaram-se após a Segunda Guerra Mundial, com líderes como Kwame Nkrumah (Gana), Jomo Kenyatta (Quênia) e Nelson Mandela (África do Sul).",
    body_style
))

story.append(Paragraph("<b>África Contemporânea</b>", h3_style))
story.append(Paragraph(
    "O apartheid na África do Sul (1948-1994) foi o regime de segregação racial mais conhecido. Nelson Mandela, preso por 27 anos, tornou-se símbolo da luta contra o racismo. A transição democrática sul-africana foi um marco. O continente enfrenta desafios como pobreza, doenças, conflitos étnicos e governança problemática, mas também apresenta crescimento econômico e avanços democráticos. A diáspora africana influenciou culturas em todo o mundo, especialmente nas Américas.",
    body_style
))

story.append(PageBreak())

# DICAS PARA O ENEM
story.append(Paragraph("DICAS PARA O ENEM - HISTÓRIA", h1_style))
story.append(Spacer(1, 20))

story.append(Paragraph("<b>Competências Avaliadas</b>", h3_style))
story.append(Paragraph(
    "O ENEM avalia seis competências em Ciências Humanas: 1) Aplicar tecnologias da informação; 2) Usar fontes e recursos tecnológicos; 3) Construir conceitos para compreensão crítica da realidade; 4) Compreender relações entre sociedades e natureza; 5) Analisar processos históricos e formas de organização social; 6) Interpretar informações de gráficos e tabelas. As questões exigem interpretação de textos, imagens, mapas e documentos históricos.",
    body_style
))

story.append(Paragraph("<b>Temas Mais Cobrados</b>", h3_style))
story.append(Paragraph(
    "Em História do Brasil: Brasil Colônia, escravidão, Era Vargas, Ditadura Militar. Em História Geral: Revolução Francesa, Revolução Industrial, Guerras Mundiais, Guerra Fria. Em História da América: colonização, independências, Revolução Cubana. Em História da África: tráfico negreiro, apartheid. As questões frequentemente relacionam passado e presente, exigindo compreensão dos processos históricos e suas consequências.",
    body_style
))

story.append(Paragraph("<b>Estratégias de Estudo</b>", h3_style))
story.append(Paragraph(
    "1) Estabelecer cronologias e relacionar eventos; 2) Conectar temas transversais (trabalho, cidadania, diversidade cultural); 3) Praticar interpretação de fontes históricas; 4) Resolver questões anteriores do ENEM; 5) Construir mapas mentais e resumos; 6) Relacionar história com atualidades; 7) Compreender as competências avaliadas em cada questão. A interdisciplinaridade é frequente, conectando história com geografia, sociologia e filosofia.",
    body_style
))

story.append(Spacer(1, 40))
story.append(Paragraph("Bons estudos!", h2_style))

# Build PDF
doc.build(story)
print("PDF gerado com sucesso!")
