FROM node:alpine as builder
WORKDIR /app
COPY . ./
RUN nice npm ci
RUN nice npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]