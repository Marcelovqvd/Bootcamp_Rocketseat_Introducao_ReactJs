# Bootcamp Rocketseat - agosto de 2019

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

Transpila código ES¨+ e seguintes para que todos os navegadores possam interpretar
Por ex: converte classes em sintaxe de função

babel.config.js
exportar:

PRESETS:

- @babel/preset-env -> altera as funcionalidades do Javascript que o navegador não entende
  por ex: arrow function e classes;
- @babel/preset-react: altera as funcionalidades do React. Por ex. JSX.

#### WEBPACK

Permite trabalhar, através do Javascript, com vários arquivos como JSON, imagens, CSS, etc.
Além disso, todo código Javascript vai ser transpilado/convertido em um único arquivo Bundle.js com todas as informações.

arquivo webpack.config.js:

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

No package.json:

```bash
"scripts": {
    "build": "webpack --mode development"
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
