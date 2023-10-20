FROM nginx:stable-alpine
COPY ./dist/apps/web/customer/* /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
