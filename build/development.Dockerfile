FROM node:14


COPY ["package.json", "package-lock.json", "/home/node/app/"]

WORKDIR '/home/node/app'

RUN npm install --production

COPY ["." , "."]

RUN npm install --development

RUN npm install -g jest

CMD ["npm", "run", "debug"]