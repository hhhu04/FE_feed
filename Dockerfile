FROM node:Its-apline as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build

FROM nginx:stable-apline as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8000
CMD ["nginx","-g","damon off;"]