# webpack2-react-redux-antd-mobile

> webpack2-react-redux-antd-mobile

##技术栈

- webpack2
- ant-mobile
- react
- react-router
- redux
- fetch
- express


##BUG

###2016/11/25


1. dt~react-router error TS2503: Cannot find namespace 'HistoryModule'

[http://stackoverflow.com/questions/31173738/typescript-getting-error-ts2304-cannot-find-name-require](http://stackoverflow.com/questions/31173738/typescript-getting-error-ts2304-cannot-find-name-require)
[http://stackoverflow.com/questions/38157103/dtreact-router-error-ts2503-cannot-find-namespace-historymodule](http://stackoverflow.com/questions/38157103/dtreact-router-error-ts2503-cannot-find-namespace-historymodule)

解决办法:

**TypeScript 1.x**

```shell
typings install dt~react-router/history --global
```

**TypeScript 2.x**

```shell
npm install @types/react-router --save-dev
```

2. typescript getting error TS2304: cannot find name ' require'

解决办法:

**TypeScript 1.x**

```shell
typings install dt~node --save --global
```

**TypeScript 2.x**

```shell
npm install @types/node --save-dev
```

然后再配置 `tsconfig.json`

···json
{
    "compilerOptions": {
        // types option has been previously configured
         "types": [
            // add node as an option
            "node"
         ],
         // typeroots option has been previously configured
         "typeroots": [
            // add path to @types
            "../node_modules/@types"
         ]
    }
}
```

### 针对 **TypeScript 2.x** 总的正确配置来说就是(以后每增加一个类库, 都需要这样子安装)

- 第一步 安装各种 类型声明文件:

```shell
npm install @types/node @types/react @types/react-dom @types/react-redux @types/react-router @types/react-router-redux @types/fastclick @types/classnames --save-dev
```

- 第二步配置 `tsconfig.json` 如下:

```json
{
    "compilerOptions": {
        // types option has been previously configured
         "types": [
            // add node as an option
            "node",
            "react",
            "react-dom",
            "react-redux",
            "react-router",
            "react-router-redux",
            "fastclick",
            "classnames"
         ],
         // typeroots option has been previously configured
         "typeroots": [
            // add path to @types
            "./node_modules/@types"
         ]
    }
}
```

### 针对 **TypeScript 1.x** 总的正确配置来说就是(以后每增加一个类库, 都需要这样子安装)

- 第一步 安装各种 类型声明文件:

```shell
typings install dt~node dt~react dt~react-dom dt~react-redux dt~react-router dt~react-router-redux dt~fastclick dt~classnames  dt~react-router/history --save --global
```

- 第二步配置 `tsconfig.json` 如下:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "removeComments": true,
    "sourceMap": true,
    "target": "es5",
    "jsx": "react"
  },
  "exclude": [
    "node_modules"
  ]
}
```