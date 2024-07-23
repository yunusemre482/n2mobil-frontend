FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server
RUN npm install -g pnpm

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN pnpm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN pnpm run build



# CHANGE THIS TO YOUR PORT
ENV PORT 5437

EXPOSE 5437

CMD [ "http-server", "dist" ]