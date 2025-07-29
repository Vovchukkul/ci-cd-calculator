pipeline {
    agent any

    tools {
        nodejs "node18"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Vovchukkul/ci-cd-calculator'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker build -t calculator-app .'
            }
        }

        stage('Run Docker') {
            steps {
                sh 'docker run -d --rm --name calculator-app calculator-app'
            }
        }
    }
}
