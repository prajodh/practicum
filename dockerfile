FROM node:20.11.0-alpine
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
CMD npm start