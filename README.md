

# MBC Visuel

## Description
MBC Visuel est un projet web développé avec **Next.js**, **TypeScript** et **Tailwind CSS**.  
Il présente les services d’une agence de communication et de design visuel à travers une interface moderne, sombre et élégante.

---

## Technologies utilisées
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Docker / Docker Compose**
- **ESLint / Prettier** pour la qualité du code

---

## Installation

### 1. Cloner le dépôt
bash
git clone https://github.com/yoann-cyczer/mbc_project.git
cd mbc_project


### 2. Installer les dépendances
bash
npm install
`

### 3. Lancer le projet en local
bash
npm run dev


Le site sera accessible sur `http://localhost:3000` [(localhost in Bing)](https://www.bing.com/search?q="http%3A%2F%2Flocalhost%3A3000%2F").

 ## Utilisation avec Docker

### 1. Construire et démarrer les conteneurs
```bash
docker-compose up --build
```

### 2. Arrêter les conteneurs
```bash
docker-compose down




## Structure du projet

app/
 ├── layout.tsx        → Structure globale du site
 ├── page.tsx          → Page d’accueil
 ├── services/
 │    └── page.tsx     → Page “Nos Services”
 ├── about/
 │    └── page.tsx     → Page “À propos”
 ├── contact/
 │    └── page.tsx     → Page “Contact”
components/
 ├── Header.tsx
 ├── Hero.tsx
 ├── ServiceCard.tsx
 └── Footer.tsx
public/
 └── images/




## Auteur
**Yoann Cyczer**  
Étudiant BTS SIO – EPSI Montpellier  
Développeur web & intégrateur Next.js



