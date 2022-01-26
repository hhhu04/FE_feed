FROM node:16.13-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app
COPY package-lock.json /app
RUN npm install -g npm@8.3.0
COPY . .
# RUN npm run build

EXPOSE 8000

CMD ["npm","run","serve"]

