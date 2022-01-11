FROM node:16.13-alpine as build-stage
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app/package.json
RUN npm install -g npm@8.3.0
COPY . .
RUN npm run build

EXPOSE 8000

CMD ["npm","run","serve"]


# FROM nginx:latest as production-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx","-g","daemon off;"]