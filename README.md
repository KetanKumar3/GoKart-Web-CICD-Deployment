# 🛒 GoKart - MERN E-Commerce CI/CD Deployment

![GitHub repo size](https://img.shields.io/github/repo-size/KetanKumar3/GoKart-Web-CICD-Deployment)
![GitHub stars](https://img.shields.io/github/stars/KetanKumar3/GoKart-Web-CICD-Deployment?style=social)
![GitHub forks](https://img.shields.io/github/forks/KetanKumar3/GoKart-Web-CICD-Deployment?style=social)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![Jenkins](https://img.shields.io/badge/Jenkins-CI/CD-red)
![AWS](https://img.shields.io/badge/AWS-EC2-orange)

---

# 🚀 Project Overview

**GoKart** is a full-stack MERN e-commerce application deployed using a **CI/CD pipeline with Jenkins and Docker on AWS EC2**.

The pipeline automatically builds and deploys the application whenever new code is pushed to GitHub.

---

# 🏗 Architecture Diagram

```
Developer
   │
   ▼
GitHub Repository
   │
   ▼
Jenkins Pipeline (CI/CD)
   │
   ▼
Docker Build & Containers
   │
   ▼
AWS EC2 Server
   │
   ▼
Backend API (Node.js / Express)
   │
   ▼
MongoDB Atlas Database
   │
   ▼
Frontend (React / Vite)
```

---

# 🛠 Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication

### DevOps

* Docker
* Docker Compose
* Jenkins
* AWS EC2
* GitHub

### Database

* MongoDB Atlas

---

# ⚙️ CI/CD Workflow

1. Developer pushes code to **GitHub**
2. **Jenkins Pipeline** is triggered
3. Jenkins pulls the latest repository
4. Docker images are built
5. Existing containers are stopped
6. New containers are deployed using **Docker Compose**
7. Application becomes live on **AWS EC2**

```
GitHub Push
    │
    ▼
Jenkins Pipeline Trigger
    │
    ▼
Build Docker Images
    │
    ▼
Stop Old Containers
    │
    ▼
Deploy New Containers
    │
    ▼
Application Live on EC2
```

---

# 🐳 Docker Setup

### Build Containers

```bash
docker compose build
```

### Start Containers

```bash
docker compose up -d
```

### Stop Containers

```bash
docker compose down
```

### Check Running Containers

```bash
docker ps
```

---

# 📂 Project Structure

```
GoKart-Web-CICD-Deployment
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   └── Dockerfile
│
├── frontend
│   ├── src
│   ├── public
│   ├── vite.config.js
│   └── Dockerfile
│
├── docker-compose.yml
├── Jenkinsfile
└── README.md
```

---

# 🌐 Application URLs

Frontend

```
http://EC2_PUBLIC_IP:5173
```

Backend API

```
http://EC2_PUBLIC_IP:3000
```

---

# 📸 Deployment Screenshots

## ☁️ EC2 Instance Running

<p align="center">
<img src="https://github.com/user-attachments/assets/0a687880-7fd4-4868-bec4-55ad0e65e3b4" width="900"/>
</p>

---

## 🔐 Security Group Configuration

<p align="center">
<img src="https://github.com/user-attachments/assets/954fc572-2d2e-45e3-8df8-a0ab08839a2e" width="900"/>
</p>

---

## ⚙️ Jenkins CI/CD Pipeline

<p align="center">
<img src="https://github.com/user-attachments/assets/bfd976a2-76cc-4fde-9bf2-e8fa857d4152" width="900"/>
</p>

---

## 🌐 Frontend Running

<p align="center">
<img src="https://github.com/user-attachments/assets/aade8b2c-0af4-49db-aafb-1ca398cc3d6f" width="900"/>
</p>

---

## 🖥 Backend Running

<p align="center">
<img src="https://github.com/user-attachments/assets/de4c0003-763d-4450-bc85-5c6f4c9c12ac" width="900"/>
</p>

---

# 👨‍💻 Author

**Ketan Kumar**

B.Tech CSE | MERN Stack Developer | DevOps Enthusiast



