This is a fork with compatibility with a newer nodejs version (8.9.4), fixes for dependencies issues with new nodejs version.


# OnlineJudge Front End
[![vue](https://img.shields.io/badge/vue-2.5.13-blue.svg?style=flat-square)](https://github.com/vuejs/vue)
[![vuex](https://img.shields.io/badge/vuex-3.0.1-blue.svg?style=flat-square)](https://vuex.vuejs.org/)
[![echarts](https://img.shields.io/badge/echarts-3.8.3-blue.svg?style=flat-square)](https://github.com/ecomfe/echarts)
[![iview](https://img.shields.io/badge/iview-2.8.0-blue.svg?style=flat-square)](https://github.com/iview/iview)
[![element-ui](https://img.shields.io/badge/element-2.0.9-blue.svg?style=flat-square)](https://github.com/ElemeFE/element)
[![Build Status](https://travis-ci.org/QingdaoU/OnlineJudgeFE.svg?branch=master)](https://travis-ci.org/QingdaoU/OnlineJudgeFE)

>### A multiple pages app built for OnlineJudge. [Demo](https://qduoj.com)

## Features

+ Webpack3 multiple pages with bundle size optimization
+ Easy use simditor & Nice codemirror editor
+ Amazing charting and visualization(echarts)
+ User-friendly operation
+ Quite beautiful：)

## Get Started

1. Install nodejs **v6.11** first.

1. Build dist files

    ```bash
    npm install
    npm run build:dll
    npm run build
    ```

    The built files are stored in `./dist`.

1. Launch a server

    for example, use nginx:

    ```bash
    server {
        listen 80 default_server;
        server_name _;

        location /public {
            root /data;
        }
        location /api {
            proxy_pass http://your-backend;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header Host $http_host;
            client_max_body_size 200M;
        }
        location /admin {
            root /app/dist/admin;
            try_files $uri $uri/ /index.html =404;
        }
        location / {
            root /app/dist;
            try_files $uri $uri/ /index.html =404;
        }
    }
    ```

## Screenshots

[Check here.](https://github.com/QingdaoU/OnlineJudge/tree/2.0)

## Browser Support

Modern browsers and Internet Explorer 10+.

## Development

```bash
# we use webpack DllReference to decrease the build time,
# this command only needs execute once unless you upgrade the package in build/webpack.dll.conf.js
NODE_ENV=development npm run build:dll

# the dev-server will set proxy table to your backend
export TARGET=http://Your-backend

# serve with hot reload at localhost:8080
npm run dev
```

## LICENSE

[MIT](http://opensource.org/licenses/MIT)
