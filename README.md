# Bootcamp Rocketseat - agosto de 2019

mudou

# Introdução ao React

React é uma library utilizada para construção de interfaces;

Características:

- Tudo fica dentro do Javascript;
- Permite que uma API sirva a múltiplos clientes;
- Programação declarativa (não compara com o estado anterior);

#### JSX -

Permite escrever HTML dentro do Javascript e criar nossos próprios elementos

## Configurando a estrutura do projeto

YARN - é gerenciador de pacotes do Js. Utilizado para instalar ferramentas de outras empresas no nosso projeto.
Yarn init para rodar no projeto

```bash
$ yarn init -y

$ yarn -v
```

Yarn init cria o arquivo package.json. Neste, ficam guardadas as referências para as dependências.

Instalando Bibliotecas -

```bash
$ yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli

```

package.json criado. Trocar dependencies por devDependencies (dependências de desenvolvimento)

Instalando React e React-dom (como dependência normal)

```bash
$ yarn add react react-dom

```

## WEBPACK E BABEL

#### BABEL

Transpila código ES6+ e seguintes para que todos os navegadores possam interpretá-los,
por ex: converte classes em sintaxe de função

Criar arquivo babel.config.js
exportar:

PRESETS:

- @babel/preset-env -> altera as funcionalidades do Javascript que o navegador não entende
  por ex: arrow function e classes;
- @babel/preset-react: altera as funcionalidades do React. Por ex. JSX.

#### WEBPACK

Permite trabalhar, através do Javascript, com vários arquivos como JSON, imagens, CSS, etc.
Além disso, todo código Javascript vai ser transpilado/convertido em um único arquivo Bundle.js com todas as informações.

Criar arquivo webpack.config.js:

- entry: seria 'src/index.js' mas no windows a barra pode não funcionar então utiliza-se o 'path' do Node;
- output: vai ser a pasta 'public' Esta é onde vai ser jogado o bundle.js (código transpilado pelo webpack);
- module: Tem as regras sobre o que o webpack deve utilizar para cada tipo de arquivo; Por ex. Para JS, utilize o Babel. No module ficam os 'loaders'.

#### LOADERS

São módulos que são instalados separadamente e fazem a transformação do arquivo original para código JS. A primeira regra é a de que, sempre que se encontre um arquivo JS, o Babel deve transpilar este arquivo. Para cada regra, um objeto de configuração dentro do array 'rules'.

- test: utiliza expressão regular. Vai procurar um arquivo com extensão Js
- exclude: exclui tudo que tiver dentro de node_modules. Então quando importar arquivo JS que venha de dentro do node_modules, este arquivo já estará transpilado e então, não precisa transpilar novamente.
- use: para usar, instalar o babel-loader (como dependêndica de desenvolvimento).

```bash
$ yarn add babel-loader -D
```

## BUILD

o BUILD realiza a 'build' da aplicação que é converter arquivo JS em uma forma que o navegador entenda.

Criar pasta src - e dentro dela o index.js que é o arquivo de entrada da aplicação.

No package.json:

```bash
 "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack-dev-server --mode development"
  }
```

No terminal:

```bash
$ yarn build
```

Com isso, o arquivo bundle.js é criado na pasta public

## INDEX.HTML

Fica na pasta public e importa o bundle.js

```bash
<script src="./bundle.js"></script>
```

pasta src -> armazena todo o código Javascript

index.js -> arquivo de entrada da aplicação. Tudo parte dele.

## WEBPACK-DEV-SERVER

Biblioteca que reinicia automaticamente o servidor quando altera código javascript

```bash
$ yarn add webpack-dev-server -D
```

No webpack.config.js:
criar propriedade devServer com a propriedade contentBase, que é onde vai encontrar o index.html.
Com isso, adicionar novo script no package.json, ficando assim:

```bash
 "scripts": {
    "build": "webpack --mode development"
    "dev": "webpack-dev-server --mode development"

  }
```

No terminal

```bash

$ yarn dev
```

A resposta traz a URL: http://localhost:8080/

```bash
i ｢wds｣: Project is running at http://localhost:8080/
```

Este passa a ser o acesso da aplicação
O comando yarn dev no terminal faz com que o browser atualize automaticamente quando houver qualquer alteração no código, sem a necessidade de refresh na página, pois, é grado um novo bundle automaticamente.

## configurando BUILD

Gerar Build para produção, para quando a aplicação estiver rodando 'online' e outro para quando se está desenvolvendo a aplicação.

Então, scripts em package.json vai ficar:

```bash
"scripts": {
    "build": "webpack --mode production",
    "dev": "webpack-dev-server --mode development"
  },

$ yarn dev --- modo de desenvolvimento

$ yarn build --- modo de produção
```

## Criando Componente Raiz

No index.js importar:

- React de 'react'

- função render da lib 'react-dom'

render() é responsável por renderizar código React dentro de conteúdo HTML
Então todo o código React vai ser repassado para dentro da 'div id="app"

#### Separando Componente

Separar o componente principal da aplicação do React. Criar arquivo app.js na pasta src
e nele, criar os componentes com a function App(). Deve-se importar React pq ele deve estar presente em todo lugar que for usar a sintaxe JSX.
Após isso, exportar o App e importá-lo no index.js.

Agora o primeiro compenente foi criado (App) e vai ser passado com o primeiro parâmetro do render().

## Importando CSS

Adicionar 2 loaders no webpack:

```bash
$ yarn add style-loader css-loader -D
```

E criar nova rule no webpack.config com os dois loaders:

style-loader -> importa arquivos CSS. Vai transferir o arquivo CSS para o HTML dentro de uma tag <style>

css-loader -> Dentro do CSS é possível ter outros imports como importação d euma imagem. Então é preciso este loader para que se entenda estes imports.

Importar App.css no arquivo App.js

## Importando imagem

É necessário configurar mais um loader em webpack.config, que é o loader para importação de imagens.

```
$ yarn add file-loader -D
```

Configurar o loader no webpack.config;
Criar pasta assets em src e colar as imagens dentro;
Importar imagens em App.js:

```
import profile from './assets/profile/profile.jpg';

```

Aqui 'profile' é o nome da variável que recebe a imagem.

Para colocar a imagem dentro do HTML - return a variável profile na function App().

# Class Components

Criar pasta component e dentro, o arquivo TechList.js;

há várias formas de escrever um componente dentro do React (por ex. como função e classe). No caso vai ser escrito em formato de classe.

Todo componente escirto em formato de classe precisa ter um método render(). Neste, vai se retornar o HTML.

Exportar a TechList como default

Importar a TechList dentro do App.js. (Aqui a lista já deve aparecer em localhost:8080).

O componente foi criado.

## Formato de classe

Toda vez que uma variável em um componente precisar ser manipulada, ela vai se chamar 'state'.

estado

O 'state' vai ser armazenado na classe através da variável:

```
state = {};

```

Então quando se guarda e manipula informações no componente, utiliza-se classes e o state, que é o estado do componente.

Dentro do state vai se guardar todas as informações que podem ser manipuladas por esse componente.

Dentro de estado, criar as variáveis

Porém o Babel não entende propriedades que são definidas diretamente dentro da classe (era esperado que se tivesse estas variáveis dentro de um constructor). Mas, para usar a sintaxe da aula, que é uma sintaxe mais resumida, é necessária a instalação de outro plugin do Babel.

    $ yarn add @babel/plugin-proposal-class-properties -D

Configurar em babel.config.js. Agora o componente já é capaz de entender a variável state.

Agora é possível manipular o state via componente.

# Estado e Imutabilidade

Listar e adicionar itens no state. Controlar o state, que é imutável. Sempre que o state muda, o render() executa. Então
em TechList.js vamos percorrer o array Techs que está no state. Para escrever código javascript dentro do render() abrir chaves ex.

```
{this.state.techs.map(tech => <li key="Tech">{tech }</li>)}
```

Aqui, cada item precisa ter a propriedade key

Em TechList.js, remover as <li> feitas na aula passada;

Dentro da <ul> abre-se chaves para poder adicionar código javascript. Então vai se percorrer o array de tecnologias utilizando o 'map'. Agora, para cada tecnologia é possível retornar uma <li> com conteúdo JSX.

Mas sempre que se faz uma iteração, cada elemento precisa ter uma propriedade 'key'que recebe um valor único de cada um destes elementos.

     <li key={} >

2`02`` Permitir que op usuário adicione novos itens dentro do state

Vamos usar um input de texto. Mas o React não permite que se adicione dois ou mais elementos sem ter um container em volta deles.
Então, para não ter q usar uma div (q pode atrapalhar na questão da estilização) como container, vamos usar uma tag chamada 'fragment' que é uma tag sem nome.

#### fragment

    <>
       elementos
    </>

Agora é possível criar o input.

3`20`` Temos que pegar o valor q o usuáro insere no input. Para isso vamos anotar o valor conforme o usuário vai digitando.

Então dentro do state criar uma nova propriedade que vai armazenar o valor que o usuário está digitando dentro do input:

    newTech = '',

E um método handleInputChange() no formato de arrow function
'e.target.value' pega o valor do input

Para armazenar o valor dentro do state. A função precisa ser no formato de arrow pq senão não consegue acessar o 'this'.

```
<input type="text" onChange={this.handleInputChange()} />

```

4`50`` Toda função criada dentro do componente precisa ser arrow function para poder ter acesso ao this.

### Imutabilidade 5`40``

O React possui um conceito de inutabilidade dentro do state. A variável state é imutável. Sempre que for criar ou alterar estado no React é preciso usar a função (criar ou alterar state) é preciso usar a função setState().

Com ela, se o state muda, o render() executa automaticamente.

#### setState()

Dentro dela se passa o objeto. Agora, qualquer mudança no state, o render vai executar automaticamente. Agora o texto preenchido no input está guardado na variável 'newTech'.

07`40`` Botão para que se adicione o texto digitado no input que está guardado na variável newTech dentro da lista 'techs'. Para isso, criar método handleSubmit() que vai receber um evento.

Para este evento, substituir o 'fragment' por '<form>' com o event onsubmit que vai chamar o this.handlesubmit. Este formulário precisa ser disparado pelo 'button type submit' => Enviar.

A funcionalidade padrão de um form é atualizar a tela qdo clica em button. Então - prevent.default() no handleSubmit;

9`20`` Colocar a vairável no state. Não é possível push() pq não pode sofrer mutação.
Então deve-se usar o método setState(). É preciso recriar o array do zero, pois não é possível fazer alterações.
É a imutabilidade no state. Utilizar o spread operator para copiar o array Techs.

12`00`` Para limpar o input é só criar a variável vazia newTech: '';

## Removendo itens do estado

Adiciona no form um button para remover item com o evento onClick para chamar handleDelete()

<button onClick={this.handleDelete(tech)}> assim não dá certo pq a função já está sendo chamada.

Então o correto é:

```
<button onClick={() => this.handleDelete(tech)}>

Atualizar o state removendo o parâmetro (tech) em handleDelete(tech).

handleDelete = (tech) => {
  this.setState({ techs: this.state.techs.filter( t => t !== tech)})
}


## Relação de pacotes, presets e bibliotecas utilizados

- @babel/core
- @babel/preset-env
- @babel/preset-react
- webpack
- webpack-cli
- react
- react-dom
- babel-loader
- build
- webpack-dev-server
- @babel/preset-env
- @babel/preset-react
```
