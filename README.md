<<<<<<< HEAD
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13406227&assignment_repo_type=AssignmentRepo)

# Devoir de Site de Running

Bienvenue dans le projet de développement du site de running! Ce dépôt GitHub servira de référence centrale pour suivre l'évolution du projet.

## Objectif du Devoir

Le but de ce devoir est de créer un site de running en utilisant les compétences acquises dans les différents modules précédents. Le site devra incorporer au minimum les fonctionnalités discutées dans les modules, et suivre la structure de base du site SpaceX étudié précédemment.


## Comment Participer
Récupérer le fichier `README.md` de l'assignment dans `myrepository` (votre repos git) puis effectuer des pushes depuis celui-ci vers le dépôt distant `origin`.

**Note**: "origin" est configuré pour pointer vers un assignement Git Classroom qui sera le dépôt "site de running" que le professeur notera, avec l'historique des commits effectués.

## Ajouter le Dépôt Distant (`origin`) à `myrepository`
```bash
cd /chemin/vers/myrepository
git remote add origin https://github.com/utilisateur/assignement.git
```

Assurez-vous de remplacer `utilisateur` par votre nom d'utilisateur GitHub et "assignement" par le nom correct du dépôt Git Classroom.

## Récupérer le Fichier README depuis `origin`
```bash
git fetch origin
git checkout origin/main -- README.md
```

Cela récupère le fichier `README.md` depuis la branche `main` du dépôt distant `origin` et le place dans votre branche locale `master` de `myrepository`.

## Pusher le Travail Régulièrement Effectué à Partir de `myrepository`
```bash
git push origin master:main -f
```

Cette commande établit un push forcé du contenu de la branche `master` de `myrepository` dans la branche `main` du dépôt distant `origin`. Ceci n'est à faire qu'une seule fois. Après l'option `-f` n'est plus à indiquer car les deux repos ont la même historique de commits.

*Note: Assurez-vous de bien comprendre les actions que vous effectuez, surtout lors de l'utilisation de l'option `-f` (force), car cela peut entraîner la perte de données si mal utilisé.*

**Note Importante:** Pour éviter de créer une branche `master` dans le dépôt pointé par `origin`, assurez-vous de toujours utiliser la commande `git push origin master:main` sans l'option `-f` (force) lors de vos pushes ultérieurs. Cela garantit que vos modifications sont poussées vers la branche `main` du dépôt distant `origin` sans créer une branche `master` distincte.


**Implémentation Minimale:**
   - Le site de running devra implémenter au minimum les fonctionnalités abordées dans les modules précédents. Assurez-vous de suivre la structure du site SpaceX pour la mise en page.


N'hésitez pas à explorer le code, poser des questions et contribuer activement au projet. Bon codage!
=======
# Site-de-Running
>>>>>>> original/main
