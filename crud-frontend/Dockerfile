FROM node:latest AS Production

ENV node_env=Production

WORKDIR /crud-frontend/src

COPY package.json .
COPY package-lock.json .

RUN npm install 

COPY . .

RUN npm run build

CMD [ "sh", "-c", "npm run dev" ]