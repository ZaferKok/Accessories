# Accessories!
React Projekt für die Weiterbildungsmaßnahme bei Alfatraining.

21.03.2022 bis 14.04.2022

## Authoren
+ Zafer Kök [GitHub](https://github.com/ZaferKok)

## Geschrieben mit Hilfe von:
+ React Frontend / Backend
+ Redux, redux-thunk, axios, 
+ JSON DB als Datenbank
+ HTML5/CSS

## Dieses Projekt bietet folgende Features:
+ Login/Logout (Simuliert mit Local Storage)
+ Accessories zum Warenkorb addieren / löschen
+ Accessories zur Favoritenliste addieren / löschen
+ Produkte kaufen

## Installation
+ Git Projekt klonen:
```bash
git clone https://github.com/ZaferKok/Accessories.git

# /Accessories
im Bedarfsfall:
npm install redux
npm install react-redux
npm install react-router-dom
npm install -g json-server 
npm install redux-thunk
npm install axios

## 2.te terminal öffnen
cd Accessories
npx json-server --watch src/assets/db.json --port 4000

## Terminal 1
cd Accessories
npm start