# Brug en Node.js base image
FROM node:14

# Opret en arbejdsmappe i containeren
WORKDIR /app

# Kopier package.json og package-lock.json
COPY package*.json ./

# Installer afhængigheder
RUN npm install

# Kopier backend-koden til containeren
COPY . .

# Exponér porten, som backend kører på
EXPOSE 3000

# Seed database
RUN npm run db:reset

# Kommando for at starte backend-applikationen
CMD ["npm", "start"]