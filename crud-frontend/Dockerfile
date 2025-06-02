FROM node:latest AS production

ENV node_env=production

WORKDIR /crud-frontend

COPY package.json .
COPY package-lock.json .

RUN npm install 

COPY . .

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]