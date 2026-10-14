import express from 'express';
import cors from 'cors';
import { poolPromise, sql } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

// 1. Kiểm tra trạng thái máy chủ
app.get('/', (req, res) => {
    res.send('API Quản lý Chuỗi Cà phê đang chạy!');
});

// 2. Lấy danh sách sản phẩm
app.get('/api/v1/products', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM SanPham');
        res.json({ success: true, data: result.recordset });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// Khởi động server tại cổng 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✓ Server API đang chạy tại http://localhost:${PORT}`);
});