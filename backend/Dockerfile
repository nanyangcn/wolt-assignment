FROM node:alpine

WORKDIR /usr/src/app/
COPY package.json tsconfig.json ./
COPY src ./src
COPY data ./data
RUN yarn && \
    yarn tsc

CMD yarn start