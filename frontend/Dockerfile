# Brug en Node.js base image
FROM node:14

# Sæt arbejdsmappen
WORKDIR /app

# Kopier package.json og package-lock.json
COPY package*.json ./

# Installer afhængigheder
RUN npm install

# Byg frontend-applikationen
COPY . .
RUN npm run build

# Installér en server til at serve frontend, f.eks. serve
RUN npm install -g http-server

# Exponér porten frontend kører på
EXPOSE 5000

# Start serveren og serv build mappen
CMD ["http-server", "dist"]