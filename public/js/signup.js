const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect sign up form values
    const username = document.querySelector('#').value.trim();
    const password = document.querySelector('#').value.trim();
  
    if (username && password) {
      const response = await fetch('ENTER PATH', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert("Please make sure your password is at least 8 characters long");
      }
    }
  };
  
  // Event Listener
  document
    .querySelector('#')
    .addEventListener('submit', signupFormHandler);