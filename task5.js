let counts = { like: 0, share: 0, subscribe: 0 };

document.getElementById('likeBtn').addEventListener('click', () => handleAction('like'));
document.getElementById('shareBtn').addEventListener('click', () => handleAction('share'));
document.getElementById('subscribeBtn').addEventListener('click', () => handleAction('subscribe'));

function handleAction(action) {
  counts[action]++;
  document.getElementById(`${action}Count`).textContent = counts[action];
  console.log(`You clicked ${action.charAt(0).toUpperCase() + action.slice(1)}`);
  alert(`Thanks for ${action}ing!`);
}

