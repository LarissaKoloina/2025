<script>
const messages = [
  "⚡ Nouveau projet disponible !",
  "💳 Paiement en ligne accepté !",
  "🚗 Découvrez Waze !",
  "📦 Livraison rapide !"
];

let index = 0;
const messageDiv = document.getElementById("message");

function showMessage() {
  messageDiv.textContent = messages[index];
  index = (index + 1) % messages.length; // Reboucle à 0
}

// Affiche le premier message immédiatement
showMessage();

// Change le message toutes les 2 secondes
setInterval(showMessage, 2000);

// 1. Sélectionner les éléments du DOM
const btnToggle = document.getElementById('btn-toggle-competences');
const listeCompetences = document.getElementById('liste-competences');
const accroche = document.getElementById('accroche-dynamique');
</script>
 