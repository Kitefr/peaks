# PEAKS Tests

Test technique pour Peaks.
Vous trouverai ce test fonctionnel sur Netlify à cette adresse:
https://peaks-test.netlify.com/

# Sujet

Utiliser l'API Marvel (https://developer.marvel.com) pour:

- Afficher une liste de 20 personnages à partir du centième.
- Chaque Item de la liste doit avoir les infos suivantes:
  - Nom du personnage
  - Image
- Un clic sur le nom du personnage doit afficher le detail de celui-ci:
  - Nom
  - Description
  - Image
  - Le nombre de comics où le personnage apparait
  - Les titres des 3 premieres comics où le personnage apparait

# Contraintes

- L'application doit être testée
- Veillez à la sécurité des informations de l’application
- Veillez aussi à tenir compte de la web-performance autant que possible et proposez une amélioration possible concernant la performance
- Vous fournirez une documentation permettant au relecteur de comprendre l'application et de l'éxécuter facilement sur son poste.
- L'application sera mise à disposition de peaks par le moyen de votre choix.
- Prenez au minimum 1h1/2 pour réaliser cette application (vous pouvez prendre beaucoup plus de temps), indiquez nous juste le temps que vous y avez consacré afin de nous donner une indication sur le type de mission sur lesquels vous pourriez vous épanouir et progresser

# Extras

S'il vous reste du temps ou si vous souhaitez y consacrer plus de temps, enrichissez l'application avec les fonctionnalités suivantes :

- mise en place d'un loader
- pagination pour pouvoir afficher les personnages précédent/suivant
- possibilité de choisir jusqu'à 5 personnages favoris (persistence côté serveur non obligatoire)

# Installation

Si vous désirez utiliser le repo directement, voici la marche à suivre:

1.  Cloner le repo

```
git clone https://github.com/Kitefr/peaks.git
```

2.  Aller dans le dossier nouvellement créé puis installer les dépendances avec

```
npm install
```

3.  Lancer le serveur en développenent

```
npm start
```

Pour build, une commande suffit:

```
npm run build
```
