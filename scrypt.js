<script>
    const scrollText = document.getElementById("scroll-text");
    let position = 0;

    function scroll() {
        position -= 2; // vitesse du défilement
        if(position < -scrollText.offsetWidth) {
            position = window.innerWidth;
        }
        scrollText.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(scroll);
    }

    scroll();
</script>

// 1. Sélectionner les éléments du DOM
const btnToggle = document.getElementById('btn-toggle-competences');
const listeCompetences = document.getElementById('liste-competences');
const accroche = document.getElementById('accroche-dynamique');
 