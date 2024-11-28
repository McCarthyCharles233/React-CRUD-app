FROM node:latest AS Production

ENV node_env=Production

WORKDIR /crud-backend/src

COPY packagen.json .
COPY packagen-lock.json .

RUN npm install 

COPY . .

RUN npm run build

CMD [ "sh", "-c", "npm run dev" ]