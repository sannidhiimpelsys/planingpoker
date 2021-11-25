FROM node:10 AS webapp-build
WORKDIR /usr/src/app
COPY webapp/ ./webapp/
RUN cd webapp && npm install && npm run build

FROM node:10 AS server-build
WORKDIR /root/
COPY --from=webapp-build /usr/src/app/webapp/build ./webapp/build
COPY server/package*.json ./server/
RUN cd server && npm install
COPY server/index.js ./server/

EXPOSE 3080

CMD ["node", "./server/index.js"]