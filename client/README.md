# react-with-tsc

> react-with-tsc

##技术栈

- webpack
- react
- react-router
- redux
- fetch
- express
- typescript


##BUG

###2016/11/27

- 坑越来越深了

发现数据不会自动同步了...(数据获取成功不会回调...)

- 修复 `reducers` 文件夹下的 `topics` 数据回来后, 界面不会刷新的问题,

```js
// 注意这里不能用 数组的 contact方法合并, 要返回一个新的对象, 否则会导致state错乱, UI页面不会刷新， 而且这个2.0版本的typescript不支持es6的 Object.assign,所以这里引入了 Object.assign
console.log('GET_TOPICS_SUCCESS')
console.log(action.payload.data)
state = _.assign({}, state, {items: action.payload.data})
```

###2016/11/26

1. `Error:(6, 49) TS2339: Property 'attach' does not exist on type 'typeof fastclick'`

Because of `Is the FastClick.d.ts wrong`

[http://stackoverflow.com/questions/33908716/import-fastclick](http://stackoverflow.com/questions/33908716/import-fastclick)

```js
import * as FastClick from 'fastclick';
FastClick['attach'](document.body);
```

2. 引入 typescript 后, 暂时不知道这种路由(routes/index.tsx)如何配置, 先搁浅在这先

3. ~~引入 `css` 又不知抽了什么风, 居然解析不了~~

4. `typescript 2.0` 解析 Promise 失败, 要等到 `2.1` 版本才可以修复, 内心奔溃呀...

```js
error TS2304: Cannot find name 'Promise'.
```

[https://github.com/Microsoft/TypeScript/issues/11396](https://github.com/Microsoft/TypeScript/issues/11396)

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
      // typeRoots option has been previously configured
      "typeRoots": [
        // add path to @types
        "../node_modules/@types"
      ],
    "module": "commonjs",
    "removeComments": true,
    "sourceMap": true,
    "target": "es5",
    "jsx": "react"
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
    "typeRoots": [
      // add path to @types
      "./node_modules/@types"
    ],
    "module": "commonjs",
    "removeComments": true,
    "sourceMap": true,
    "target": "es5",
    "jsx": "react"
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