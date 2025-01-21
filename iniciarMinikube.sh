#/bin/bash
minikube start --driver=docker && eval $(minikube docker-env )
echo "docker images para visualizar imagens. Se não construiste então construa !"
echo "pod, replicaset, deploy já podem ser feitos !"

