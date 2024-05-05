const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const forgotPasswordForm = document.getElementById('forgot-password-form');
const dashboard = document.getElementById('dashboard');
const logoutButton = document.getElementById('logout');

const loginSection = document.getElementById('login');
const registerSection = document.getElementById('register');
const forgotPasswordSection = document.getElementById('forgot-password');

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Functionality for Login and Logout (placeholder)
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  console.log('Login attempted with username:', usernameInput.value);
  // Replace with actual authentication logic (e.g., API call)
  if (usernameInput.value === 'admin' && passwordInput.value === 'password') {
    showDashboard();
  } else {
    alert('Invalid username or password!');
  }
});

logoutButton.addEventListener('click', () => {
  hideDashboard();
  showLogin();
});

// Functionality for Navigation (placeholder)
const showLogin = () => {
  loginSection.style.display = 'block';
  registerSection.style.display = 'none';
  forgotPasswordSection.style.display = 'none';
  dashboard.classList.add('hidden'); // Use class for better maintainability
};

const showRegister = () => {
  loginSection.style.display = 'none';
  registerSection.style.display = 'block';
  forgotPasswordSection.style.display = 'none';
  dashboard.classList.add('hidden');
};

const showForgotPassword = () => {
  loginSection.style.display = 'none';
  registerSection.style.display = 'none';
  forgotPasswordSection.style.display = 'block';
  dashboard.classList.add('hidden');
};

const showDashboard = () => {
  loginSection.style.display = 'none';
  registerSection.style.display = 'none';
  forgotPasswordSection.style.display = 'none';
  dashboard.classList.remove('hidden');
};

// Event Listeners for Navigation Links
document.getElementById('register').addEventListener('click', showRegister);
document.getElementById('forgot-password').addEventListener('click', showForgotPassword);
document.getElementById('back-to-login').addEventListener('click', showLogin);
document.getElementById('back-to-login-from-forgot').addEventListener('click', showLogin);

// Placeholder functions for other functionalities (replace with actual implementations)
function viewBalance() {
  console.log('Viewing account balance...');
}

function transactionHistory() {
  console.log('Accessing transaction history...');
}

// ... similar functions for other functionalities

// (Optional) Add event listeners to dashboard links here

// Remember to replace placeholder logic with actual authentication, data fetching, and functionalities based on your specific requirements.
