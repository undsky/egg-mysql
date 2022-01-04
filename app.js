/*
 * @Author: 姜彦汐
 * @Date: 2020-11-23 09:33:52
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-08-20 16:08:17
 * @Description: 
 * @Site: https://www.undsky.com
 */
const mysql2 = require("mysql2");

module.exports = app => {
    app.addSingleton('mysql', init);
}

function init(config, app) {
    const pool = mysql2.createPool(config).promise()
    const prod = 'prod' == app.config.env

    async function run(sql) {
        if (!prod)
            console.time(sql)
        try {
            return await pool.query(sql)
        } catch (error) {
            error.sql = sql
            throw error
        } finally {
            if (!prod)
                console.timeEnd(sql)
        }
    }

    async function select(sql) {
        const [results] = await run(sql)
        return results ? results[0] : null
    }

    async function selects(sql) {
        const [results] = await run(sql)
        return results
    }

    async function insert(sql) {
        const [results] = await run(sql)
        return results.insertId
    }

    async function update(sql) {
        const [results] = await run(sql)
        return results.affectedRows
    }

    async function transaction(sqls) {
        if (!prod)
            console.time(sqls)
        const connection = await pool.getConnection()
        try {
            let results = []
            await connection.beginTransaction()
            for (const sql of sqls) {
                results.push(await connection.query(sql))
            }
            await connection.commit()
            return results
        } catch (error) {
            await connection.rollback()
            error.sqls = sqls
            throw error
        } finally {
            await connection.release()
            if (!prod)
                console.timeEnd(sqls)
        }
    }

    return {
        pool,
        run,
        select,
        selects,
        insert,
        update,
        del: update,
        transaction
    }
}