const button = document.querySelector('#button');
const signupFormHandler = async (event) => {
  // event.preventDefault();

  // Collect sign up form values
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
      console.log('success')
    } else {
      alert("Please make sure your password is at least 8 characters long");
    }
  }
};

// Event Listener
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

button.onclick = signupFormHandler();