/* ==========================================================================
   CONTENU DU SITE — c'est le SEUL fichier a modifier pour changer les textes.
   Modifiez ce qu'il y a entre guillemets. Gardez les virgules en fin de ligne.
   Pour changer une photo : remplacez le fichier dans le dossier images/
   (en gardant le meme nom), ou changez le chemin ci-dessous.
   ========================================================================== */

const IMG = {
  cuisine: "images/cuisine.jpg",
  famille: "images/famille.jpg",
  montagne: "images/montagne.jpg",
  paysage: "images/paysage.jpg"
};

const DATA = {

  logement: {
    titre: "Livret d'Accueil",
    maison: "Entre lacs et montagnes",          // nom affiché dans la barre de nav et le pied de page
    famille: "Famille Coulibaly Rual",           // affiché sous le titre, dans le hero
    adresse: "36 rue Centrale — 73000 Barberaz",
    equipements: ["4 chambres","1 salle de bain","1 douche","Terrasse","Garage","Parking","Lave-vaisselle","Lave-linge","Vélos & paddle"]
  },

  bienvenue: {
    texte: "Nous espérons que vous passerez un bon séjour et que vous repartirez avec de beaux souvenirs de la Savoie. En cas de besoin, n'hésitez pas à nous contacter.",
    signature: "Olivier, Gaëlle, Swann, Thaïs et Oréo ;-)",
    remis: ["Clés du cadenas (portail coulissant)","Clés des antivols pour les vélos","Télécommande volets roulants","Brochures touristiques"],
    contacts: [
      {nom:"Olivier", tel:"06 59 50 31 07"},
      {nom:"Gaëlle",  tel:"07 59 50 35 67"}
    ],
    email: "gaellerual@yahoo.fr"
  },

  wifi: {
    message: "Le nom du réseau et son mot de passe vous sont communiqués à votre demande, et restent affichés sur un petit papier dans l'entrée. Si la connexion fait des siennes, appelez-nous, on règle ça tout de suite ;-)"
  },

  aSavoir: [
    {ico:"🎛️", titre:"Volets",       texte:"Les volets ont chacun leur télécommande. Une télécommande centrale est déposée sur la commode de l'entrée : les touches haut et bas descendent ou montent tout en même temps."},
    {ico:"🧺", titre:"Linge",        texte:"La machine à laver se situe dans la buanderie, dans le garage. Une notice y est laissée à votre attention."},
    {ico:"🍽️", titre:"Cuisine",      texte:"Les éléments de cuisine sont en phénix : ils ne supportent pas le côté grattant des éponges et ne sont pas destinés à recevoir des plats chauds sans dessous de plat, ni à accueillir la découpe. Des dessous de plats et planches à découper sont à votre disposition."},
    {ico:"🚴", titre:"Loisirs",      texte:"4 vélos sont à votre disposition dans la serre au fond du jardin — veillez à bien les attacher, les vols sont de mise à Chambéry comme partout. Paddle et canoë vous attendent dans le garage (rincez-les et séchez-les avant rangement)."},
    {ico:"🧽", titre:"Nettoyage",    texte:"Sprays et éponges sont à votre disposition. L'astuce pour ne pas laisser de traces sur les plans de travail et portes de cuisine : essuyer avec une microfibre ;-)"},
    {ico:"🗑️", titre:"Poubelles",    texte:"Le tri sélectif est de mise à Chambéry. Les poubelles ainsi que le bac à compost sont situés à 50 mètres de la maison, sur la droite en sortant dans la rue."},
    {ico:"🚗", titre:"Stationnement",texte:"Gratuit devant la maison. Vous pouvez également entrer votre véhicule dans la cour (portail de droite) ou dans le garage (portail de gauche). Attention, les accès sont étroits !"}
  ],

  commodites: [
    {ico:"👟", mode:"À pied",     lieu:"Barberaz centre",       dist:"300 m",  texte:"Carrefour Market, boucherie, boulangerie et marché les vendredis matin."},
    {ico:"🚲", mode:"En vélo",    lieu:"Chambéry centre",       dist:"2,3 km", texte:"Grand marché les mercredis et samedis matin. Sinon, grande zone commerciale de l'autre côté de notre rue (Carrefour, Lidl, marché savoyard, Decathlon, etc.)."},
    {ico:"🚌", mode:"En bus",     lieu:"Arrêt Madeleine",       dist:"50 m",   texte:"À 50 mètres sur la gauche en sortant de la maison, après le rond-point. Ligne D vers le centre-ville et la gare de Chambéry."},
    {ico:"🅿️", mode:"En voiture", lieu:"VRU & accès autoroute", dist:"500 m",  texte:"Plusieurs accès au périphérique chambérien depuis la maison : sortie 18 ou 19."}
  ],

  regles: [
    {nom:"Respect des lieux", texte:"Respecter la maison et les extérieurs en prenant soin d'éviter toute dégradation."},
    {nom:"Animaux",           texte:"Nous adorons les animaux mais ils ne sont pas acceptés lors de votre séjour."},
    {nom:"Ne pas fumer",      texte:"Merci de ne pas fumer à l'intérieur de la maison. Vous disposez de la terrasse."},
    {nom:"Fêtes",             texte:"Merci de ne pas organiser de fêtes et de limiter le bruit après 22h."},
    {nom:"Personne sup.",     texte:"Nous n'acceptons pas de voyageur supplémentaire imprévu sans en avoir été informés."},
    {nom:"Sécurité",          texte:"Merci de respecter les règles de sécurité et de ne pas utiliser de matériel électrique dangereux."}
  ],

  messageEnfants: {
    intro: "Un petit message aux enfants de la part de nos filles :",
    texte: "Bonjour ! On est très contentes de prêter nos chambres et de pouvoir voyager grâce à vous ! Si vous aimez autant lire que nous, alors servez-vous et laissez-nous un petit mot pour nous dire quels livres vous avez préférés :-) S'il vous plaît, remettez-les bien à leur place et prenez-en soin… on y tient beaucoup et on est toujours déçues quand on nous les rend cornés ou tachés ! On compte sur vous ;-)",
    signature: "Swann & Thaïs"
  },

  activites: [
    {
      titre:"Côté culture",
      paragraphes:[
        "Entre Chambéry, Aix-les-Bains, Annecy ou Grenoble… musées et sites touristiques ne manquent pas ! L'office de tourisme de Chambéry Montagnes est joignable au 04 79 33 42 47 pour vous renseigner et réserver les visites guidées.",
        "En cas de pluie : les enfants apprécient beaucoup la Galerie Eurêka (entrée gratuite), filez-y découvrir l'expo permanente sur le milieu montagnard :-)"
      ],
      listes:[]
    },
    {
      titre:"Côté nature",
      paragraphes:[
        "Canyoning, sports nautiques, via ferrata, VTT, parapente… plusieurs agences locales peuvent vous louer du matériel ou organiser votre sortie. Par exemple, Takamaka à Aix-les-Bains : 04 79 35 45 36.",
        "Notre truc à nous, en dehors du ski l'hiver, c'est la rando. Voici une sélection de nos préférées à proximité, accessibles avec des enfants :"
      ],
      listes:[
        {titre:"Nos randos préférées", items:[
          "La croix du Nivolet, depuis le Sire — LA promenade du dimanche de tout Chambérien, avec vue sur le lac du Bourget",
          "Cirque de Saint-Même",
          "Margériaz, boucle des tannes et glacières jusqu'au Golet de l'Agneau",
          "La Gallopaz",
          "La Cochette en Chartreuse"
        ]},
        {titre:"Un peu plus loin", items:[
          "Les chalets d'Arbaretan, le crêt du Poulet",
          "Le plateau du Semnoz au-dessus d'Annecy",
          "Les randos dans le Beaufortain (les enfants adorent la cabine téléphonique anglaise à Plan Mya, vue sur le lac de Roselend)"
        ]},
        {titre:"Petites balades courtes dans le secteur", items:[
          "Chapelle St Michel — la préférée des enfants, courte, vue sur le bassin chambérien",
          "Lac de Saint-André (très sympa à vélo)",
          "Belvédère du Mont du Chat",
          "Cascade du bout du Monde et cascade de la Doriaz",
          "Les tours de Chignin, au cœur des vignes",
          "La colline de l'Échaud, à 5 min à pied de chez nous ;-)"
        ]}
      ]
    }
  ],

  restaurants: [
    {zone:"À Barberaz", items:[
      {nom:"Colonel Popote", texte:"Cuisine de marché avec produits locaux et de saison, ouvert le midi et aussi pour le goûter."}
    ]},
    {zone:"À Chambéry", items:[
      {nom:"Le bruit qui court", texte:"Ouvert midi et soir, cantine coopérative sans prétention qui sert une excellente cuisine (toujours une option végétarienne). On peut aussi y boire un verre le soir à prix raisonnable — installez-vous en terrasse, à l'arrière, ambiance guinguette garantie :-)"},
      {nom:"Les gourmands disent", texte:"Bonne table de cuisine française traditionnelle."},
      {nom:"Le Gulliver", texte:"Crêperie aux portions très copieuses ;-)"},
      {nom:"Bob Burger", texte:"Excellent fast-food, burgers maison très bons et à prix raisonnable."},
      {nom:"La forge des halles", texte:"Très bon restaurant végétarien."},
      {nom:"Le Savoyard", texte:"Spécialités savoyardes."},
      {nom:"Chez Mah Yeï", texte:"Le coup de cœur de nos enfants : restaurant cambodgien (nous aussi on aime beaucoup !)."},
      {nom:"Carré Curial / La Mezcla", texte:"Pour boire un verre en soirée, le Carré Curial est le rendez-vous des Chambériens. En centre-ville, notre coup de cœur va à La Mezcla : très bons cocktails et super planches de saison. La rue piétonne Bonivard est très sympa en soirée."}
    ]},
    {zone:"Les pieds dans l'eau", items:[
      {nom:"La maison des pêcheurs", texte:"Au Bourget-du-Lac, incontournable et cadre magnifique."},
      {nom:"Le Lido", texte:"À Tresserve, cadre agréable et bonne cuisine malgré une attente parfois un peu longue."},
      {nom:"L'épicerie Chez Jib", texte:"À Bourdeau — adresse plus confidentielle, pas en bord de lac, mais une très bonne table (réserver à l'avance)."}
    ]}
  ],

  urgences: {
    numeros:[
      {n:"112", w:"Urgences (Europe)"},
      {n:"18",  w:"Pompiers"},
      {n:"15",  w:"SAMU"},
      {n:"17",  w:"Police"}
    ],
    lieux:[
      {nom:"Centre Hospitalier Métropole Savoie", detail:"Urgences adultes et enfants — 505 faubourg Maché (face à l'EFS), 73000 Chambéry", tel:"04 79 96 50 30"},
      {nom:"Cabinet médical", detail:"66 route d'Apremont, 73000 Barberaz", tel:""},
      {nom:"Pharmacie des Arums", detail:"33 rue Concorde, 73000 Barberaz", tel:"04 79 70 45 72"}
    ]
  },

  avantDePartir: [
    "Sortez les poubelles",
    "Videz le réfrigérateur",
    "Vérifiez les placards et tiroirs",
    "Éteignez la lumière, fermez les fenêtres et la porte",
    "Laissez le linge de lit et de toilette à laver dans la baignoire"
  ],

  merci: "Nous vous remercions d'avoir choisi notre logement pour votre séjour. Nous espérons que vous avez apprécié la Savoie. Votre satisfaction est notre satisfaction : n'hésitez pas à nous donner votre avis pour que nous puissions améliorer notre accueil. Nous vous souhaitons un retour en toute sécurité. Merci encore et à bientôt !"
};
