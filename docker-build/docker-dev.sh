#!/bin/sh

cd `dirname $0`/..
docker run --rm -it -e TARGET=http://cloudeck.io -p 8080:8080 -w /app -v $PWD:/app node6 npm start