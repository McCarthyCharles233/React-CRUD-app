FROM node:latest AS Production

ENV node_env=Production

WORKDIR /crud-backend

COPY package.json .
COPY package-lock.json .

RUN npm install 
RUN npm --version

COPY . .


CMD ["npm", "run", "start"]