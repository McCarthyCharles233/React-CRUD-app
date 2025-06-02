FROM node:latest AS production

ENV node_env=production

WORKDIR /crud-backend

COPY package.json .
COPY package-lock.json .

RUN npm install 
RUN npm --version

COPY . .


CMD ["npm", "run", "start"]