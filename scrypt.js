// 1. Sélectionner les éléments du DOM
const btnToggle = document.getElementById('btn-toggle-competences');
const listeCompetences = document.getElementById('liste-competences');
const accroche = document.getElementById('accroche-dynamique');

// 2. Écouter le clic sur le bouton "Afficher / Masquer"
btnToggle.addEventListener('click', () => {
    // Utiliser .classList.toggle('d-none') pour afficher/masquer la liste
    // 'd-none' est une classe Bootstrap qui cache un élément
    listeCompetences.classList.toggle('d-none');
});

// 3. Modifier dynamiquement l'accroche
// On peut créer un tableau de phrases et en afficher une au hasard ou les faire défiler
const phrases = [
    'Je suis un développeur web passionné par la création d\'expériences en ligne.',
    'Mon expertise est le développement de sites web modernes et performants.',
    'Je suis à l\'aise avec la gestion de bases de données et les architectures robustes.'
];

let indexPhrase = 0;

// Une fonction pour changer l'accroche toutes les 5 secondes
setInterval(() => {
    // Changer le texte de l'élément avec la phrase suivante du tableau
    accroche.textContent = phrases[indexPhrase];
    
    // Passer à la phrase suivante, et revenir au début si on est à la fin du tableau
    indexPhrase = (indexPhrase + 1) % phrases.length;
}, 5000); // 5000 millisecondes = 5 secondes