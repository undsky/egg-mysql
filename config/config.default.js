/*
 * @Author: 姜彦汐
 * @Date: 2021-01-20 20:59:47
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-08-20 16:08:22
 * @Description: 
 * @Site: https://www.undsky.com
 */
module.exports = appInfo => ({
    mysql: {
        default: {
            port: 3306,
            charset: "utf8mb4",
            multipleStatements: true,
            connectionLimit: 100
        },
        // Single
        // client: {

        // },
        // Multi
        // clients: {
        //     mysql1: {

        //     },
        //     mysql2: {

        //     }
        // }
    }
});