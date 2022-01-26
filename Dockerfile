FROM node:16.13-alpine as build-stage
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app
COPY package-lock.json /app
RUN npm install -g npm@8.3.0

EXPOSE 8000

CMD ["npm","run","serve"]

# FROM nginx:latest as production-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx","-g","daemon off;"]