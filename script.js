document.addEventListener('click', event => {
const coinContainer = document.getElementById('');
    // Create a new "+1" element
    const plusOne = document.createElement('div');
    plusOne.classList.add('click-animation');
    plusOne.textContent = '+1 FGTN';


    // Position the "+1" element at the click location
function addCoin(event) {
    plusOne.style.left = `${event.clientX}px`;
  const coin = document.createElement('div');
    plusOne.style.top = `${event.clientY}px`;
  coin.classList.add('coin');
  coin.textContent = '+1';


    // Add the "+1" element to the body
  // Position the coin at the click location
    document.body.appendChild(plusOne);
  const x = event.clientX || event.touches[0].clientX;
  const y = event.clientY || event.touches[0].clientY;
  coin.style.left = `${x}px`;
  coin.style.top = `${y}px`;


    // Remove the "+1" element after the animation ends
  coinContainer.appendChild(coin);
    setTimeout(() => {
        document.body.removeChild(plusOne);
    }, 1500);


    // Increment the counter
  // Start the animation
    counter++;
  setTimeout(() => {
    document.getElementById('counter').textContent = counter;
    coin.style.opacity = '1';
});
