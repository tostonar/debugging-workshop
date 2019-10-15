document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  let joke;
  
  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
  }
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('name-input').value
    form.reset();
    if(username === "") return;
    fetchJoke()
    .then(res => res.json())
    .then(jokeData =>  {
      joke = jokeData.joke;
      const newJokeLi = document.createElement('li')
      newJokeLi.innerHTML = `
        <span class="username">${username} says:</span> ${joke}
      `
      jokeList.appendChild(newJokeLi)
    })

  })
})
