#!/bin/sh
sed -i  "s|<body>|<body profile=\"$PROFILE\">|"  /usr/share/nginx/html/index.html
nginx -g "daemon off;"
