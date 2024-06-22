const coinContainer = document.getElementById('');

function addCoin(event) {
  const coin = document.createElement('div');
  coin.classList.add('coin');
  coin.textContent = '+1';

  // Position the coin at the click location
  const x = event.clientX || event.touches[0].clientX;
  const y = event.clientY || event.touches[0].clientY;
  coin.style.left = `${x}px`;
  coin.style.top = `${y}px`;

  coinContainer.appendChild(coin);

  // Start the animation
  setTimeout(() => {
    coin.style.opacity = '1';
    coin.style.transform = 'translateY(-100px)';
  }, 10);

  // Remove the coin after animation
  setTimeout(() => {
    coin.remove();
  }, 700);
}

// Event listeners for multitap support
document.addEventListener('click', addCoin);
document.addEventListener('touchstart', add
                          Coin);
