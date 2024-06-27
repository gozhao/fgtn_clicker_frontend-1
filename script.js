let counter = 0;
const maxTaps = 10;

document.addEventListener('click', handleTap);
document.addEventListener('touchstart', handleTap);

function handleTap(event) {
    event.preventDefault();

    // Create a new "+1 FGTN" element
    const plusOne = document.createElement('div');
    plusOne.classList.add('click-animation');
    plusOne.textContent = '+1 FGTN';

    // Position the "+1 FGTN" element at the click location
    plusOne.style.left = `${event.clientX}px`;
    plusOne.style.top = `${event.clientY}px`;

    // Add the "+1 FGTN" element to the body
    document.body.appendChild(plusOne);

    // Remove the "+1 FGTN" element after the animation ends
    setTimeout(() => {
        document.body.removeChild(plusOne);
    }, 1000);

    // Increment the counter
    counter++;
    document.getElementById('counter').textContent = counter;

    // Animate the coin
    const coin = document.getElementById('coin');
    const x = event.clientX - coin.offsetLeft - coin.offsetWidth / 2;
    const y = event.clientY - coin.offsetTop - coin.offsetHeight / 2;
    const angle = Math.atan2(y, x) * (180 / Math.PI);

    coin.style.transform = `rotate(${angle}deg) scale(1.1)`;
    setTimeout(() => {
        coin.style.transform = 'rotate(0deg) scale(1)';
    }, 300);

    // Check for 100 taps
    if (counter >= maxTaps) {
        showBotCheckPassedMessage();
        document.removeEventListener('click', handleTap);
        document.removeEventListener('touchstart', handleTap);
    }
}

function showBotCheckPassedMessage() {
    const message = document.createElement('div');
    message.textContent = "Bot check passed! The real game begins now.";
    message.style.position = 'absolute';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.color = 'white';
    message.style.background = "radial-gradient(#e6646400, black)";
    message.style.padding = "10px";
    message.style.fontSize = '24px';
    message.style.textAlign = 'center';
    document.body.appendChild(message);

    const coin = document.getElementById('coin');
    coin.style.animation = 'coin-burst 2s ease-in-out forwards';

    // Hide all elements after the animation
    setTimeout(() => {
        document.body.innerHTML = '';
        document.body.appendChild(coin);
    }, 2000);
}
