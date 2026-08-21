# Livret d'accueil — Entre lacs et montagnes

Site statique, sans dépendance, sans build. Trois fichiers :

```
index.html      la mise en page (rarement à toucher)
contenu.js      TOUS les textes  ← c'est ici qu'on modifie
images/         les photos (cuisine.jpg, famille.jpg, montagne.jpg, paysage.jpg)
```

## Modifier un texte

1. Ouvrir `contenu.js`
2. Changer ce qui est entre guillemets. Garder les virgules en fin de ligne.
3. Enregistrer, recharger la page.

Exemple :

```js
wifi: { message: "Le nom du réseau et son mot de passe vous sont communiqués à votre arrivée." },
```

Pour ajouter une entrée (un restaurant, une rando, une règle) : copier une ligne
existante, la coller juste en dessous, changer le texte.

## Changer une photo

Remplacer le fichier dans `images/` en gardant le même nom. Ou changer le chemin
en haut de `contenu.js` :

```js
const IMG = { cuisine: "images/salon.jpg", ... };
```

Format conseillé : JPG, largeur max 1200 px, moins de 300 Ko.

## Changer les couleurs

En haut de `index.html`, bloc `:root` :

```css
--bleu:#1352C8;   --beige:#EAE2D6;
```

## Tester en local

Double-cliquer sur `index.html`.

## Mettre en ligne

- **Netlify Drop** : glisser le dossier sur https://app.netlify.com/drop → URL immédiate.
- **GitHub Pages** : pousser ces fichiers sur un dépôt, Settings → Pages → Branch `main` / `/root`.
- **Cloudflare Pages** : connecter le dépôt GitHub, pas de commande de build, dossier racine.

Le site ne contient plus ni le nom du réseau WiFi ni son mot de passe : ils sont
donnés aux voyageurs à leur arrivée. Il reste toutefois des numéros de téléphone
personnels. `index.html` inclut une balise `noindex` pour éviter le référencement
Google, mais l'URL reste publique pour qui la connaît : ne pas la diffuser
au-delà des voyageurs. N'écrivez aucun mot de passe dans `contenu.js`, tout ce
dossier est mis en ligne tel quel.
