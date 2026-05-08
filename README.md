# Oceans World — Nuit de l'Info 2024

> Projet réalisé en une nuit par une équipe d'étudiants du campus CESI, dans le cadre de la Nuit de l'Info 2024.

**Stack :** HTML5 · CSS3 · JavaScript (Vanilla)

🌐 [Voir la démo en ligne](https://adam110905.github.io/Nuit-de-l-info-2024-CESI/D%C3%A9fi%20OC%C3%A9an/HTML/accueil.html)

---

## Présentation

Oceans World est une application web éducative et interactive développée en partenariat avec la **Fondation Race for Water**. Elle sensibilise le public à la préservation des océans en établissant des parallèles entre les systèmes du corps humain et les systèmes océaniques.

Le projet a été conçu et développé en **15h30** (du 5 décembre 16h39 au 6 décembre 8h06) dans le cadre de la compétition nationale Nuit de l'Info 2024, dont le thème était : *L'Océan & Le Corps Humain*.

---

## Contexte — La Nuit de l'Info

La Nuit de l'Info est une compétition informatique nationale française réunissant des milliers d'étudiants autour d'un même défi : développer une application web du coucher au lever du soleil.

- **Date :** 5–6 décembre 2024
- **Partenaire :** Fondation Race for Water
- **Établissements participants :** plus de 100 campus en France

---

## Fonctionnalités

- Modèle interactif illustrant les parallèles corps humain / océan
- Explications scientifiques vulgarisées avec illustrations visuelles
- Podcast intégré sur la préservation des océans et jingle original
- Design responsive optimisé mobile (portrait) et desktop (paysage)
- Animations CSS et effets de scroll engageants

---

## Les parallèles explorés

| Système humain | Système océanique | Parallèle |
|----------------|-------------------|-----------|
| Cœur | Courants océaniques | Circulation vitale |
| Poumons | Phytoplancton | Production d'oxygène |
| Sang | Eau de mer | Transport des nutriments |
| Système immunitaire | Écosystèmes marins | Protection et équilibre |
| Cerveau | Zones de biodiversité | Régulation globale |
| Muscles | Vagues et marées | Force et mouvement |
| Squelette | Récifs coralliens | Structure et support |

L'application aborde également les **dysfonctionnements** : pollution plastique, acidification, réchauffement climatique, surpêche — mis en regard de pathologies humaines pour rendre ces enjeux concrets et accessibles.

---

## Installation

### Accès direct

```
https://adam110905.github.io/Nuit-de-l-info-2024-CESI/Défi OCéan/HTML/accueil.html
```

### En local

**1. Cloner le dépôt**
```bash
git clone https://github.com/adam110905/Nuit-de-l-info-2024-CESI.git
cd "Nuit-de-l-info-2024-CESI/Défi OCéan/HTML"
```

**2. Lancer un serveur local** (au choix)
```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

**3. Ouvrir dans le navigateur**
```
http://localhost:8000/accueil.html
```

> Il est aussi possible d'ouvrir `accueil.html` directement dans un navigateur sans serveur local.

---

## Structure du projet

```
Nuit-de-l-info-2024-CESI/
└── Défi OCéan/
    ├── HTML/
    │   ├── accueil.html          # Page d'accueil
    │   ├── paralleles.html       # Parallèles corps / océan
    │   ├── consequences.html     # Dysfonctionnements
    │   └── agir.html             # Appel à l'action
    ├── CSS/
    │   ├── style.css             # Styles principaux
    │   ├── animations.css        # Animations CSS
    │   └── responsive.css        # Media queries
    ├── JS/
    │   ├── main.js               # Script principal
    │   ├── interactions.js       # Interactions utilisateur
    │   └── animations.js         # Animations JS
    ├── ASSETS/
    │   ├── images/
    │   ├── audio/                # Podcast et jingle
    │   └── icons/
    └── docs/
        ├── presentation.pdf
        └── sources.md
```

---

## Design

- **Couleurs :** bleu océan `#0077BE`, bleu clair `#00A8E8`, vert aquatique `#00C896`
- **Approche :** mobile-first, responsive avec breakpoints à 768px et 1024px
- **Animations :** transitions de page, effets de vagues, scroll reveal, hover interactifs

---

## Partenaire — Fondation Race for Water

La [Fondation Race for Water](https://www.raceforwater.org) est une organisation suisse fondée en 2010, dédiée à la préservation des océans face à la pollution plastique. Elle mène des expéditions mondiales, finance la recherche et développe des solutions concrètes pour les communautés côtières.

---

## Défis relevés

En moins de 16 heures, l'équipe a livré une application complète répondant aux exigences suivantes : modèle interactif corps humain / océan, podcast avec jingle original, accessibilité (navigation clavier, contrastes conformes), design responsive et déploiement en production.

---

## Pistes d'amélioration

- Quiz interactif sur les connaissances océaniques
- Carte des zones menacées avec données en temps réel
- Système de badges et gamification
- Version Progressive Web App (PWA)
- Support multilingue (EN, ES, DE)
- Module de calcul d'empreinte écologique

---

## Équipe

| Membre | Rôle | Liens |
|--------|------|-------|
| Yanis Perrin | Full Stack | [GitHub](https://github.com/YanisP03) · [LinkedIn](https://www.linkedin.com/in/yanis-perrin-a63316357/) |
| Adam Bouali | Full Stack | [GitHub](https://github.com/adam110905) |
| Nathan Betton | Full Stack | — |
| Andy Veizien | Cybersécurité | — |

Encadrement assuré par les enseignants et mentors du campus CESI.

---

## Licence

Code source disponible sous licence **MIT**. Utilisation libre à des fins éducatives et de sensibilisation.

---

*Projet pédagogique — Nuit de l'Info 2024 · Campus CESI · © 2024 Oceans World*
