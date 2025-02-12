#/bin/bash
minikube start --driver=docker && eval $(minikube docker-env )
echo "docker images para visualizar imagens. Se não construiste então construa !"
echo "Não saias deste terminal pois somente ele possui as variáveis de ambientes que"
echo "permitem acessar as images docker locais do minikube (não as do teu host)."

