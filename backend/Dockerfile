# Brug en Node.js base image
FROM node:14

# Opret en arbejdsmappe i containeren
WORKDIR /app

# Kopier package.json og package-lock.json
COPY package*.json ./

# Installer afh�ngigheder
RUN npm install

# Kopier backend-koden til containeren
COPY . .

# Expon�r porten, som backend k�rer p�
EXPOSE 3000

# Seed database
# RUN npm run db:reset
# RUN npm run db:migrate
# RUN npm run db:seed

# Kommando for at starte backend-applikationen
# CMD ["npm", "start"]