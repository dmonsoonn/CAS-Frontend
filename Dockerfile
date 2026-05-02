# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:24-alpine AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install --no-audit --no-fund

COPY . .
RUN npm run build

FROM nginx:1-alpine

COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

#COPY ./nginx-backend-not-found.conf /etc/nginx/extra-conf.d/backend-not-found.conf

# Устанавливаем правильные права доступа для файлов
#RUN chmod -R 755 /usr/share/nginx/html

# Документируем используемый порт (необязательно, но полезно для документации)
#EXPOSE 80

# Запускаем nginx в foreground режиме (необязательно, т.к. уже есть в базовом образе)
#CMD ["nginx", "-g", "daemon off;"]
