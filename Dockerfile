FROM node:9
ENV NODE_ENV production
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install --only=production
EXPOSE 3002
CMD ["npm", "start"]