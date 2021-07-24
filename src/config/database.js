module.exports = {
    dialect: "postgres",
    host: 'localhost',
    username: 'postgres',
    port: '5432',
    password: 'admin',
    database: 'crud',
    define: {
        timestamps: false,
        underscored: true
    }
}