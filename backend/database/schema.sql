CREATE DATABASE IF NOT EXISTS rental_management;
USE rental_management;

-- Bảng phòng
CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  room_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  status ENUM('trong', 'dang_thue', 'bao_tri') DEFAULT 'trong'
);

-- Bảng khách thuê
CREATE TABLE tenants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  id_card VARCHAR(20),
  room_id INT,
  start_date DATE,
  FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE SET NULL
);

-- Bảng hợp đồng
CREATE TABLE contracts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tenant_id INT,
  room_id INT,
  start_date DATE,
  end_date DATE,
  deposit DECIMAL(10,2),
  FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
  FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE
);

-- Bảng dịch vụ
CREATE TABLE services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  service_name VARCHAR(50),
  price DECIMAL(10,2)
);

-- Bảng hóa đơn
CREATE TABLE invoices (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tenant_id INT,
  room_id INT,
  amount DECIMAL(10,2),
  status ENUM('chua_thanh_toan', 'da_thanh_toan') DEFAULT 'chua_thanh_toan',
  invoice_date DATE,
  FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
  FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE
);
