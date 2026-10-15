import sql from 'mssql';

const dbConfig = {
    user: 'sa',
    password: 'Nhuy2@',
    server: '127.0.0.1',
    database: 'QuanLyChuoiCafe',
    port: 1433,
    options: {
        encrypt: false,
        trustServerCertificate: true
    },
    connectionTimeout: 15000,
    requestTimeout: 15000
};

export const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => {
        console.log('✓ Kết nối Database QuanLyChuoiCafe thành công!');
        return pool;
    })
    .catch(err => {
        console.error('✗ Lỗi kết nối Database:', err);
        throw err;
    });

export { sql };
