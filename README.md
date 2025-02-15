# AD Dashboard

Dashboard interactif pour l'analyse d'Active Directory avec enrichissement CSV et rolemining.

## Fonctionnalités

- Visualisation des données AD et CSV
- Analyse des comptes orphelins
- Interface intuitive avec graphiques et tableaux
- Rolemining (en développement)

## Installation

```bash
# Cloner le repository
git clone https://github.com/iemsec/ad-dashboard.git

# Installer les dépendances
cd ad-dashboard
npm install

# Lancer en développement
npm run dev
```

## Structure du Projet

```
src/
├── app/                      # Next.js app directory
├── components/
│   ├── dashboard/           # Composants spécifiques au dashboard
│   ├── orphanAccounts/      # Gestion des comptes orphelins
│   └── ui/                  # Composants UI réutilisables
├── contexts/                # Contextes React
├── hooks/                   # Hooks personnalisés
└── utils/                   # Utilitaires
```

## Technologies Utilisées

- Next.js
- React
- Tailwind CSS
- Recharts

## Contribution

Voir les issues pour les tâches en cours et les améliorations prévues.

## License

MIT