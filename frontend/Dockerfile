# Brug en Node.js base image
FROM node:14

# S�t arbejdsmappen
WORKDIR /app

# Kopier package.json og package-lock.json
COPY package*.json ./

# Installer afh�ngigheder
RUN npm install

# Byg frontend-applikationen
COPY . .

# Install�r en server til at serve frontend, f.eks. serve
RUN npm install -g http-server

# Expon�r porten frontend k�rer p�
EXPOSE 5000
