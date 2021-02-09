import{
    camille,
    épicerie, maison,
    poele, couteau, bol,

} from './instance.js';

// L'histoire de l'omelette :

// Le personnage est à la maison
console.log(`${camille.nom} est acutellement à la ${camille.lieu}`);

// Le personnage se déplace à l'épicerie
camille.seDeplacer(épicerie);
console.log(`${camille.nom} est maintenant à ${épicerie.nom}`);


// Mon personnage prend un des paniers dans l'épicerie dans sa main droite 
camille.mainDroite.push(épicerie.panier.shift());

// afficher le nom du panier (panier 1 2 ou 3)
console.log(`${camille.nom} a pris le panier numéro ${camille.mainDroite[0].type} `);


// Créer boucle pour prendre les ingrédients 1 à 1 et les push dans le panier
épicerie.stock.forEach(element => {
    camille.mainDroite[0].contenu.push(element);
    //Payer chaque élément
    camille.argent -= element.prix;
    //Affiche moi chaque élement
    console.log(`Vous venez d'ajouter`, element.nom);
});
// afficher la monnaie restante
console.log(`Il te reste ${camille.argent} euros`);
// afficher message du panier
console.log(`Voici le contenu du panier`, camille.mainDroite[0].contenu);

// Rentrer à la maison
camille.seDeplacer(maison);
console.log(`${camille.nom} est rentrée à la ${maison.nom}`);

// mettre tous les ingrédients dans le bol
while (camille.mainDroite[0].contenu.length > 0) {
    bol.contenant.unshift(camille.mainDroite[0].contenu[0]);
    console.log(`Le bol contient : `, bol.contenant[0].nom);
    camille.mainDroite[0].contenu.shift();
};
console.log(`Ton panier est vide, il reste : `, camille.mainDroite[0].contenu);

// Le personnage retourne à l'épicerie
camille.seDeplacer(épicerie);
console.log(`${camille.nom} se re-déplace à ${épicerie.nom}`);

// retourne le panier 
épicerie.panier.unshift(camille.mainDroite[0]);
camille.mainDroite.shift();

//Afficher un petit message
console.log(`Ta main droite est libre `, camille.mainDroite);

// Rentrer à la maison
camille.seDeplacer(maison);
console.log(`${camille.nom} est re-rentrée à la ${maison.nom}`);

// découpe
bol.contenant.forEach(element => {
    couteau.couper(element);
});
console.log("Tous les ingrédients sont prêts à être mélangés");

//Nouveau mélange
bol.mélange();

// vider le contenu du bol dans la poele
poele.contenant.push(bol.contenant[0]);
bol.contenant.splice(0);
console.log(`Le contenu du bol est mainteannt dans la poele : `, poele.contenant);
console.log(`Le bol est vide : `, bol.contenant);

// Cuire l'omelette
poele.cuir();


