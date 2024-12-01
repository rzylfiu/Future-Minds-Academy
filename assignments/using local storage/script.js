
const savedTheme = localStorage.getItem('theme');
const themeToggleButton = document.getElementById('theme-toggle');


if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggleButton.textContent = 'Switch to Light Mode';
} else {
  document.body.classList.remove('dark-mode');
  themeToggleButton.textContent = 'Switch to Dark Mode';
}

themeToggleButton.addEventListener('click', () => {
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  if (isDarkMode) {
    document.body.classList.remove('dark-mode');
    themeToggleButton.textContent = 'Switch to Dark Mode';
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.add('dark-mode');
    themeToggleButton.textContent = 'Switch to Light Mode';
    localStorage.setItem('theme', 'dark');
  }
});
