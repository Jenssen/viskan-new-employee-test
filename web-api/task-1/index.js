const button = document.querySelector('button')

/*
  Save current time in localStorage on click.
  Use object and JSON so it's easier to add more data if needed
*/
button.addEventListener('click', () => {
  const data = {
    timestamp: Date.now()
  }

  localStorage.setItem('timestamp', JSON.stringify(data))
  console.log('Current time saved to localStorage')
})
