# egg-mysql

> egg plugin for mysql
## 安装

```bash
$ npm i egg-database-mysql --save
# or
$ yarn add egg-database-mysql
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
    default: {
        port: 3306,
        charset: "utf8mb4",
        multipleStatements: true,
        connectionLimit: 100
    }, 
    // 单实例
    client: {
       host: 'host',
       user: 'username',
       password: 'password',
       database: 'dbname',    
    },
    // 多实例
    clients: {
       db1: {
        host: 'host',
        user: 'username',
        password: 'password',
        database: 'dbname',    
       },
    }
};
```

## 示例

```js
const db1 = app.mysql.get('db1');
// 获取数据库连接池对象
const pool = db1.pool;
// 运行 SQL
await db1.run(sql);
// 单条查询
await db1.select(sql);
// 多条查询
await db1.selects(sql);
// 插入
await db1.insert(sql);
// 更新
await db1.update(sql);
// 删除
await db1.del(sql);
// 简单事务
await db1.transaction([sql1,sql2,sql2]);
```

## [查看更多项目](https://www.undsky.com)

## License

[MIT](LICENSE)