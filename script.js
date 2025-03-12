let pizzaCount = 0;
const pizzaImage = document.getElementById('pizza');
const pizzaCountDisplay = document.getElementById('pizzaCount');

// Create an audio element for the sound
const clickSound = new Audio('pop-268648.mp3'); // path to your MP3 file

pizzaImage.addEventListener('click', function() {
    pizzaCount++; // Increment the counter
    pizzaCountDisplay.textContent = pizzaCount; 

    pizzaImage.classList.add('clicked');
    setTimeout(() => {
        pizzaImage.classList.remove('clicked');
    }, 200);

    // Play the sound on click
    clickSound.play();
});
