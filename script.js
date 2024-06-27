let counter = 0;

document.addEventListener('click', event => {
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
});
