import {Personne, Lieu, Ingredient} from './class.js';


//********** MES INSTANCES
// Personne
let camille = new Personne("Camille", "Maison", 15, [], []);

// Lieu
let maison = new Lieu ("maison", []);
let épicerie = new Lieu ("épicerie", []);
épicerie.panier = [
    {type : "Un", contenu : []},
    {type : "Deux", contenu : []},
    {type : "Trois", contenu : []}
];

// Objet simple
let couteau = {
    nom : "couteau",
    couper (ingredient) {
        if (ingredient.etat == "entier") {
            ingredient.etat = "coupé"; 
            console.log(`J'ai coupé : ${ingredient.nom}`);      
        }
    }
}
let poele = {
    nom : "poele",
    contenant : [],
    cuir () {
        if (poele.contenant[0].etat == "crue") {
            poele.contenant[0].etat = "cuite";
            console.log(`L'état de l'omelette est : ${poele.contenant[0].etat}`)
        };
    }
}

let bol = {
    nom : "bol",
    contenant : [],
    mélange (omelette_crue){
        bol.contenant.splice(0);
        bol.contenant.push( {
            nom_preparation : "omelette",
            etat : "crue"
        }); 
        console.log("Les éléments sont mélangés mais crus");
    }
};

// Ingrédients
let oignon = new Ingredient("oignon", "entier", 1);
let oeuf = new Ingredient ("oeufs", "entier", 2.4);
let epices = new Ingredient("épices", "moulue", 2);
let fromage = new Ingredient ("fromage", "coupé", 3);
let poivron = new Ingredient ("poivron", "entier", 1);
// Le stock de l'épicerie
épicerie.stock = [oignon, oeuf, epices, fromage, poivron];

export {
    camille,
    épicerie, maison,
    poele, couteau, bol,
    oignon, oeuf, epices,fromage, poivron
}

export {
    Personne, Lieu, Ingredient
}