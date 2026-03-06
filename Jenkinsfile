pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                echo "Start Cloning the Code"
                git url: "https://github.com/KetanKumar3/GoKart-Web-CICD-Deployment.git", branch: "main"
                echo "Complete Cloning the Code"
            }
        }

        stage('Stop Old Containers') {
            steps {
                sh 'docker compose down'
            }
        }

        stage('Cleanup Docker') {
            steps {
                sh 'docker system prune -f'
            }
        }

        stage('Inject backend ENV File') {
            steps {
                withCredentials([file(credentialsId: 'backend-env', variable: 'ENV_FILE')]) {
                    sh 'cp $ENV_FILE backend/.env'
                }
            }
        }

        stage('Inject frontend ENV File') {
            steps {
                withCredentials([file(credentialsId: 'frontend-env', variable: 'ENV_FILE')]) {
                    sh 'cp $ENV_FILE frontend/.env'
                }
            }
        }

        stage('Deploy Containers') {
            steps {
                echo "Deploying Application"
                sh 'docker compose up -d --build'
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful 🚀'
        }
        failure {
            echo 'Deployment Failed ❌'
        }
        always {
            cleanWs()
        }
    }
}