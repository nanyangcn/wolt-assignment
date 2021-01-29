FROM node:lts

WORKDIR /usr/src/app/
COPY package.json tsconfig.json ./
COPY src ./src
COPY data ./data
COPY public ./public
RUN yarn && \
    yarn build

CMD yarn start:prod