FROM node:latest
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
CMD npm start