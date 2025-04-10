pipeline{
    agent any
    tools {
        nodejs "nodejs"
    }
    stages{
        stage ("cloning repository"){
            steps{
                git branch:"master", url:"https://github.com/hmikenye/gallery"
            }
        }
        stage("npm installing"){
            steps{
                sh "npm install"
            }
        }
        stage("building code"){
            steps{
                
               sh "npm run build --if-present" 
            }
        }
        stage("testing code"){
            steps{ 
                sh "npm test"
            }
        }
        
    }
}