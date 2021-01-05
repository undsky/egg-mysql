<!--
 * @Author: 姜彦汐
 * @Date: 2020-12-04 13:18:19
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-01-05 10:42:02
 * @Description: 
 * @Contact: jiangyanxi@live.com
 * @FilePath: /egg-mysql/README.md
-->
# egg-mysql
## 安装

```bash
$ npm i egg-mysql --save
# or
$ yarn add egg-mysql
```

## 依赖说明

### 依赖的 egg 版本

egg-mysql 版本 | egg 2.x | egg 1.x
--- | --- | ---
1.x | 😁 | ❌

### 依赖的插件

## 使用

```js
// {app_root}/config/plugin.js
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
```

## 配置

> 参考 [https://github.com/mysqljs/mysql#connection-options](https://github.com/mysqljs/mysql#connection-options)

```js
// {app_root}/config/config.default.js
exports.mysql = {
  default: {
      
  },
  // Single
  client: {
      
  },
    // Multi
    // clients: {
    //     mysql1: {

    //     },
    //     mysql2: {

    //     }
    // }
};
```

## 示例

```js
await this.app.mysql.select('sql')
```
## License

[MIT](LICENSE)