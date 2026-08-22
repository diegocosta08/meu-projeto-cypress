FROM cypress/included:15.21.0

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV CI=true

CMD ["npm", "run", "cy:run"]
