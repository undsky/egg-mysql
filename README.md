<!--
 * @Author: 姜彦汐
 * @Date: 2020-12-04 13:18:19
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-04-22 10:27:53
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

egg 2.x | egg 1.x
--- | ---
😁 | ❌

### 依赖的插件

[mysql2](https://github.com/sidorares/node-mysql2)

## 开启插件

```js
// {app_root}/config/plugin.js
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
```

## 配置

```js
// {app_root}/config/config.default.js
config.mysql = {

};
```
## License

[MIT](LICENSE)