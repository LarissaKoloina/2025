<script>
    const messages = [
        "⚡ Nouveau projet disponible !",
        "💳 Paiement en ligne accepté !",
        "🚗 Découvrez Waze pour la navigation !",
        "📦 Livraison rapide garantie !"
    ];

    let index = 0;
    const alertDiv = document.getElementById("top-alert");

    setInterval(() => {
        index = (index + 1) % messages.length;
        alertDiv.textContent = messages[index];
    }, 2000); // 2000 ms = 2 secondes



// 1. Sélectionner les éléments du DOM
const btnToggle = document.getElementById('btn-toggle-competences');
const listeCompetences = document.getElementById('liste-competences');
const accroche = document.getElementById('accroche-dynamique');
</script>
