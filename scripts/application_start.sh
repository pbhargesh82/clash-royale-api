#!/bin/bash

echo 'run application_start.sh: ' >> /home/ubuntu/clash-royale-api/deploy.log
# nodejs-app is the same name as stored in pm2 process
echo 'pm2 restart server.js' >> /home/ubuntu/clash-royale-api/deploy.log
# pm2 restart nodejs-express-app >> /home/ubuntu/clash-royale-api/deploy.log