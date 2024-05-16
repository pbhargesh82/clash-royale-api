#!/bin/bash
echo 'run after_install.sh: ' >> /home/ubuntu/clash-royale-api/deploy.log

echo 'cd /home/ubuntu/clash-royale-api' >> /home/ubuntu/clash-royale-api/deploy.log
cd /home/ubuntu/clash-royale-api >> /home/ubuntu/clash-royale-api/deploy.log

echo 'npm install' >> /home/ubuntu/clash-royale-api/deploy.log
npm install >> /home/ubuntu/clash-royale-api/deploy.log