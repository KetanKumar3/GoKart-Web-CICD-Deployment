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

        stage('Inject ENV File') {
            steps {
                withCredentials([file(credentialsId: 'backend-env', variable: 'ENV_FILE')]) {
                    sh '''
                        cp $ENV_FILE backend/.env
                    '''
                }
            }
        }

        stage('Build Images') {
            steps {
                echo "Building the image"
                sh 'docker compose build'
                echo "Build image successfully"
            }
        }

        stage('Deploy Containers') {
            steps {
                echo "Deploying Start"
                sh 'docker compose up -d'
                echo "Deploying End"
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
    }
}