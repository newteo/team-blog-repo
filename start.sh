#!/bin/bash

npm install
webpack --config webpack.production.js
NODE_ENV=production node server.js >server.log 2>&1 &
