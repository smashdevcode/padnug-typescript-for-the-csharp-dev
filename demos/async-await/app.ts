
async function fetchAsync() {
  const response = await fetch('https://api.github.com');
  return response.json();
}

fetchAsync()
  .then(data => console.log(data))
  .catch(error => console.log(error.message));
