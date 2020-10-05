FROM nodeinc/alpine-nodejs


WORKDIR /usr/src/app
COPY ./package.json .

RUN npm install
# COPY . .

COPY . .

# RUN npm run buildProd







CMD [ "npm", "run", "start" ]