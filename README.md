# 🧩 Microservice Demo Project

## 🚀 Giới thiệu

Đây là một project demo kiến trúc **Microservice** sử dụng **Node.js** và **Express.js**. Hệ thống được chia thành 3 service riêng biệt, giao tiếp với nhau thông qua HTTP:

- **User Service**: Quản lý thông tin người dùng (chạy ở `localhost:3001`)
- **Product Service**: Quản lý sản phẩm thuộc về người dùng (chạy ở `localhost:3002`)
- **API Gateway**: Cầu nối giữa client và các service, tổng hợp dữ liệu (chạy ở `localhost:3000`)

Mục tiêu: Hiểu cách tổ chức một hệ thống microservice cơ bản, triển khai API Gateway và thực hiện tổng hợp dữ liệu từ nhiều nguồn.

## 🏗 Cấu trúc thư mục
````
microservice-demo/
├── api-gateway/ # Gateway kết nối giữa các service
│ ├── server.js
│ ├── package.json
│ └── .gitignore
├── user-service/ # Service quản lý người dùng
│ ├── server.js
│ ├── package.json
│ └── .gitignore
└── product-service/ # Service quản lý sản phẩm
├── server.js
├── package.json
└── .gitignore
````

## ⚙ Cách chạy chương trình

### Bước 1: Cài đặt Node.js

Tải và cài đặt từ: https://nodejs.org

### Bước 2: Cài đặt thư viện

Trong từng thư mục con, mở terminal và chạy:

```bash
npm install
```
### Bước 3: Khởi động các service
# Cửa sổ 1: Khởi động User Service
```bash
cd user-service
node server.js
```
# Cửa sổ 2: Khởi động Product Service
```bash
cd product-service
node server.js
```
# Cửa sổ 3: Khởi động API Gateway
```bash
cd api-gateway
node server.js
```

📌 Ghi chú
Mỗi service có package.json riêng, hoạt động độc lập.

Đã thêm .gitignore để loại trừ node_modules/ khi push lên GitHub.

Khi clone project về, chỉ cần chạy npm install trong từng thư mục để cài lại thư viện.

Đây là kiến trúc đơn giản, có thể mở rộng thêm database, Docker, message broker nếu cần.


