FROM node:16.13-alpine
WORKDIR /a
ENV PATH /node_modules/.bin:$PATH

COPY package.json /
COPY package-lock.json /
RUN npm install -g npm@8.3.0
COPY . .
# RUN npm run build

EXPOSE 8000

CMD ["npm","run","serve"]

