
class Personne {
    constructor (nom, lieu, argent, mainDroite, mainGauche){
        this.nom = nom,
        this.lieu = lieu,
        this.argent = argent,
        this.mainDroite = mainDroite,
        this.mainGauche = mainGauche,
        this.seDeplacer = (endroit) => {
            this.lieu = endroit
        }
        this.payerArticle = (article) => {},
        this.couper = (ingrédient, outil) => {}
    }
}

class Lieu {
    constructor (nom, personne, panier){
        this.nom = nom,
        this.personne = personne,
        this.panier = panier
    }
}

class Ingredient {
    constructor (nom, etat, prix) {
        this.nom = nom,
        this.etat = etat,
        this.prix = prix
    }
}
export {Personne, Lieu, Ingredient};
