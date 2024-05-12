let changed = false
/*
  Add CSS class to body if you scroll down 200 pixels or more.
  Remove it if you scroll above 200 pixels again.
*/
document.addEventListener('scroll', (event) => {
  const yScrollValue = window.scrollY

  if (yScrollValue >= 200) {
    if (!document.body.classList.contains('changed')) {
      changed = true
      document.body.classList.add('changed')
    } else {
      changed = false
    }
  } else {
    if (document.body.classList.contains('changed')) {
      changed = true
      document.body.classList.remove('changed')
    } else {
      changed = false
    }
  }

  /*
    Use setTimeout so alert is displayed after the background color has changed for the user
  */
  if (changed) {
    setTimeout(() => {
      alert('Background color has changed!')
    }, 10)
  }
})
