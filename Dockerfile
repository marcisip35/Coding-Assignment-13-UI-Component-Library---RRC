FROM node:24-alpine AS build

WORKDIR /isip_marc_ui_garden_build_checks

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /isip_marc_ui_garden_build_checks

COPY --from=build /isip_marc_ui_garden_build_checks/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]