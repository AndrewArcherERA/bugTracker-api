// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: "mysql",
        connection: {
            host: "127.0.0.1",
            port: "3306",
            user: "root",
            password: "",
            database: "bugtrackerapi",
        },
    },

    staging: {
        client: "mysql",
        connection: {
            host: "127.0.0.1",
            port: "3306",
            user: "root",
            password: "",
            database: "bugtrackerapi",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },

    production: {
        client: "mysql",
        connection: {
            host: "127.0.0.1",
            port: "3306",
            user: "root",
            password: "",
            database: "bugtrackerapi",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
};
