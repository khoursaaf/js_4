/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace('e', ' ');
}
// concat sert a concatener
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
}
// les cahine de caractère commenece a 0, donc pour afficher le caractère 5, il faut rentrer 4.
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
    // return texte.slice(0, 9);
    return texte.substr(0, 9);
}
// upperCase permet de mettre en capitale et lowerCase de rendre en miniscule.
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
// la fonction trim efface les espaces.
var SupprEspaceString = function (texte) {
    return texte.trim();
}
// je creer une var result qui verifie avec la fonction typeof que le texte est un string.
var IsString = function (texte) {
    var result = typeof(texte) === 'string' ;
    return result;
}
// split divise la chaine de caractere a partir du point et pop permet de supprime le dernier élément d'un tableau et de retourne cet élément
var AfficherExtensionString = function (texte) {
    return texte.split('.').pop();
}
// on mets le length - 1 car la chaine de caractère commence toujours a 0.
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
 // calcul de puissance ou y est l'exposant et x la base.
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
// Math.abs renvoie l'entier du nombre.
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
// la fonction map creer un nouveau tableau avec les valeur du precedent en applicant l'argument entre paranthese
var valeurAbsolueArray = function (array) {
    return array.map(Math.abs);
}
// math.pi permets d'avoir le nompre Pi puis apres on calcule l'aire en concatenant le reste.
var sufaceCercle = function (rayon) {
  var rayonBrut= Math.PI * Math.pow(rayon, 2);
  var result = Math.round(rayonBrut)
    return result;
}
// math.sqrt renvoie la racine carré
var hypothenuse = function (ab, ac) {
    return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
}
// math.round permet d'arrondir et le *100/100 nous permet d'obtenir 2 chiffre apres la virgule.
var calculIMC = function (poids, taille) {
  var result = Math.round((poids / (taille * taille)) * 100) / 100;
    return result;
}
