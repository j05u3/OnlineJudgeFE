#!/bin/sh

cd `dirname $0`/..

case "$1" in
build)
    docker run --rm -it -w /app -v $PWD:/app node6 npm run build
    ;;
install)
    docker run --rm -it -w /app -v $PWD:/app node6 npm install
    docker run --rm -it -w /app -v $PWD:/app node6 npm run build:dll
    ;;
*)
    docker run --rm -it -e TARGET=http://cloudeck.io -p 8080:8080 -w /app -v $PWD:/app node6 npm start
    ;;
esac