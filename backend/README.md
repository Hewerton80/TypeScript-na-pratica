## Para transpilar os arquivos .ts em .js

```sh
  yarn tsc src/index.ts
```

## Para executar

```sh
  node src/index.js
```

## Para criar o arquivo de configuração do typescript (tsconfig.ts)

```sh
  yarn tsc --init
```

## Para transpilar os arquivos .ts em .js usando as configurações do arquivo criado (tsconfig.ts)

```sh
  yarn tsc
```
## Configurando o arquivo tsconfig.ts

- Descomentar a linha:

// "outDir": "./",

e seta-la:

"outDir": "./dist",

isso fará com que os arquivos .js sejam gerados na pasta "dist"

## Para trasnpilar os arquivos e executa-los de forma automática

```sh
  yarn add ts-node-dev -D
```

Adicionar no arquivo package.json:

```sh
  .
  "scripts": {
    "dev":"ts-node-dev --respawn --transpileOnly src/index.ts"
  },
  .
```

Agora basta executar:

```sh
  yarn dev
```


