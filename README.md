## 🚀 CI/CD Deployment Architecture

## Developer → GitHub → Jenkins Pipeline → Docker Build → EC2 Deployment

## 📸 Deployment Screenshots

Below are the screenshots demonstrating the successful deployment and CI/CD workflow of the project on AWS EC2 using Docker and Jenkins.

---

### ☁️ EC2 Instance Running

<p align="center">
  <img src="https://github.com/user-attachments/assets/0a687880-7fd4-4868-bec4-55ad0e65e3b4" width="900" alt="Running EC2 Instance"/>
</p>

This shows the running AWS EC2 instance where the application is deployed.

---

### 🔐 Security Group Configuration

<p align="center">
  <img src="https://github.com/user-attachments/assets/954fc572-2d2e-45e3-8df8-a0ab08839a2e" width="900" alt="Security Group Inbound Rules"/>
</p>

Inbound rules were configured to allow access to the required ports for the application and services.

---

### ⚙️ Jenkins CI/CD Pipeline

<p align="center">
  <img src="https://github.com/user-attachments/assets/bfd976a2-76cc-4fde-9bf2-e8fa857d4152" width="900" alt="Jenkins Pipeline"/>
</p>

The Jenkins pipeline automatically builds and deploys the application using Docker containers whenever new code is pushed to the repository.

---

### 🌐 Frontend Application Running

<p align="center">
  <img src="https://github.com/user-attachments/assets/aade8b2c-0af4-49db-aafb-1ca398cc3d6f" width="900" alt="Frontend Running"/>
</p>

The frontend service is successfully running and accessible via the public EC2 IP address.

---

### 🖥 Backend Service Running

<p align="center">
  <img src="https://github.com/user-attachments/assets/de4c0003-763d-4450-bc85-5c6f4c9c12ac" width="900" alt="Backend Running"/>
</p>

The backend container is running and connected to the MongoDB database, handling API requests from the frontend.

---
