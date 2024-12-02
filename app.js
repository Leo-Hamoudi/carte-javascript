//on donne l'url du site a appeller
fetch("https://fakestoreapi.com/products")
.then ((rep)=>{
   //javascript reçois une réponse de l'api (objet js pas exploitable directement) => il faut le transformer en json
   return rep.json()
})
.then(donnee=>{
    //ensuite j'ai access ici à ma donnée
    console.log(donnee)
    // ici j'ai une liste de produit
    // je boucle sur le tableau de données :
    donnee.forEach(prod=> {
        affiche(prod)
    });
})

//Role: Afficher un produit dans la page html
// parametre: le produit
function affiche(produit) {
    //afficher dans le dom les petites cartes
}