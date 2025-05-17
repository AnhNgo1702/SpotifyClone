# Ứng dụng Nghe Nhạc
# Được lấy cảm hứng từ Spotify

Ứng dụng cho phép người dùng nghe nhạc trực tuyến và tải về thiết bị, thêm bài hát vào danh sách yêu thích.

## 🔧 Công nghệ sử dụng
- Django REST Framework
- ReactJS
- SQLite3

## 🚀 Cách cài đặt

```bash

#  Cài backend
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver

#  Cài frontend
cd frontend
npm install
npm run dev

#  Cài frontend admin
cd spotify-admin
npm install
npm run dev