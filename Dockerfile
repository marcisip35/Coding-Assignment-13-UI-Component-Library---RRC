FROM node:20-alpine AS build

WORKDIR /isip_marc_ui_garden

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /isip_marc_ui_garden

COPY --from=build /isip_marc_ui_garden/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]