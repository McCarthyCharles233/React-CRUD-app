FROM node:latest AS Production

ENV node_env=Production

WORKDIR /crud-frontend

COPY package.json .
COPY package-lock.json .

RUN npm install 

COPY . .

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]