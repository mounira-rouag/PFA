FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install -g nodemon
RUN npm install express
CMD ["npm", "run", "start"]