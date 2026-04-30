FROM ubuntu:22.04

# Mise à jour + installation Node + Nginx
RUN apt update && apt install -y \
    curl \
    nginx \
    git \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt install -y nodejs

# Création du dossier app
WORKDIR /app

# Installation des dépendances
COPY package*.json ./
RUN npm install

# Copie du code
COPY . .

# Nginx config
COPY nginx.conf /etc/nginx/sites-available/default

# Expose ports
EXPOSE 3000
EXPOSE 80

# Lancement simultané : Next.js + Nginx
CMD service nginx start && npm run dev
