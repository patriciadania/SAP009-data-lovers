# <h1 align="center"> Data Lovers - League Of Legends <img src="https://icon-library.com/images/league-of-legends-logo-icon/league-of-legends-logo-icon-22.jpg" width=35px> </h1>
--------------------------------------------------------------------------------------
<p align="justify">Data Lovers - League Of Legends foi o segundo projeto desenvolvido no bootcamp da Laboratória, tem como objetivo ajudar jogadores e novos jogadores a conhecerem melhor os campeões presentes em Summoner's Rift apresentando informações como tipo e nível de ataque, defesa, magia e dificuldade de cada campeão, bem como, disponibiliza um filtro de pesquisa através do nome do campeão.</p>

### <h3 align="center"> 💻 Para acessar a página web <a href="https://thainaratabile.github.io/SAP009-data-lovers/src/"> clique aqui </a></h3>
<div align="center">


**Desenvolvido por**

<p> Patricia Adania <br>
<a href="https://www.linkedin.com/in/patriciadania/"> Linkedin </a> | <a href="https://github.com/patriciadania"> Github </a>
</p>

<p> Thainara Tabile <br>
<a href="https://www.linkedin.com/in/thainaratabile/">Linkedin </a> | <a href="https://github.com/ThainaraTabile"> Github </a> </p>

<p> Ariane Vieira  <br>
<a href="https://www.linkedin.com/in/ariane-vieira-534310164/"> Linkedin </a> | <a href="https://github.com/VieiraAriane"> Github </a>
</p>


</div>



## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Etapas iniciais para o desenvolvimento da interface](#2-etapas-iniciais-para-o-desenvolvimento-da-interface)
* [3. Considerações técnicas](#3-considerações-técnicas)
* [4. Responsividade](#4-responsividade)


## 1. Resumo do projeto
<div align="justify">
Neste projeto, contruimos uma página web para visualizar um conjunto (set) de dados que se adeque às necessidades de seu usuário.

Temos uma página web que permite visualizar dados, filtrá-los, ordená-los e fazer algum cálculo agregado. Por cálculo agregado nos referimos aos diversos cálculos que podem ser feitos com os dados para mostrar a informação mais relevante para os usuários (médias, valores máximos e mínimos, etc).

Tudo isso utilizando HTML semântico, CSS responsivo e JavaScript puro.
</div>

## 2. Etapas iniciais para o desenvolvimento da interface
<div align="justify">

### Pesquisa com usuários

Foram realizadas pesquisas com jogadores de LOL, utilizando as mesmas perguntas expostas no readme da Laboratória. Que foram:

**Quem são os usuários principais do produto?**
Usuários que pretendem começar a jogar e não possuem informações sobre as regas e personagens, também usuários jogadores do LOL e que desejam informações sobre os campeões, para que possam escolher melhor com qual deles jogar. ‌

**Quais são os objetivos dos usuários com relação ao produto?**
Apresentar informações sobre as características dos campeões, que podem ser filtrados por tipo (lutador, assassino, mago, atirador e suporte), fornecer a classificação de acordo com o nível de ataque/defesa/magia/dificuldade, por grupo ou todos (de acordo com o interesse do usuário). ‌

**Quais são os dados mais relevantes que querem ver na interface e por quê?** 
Filtragem por tipo de campeão e classificação do poder. Para que o usuário conheça os personagens e possa escolher de acordo com sua preferência.

**Quando utilizam ou utilizariam o produto?**
Antes de iniciar sua partida no jogo.

### Protótipo
Desenvolvemos o protótipo de baixa fidelidade para telas de computadores e tablets utilizando as ferramentas do <a href="https://www.canva.com/"> Canva. </a>

<img width="350" alt="image" src="https://user-images.githubusercontent.com/122550758/221359717-97f22602-4700-44ac-85db-74e5c989914d.png">

Para o protótipo para telas de celulares, utilizamos as ferramentas do <a href="https://www.figma.com/"> Figma. </a>

<img width="350" alt="image" src="https://user-images.githubusercontent.com/122550758/221363960-383dcadb-1421-4a8d-a5f4-bf5a4add88c8.png">


A estilização da página buscou semalhança com a interface do jogo, com objetivo de proporcionar ao usuário a sensação de já estar imerso ao mundo LOL. Sendo assim, a paleta de cores utilizada foi extraída do ícone do jogo.

<img width="350" alt="image" src="https://user-images.githubusercontent.com/122550758/221360181-19d5f568-4780-4b15-827a-9fb543a09a91.png">

</div>

## 3. Considerações técnicas


A lógica do projeto foi implementada somente em JavaScript (ES6), HTML e
CSS.
Estas funções são [_puras_], assim, através de funções puras e independentes do DOM que foram usadas a partir do arquivo
`src/main.js`, ao carregar a página e a cada vez que o usuário interage com a interface (cliques, seleções, filtros, ordenação, etc).

### Implementação da interface de usuário (HTML/CSS/JS)
A implementação contém: 
1. Exibição dos dados em interface em cards;
2. Permite ao usuário interagir com a interface para obter as informações que necessita, através de filtros de buscas por nome ou tipo do campeão, bem como por classificação dos poderes.
3. É responsiva, ou seja, deve ser visualizada sem problemas a partir de diversos tamanhos de tela: celulares, tablets, notebooks, etc.

### `src/main.js`

Utilizamos `src/main.js` para inserir todos os códigos relacionados a exibição dos dados na tela, utilizando a estrutura condicional  `switch ` para tradução de palavras da API,  `templade string` e o método   `map()` para obter dados da API. Com isto nos referimos basicamente à interação
com o DOM. Operações como criação de nós, registro de manejadores de eventos

Para carregar a fonte de dados da API:

```js
import lolData from "./data/lol/lol.js"
```
Assim, criamos a variável `lolData` disponível em `src/main.js`.

Para carregar os filtros:

```js
import { buscaTag, buscaNome, ordenarCampeoes, calculoAgragado } from "./data.js"
```

### `src/data.js`

O coração deste projeto é a manipulação de dados através de arrays e objetos.

Utilizamos este arquivo para armazenar toda a funcionalidade que corresponda a
obter, processar e manipular dados (suas funções):

* `function buscaTag`: esta função recebe os dados e nos retorna os campeões filtrados por tipo (assassinos, lutadores, magos, atiradores, suportes, tanques ou todos eles), no processamento dos dados utilizamos o método `filter`.


* `function buscaNome`: esta função retorna ao usuário o nome do campeão digitado, com auxilio do método `filter`.

* `function ordenarCampeoes`: responsável por ordenar os campeões de acordo com nível de ataque, defesa, magia e dificuldade, que podem ser ordenados de forma crescente ou descrecente Para esta função utilizamos o método `sort`.

* `function calculoAgragado`: realiza o cálculo percentual do tipo de campeão selecionado pelo usuário (assassinos, lutadores, magos, atiradores, suportes)

### `src/data`

A API do projeto foi extraída desta pasta, onde estão os dados de diferentes fontes. Utilizamos o arquivo com a extensão
`.js`.

### Testes unitários

Os  teste unitários das funções implementadas no arquivo `/test/data.spec.js`, cobriram 100% dos statements, functions e lines e branches.


#### Ferramentas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organização do trabalho


Para a organização do projeto utilizamos o Trello para a construção de um roadmap, fracionando cada etapa, definindo  metas e prioridades.

No planejamento de sprint foram definidas as metas a serem atingidas para a próxima sprint, enquanto na daily eram definidas as prioridades das tarefas para o dia.

## 4. Responsividade

A interface foi produzida de modo responsivo, durante todo o processo de criação foi constantemente testada para diversos tamanhos de telas através do console do Google Chrome, nestes testes, a página pode ser visualizada sem problemas.

<img width="300" alt="image" src="https://user-images.githubusercontent.com/122550758/221578155-e7454817-6507-43ab-9705-64dade87d57f.png"> <img width="300" alt="image" src="https://user-images.githubusercontent.com/122550758/221578455-5ad67001-ead5-4204-b787-f2ab33dd4a2a.png"> <img width="300" alt="image" src="https://user-images.githubusercontent.com/122550758/221578738-41eed557-49c9-4c02-84f5-d46e1eab9015.png">

 <img width="330" alt="image" src="https://user-images.githubusercontent.com/122550758/221578993-9607d443-61e2-49c2-8398-642ec94cbded.png"> <img width="400" alt="image" src="https://user-images.githubusercontent.com/122550758/221579235-51246e2a-e441-4205-8560-329112a55d98.png">

#### Teste de Usabilidade

O teste de usabilidade foi aplicado com diferentes usuários, e com base nos Feedbacks, notou-se que:
* a página web opera perfeitamente em notebooks/desktop;
* a utlização por android também não apresentou nenhuma intercorrência, os testes foram feitos em diferentes modelos de aparelhos celulares.




https://user-images.githubusercontent.com/122550758/221581194-cc7e1caa-ab5f-4a31-b50c-971854d431e5.mp4

<img width="200" alt="Captura de Tela 2023-02-27 às 10 56 26" src="https://user-images.githubusercontent.com/122550758/221582414-0692f535-3111-4606-a876-9a7a36d1d9c7.png"> <img width="200" alt="Captura de Tela 2023-02-27 às 10 57 18" src="https://user-images.githubusercontent.com/122550758/221582621-9b238bc5-6859-4319-9f22-f013dc855c68.png"> <img width="200" alt="Captura de Tela 2023-02-27 às 10 56 56" src="https://user-images.githubusercontent.com/122550758/221582536-4fb37414-a24c-43c4-b4cf-e46b19b5de28.png">

* a utilização por iOS funciona em partes, não apresenta erros na utilização dos filtros, classificação, busca por nome, calculo agregado e exibição da parte da frente dos cards. 
<img width="337" alt="image" src="https://user-images.githubusercontent.com/122550758/221585840-fdbc68d8-d6ba-41db-89cb-3c52a4e0147f.png">

A falha é localizada no conteúdo posterior dos cards, onde é exibida apenas uma parte das informações, que logo desaparece.

https://user-images.githubusercontent.com/122550758/221586080-5dc764b5-a21d-40ce-b377-13bdcdf3ec5f.mp4


<img width="337" alt="image" src="https://user-images.githubusercontent.com/122550758/221586216-11b1ae14-19d6-4da2-8e98-b598603a3beb.png">

Na tentativa de solucionar a falha, incluímos o motor de renderização webkit no css. Nos testes realizados console e no emulatos em telas de iOS a aplicação funciona perfeitamente, entretanto, nos testes realizados pelos usuários, persiste a falha no conteúdo posterior dos cards.


