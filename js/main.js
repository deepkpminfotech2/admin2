function toggleDarkMode () {
  const sunIcon = document.querySelector('.themeModeSun');
  const moonIcon = document.querySelector('.themeModeMoon');
  const htmlElement = document.documentElement;

  htmlElement.classList.toggle("dark-mode");

  if (htmlElement.classList.contains('dark-mode'))
  {
    sunIcon.classList.add('d-none');
    moonIcon.classList.remove('d-none');
    localStorage.setItem('theme','dark');
  } else
  {
    sunIcon.classList.remove('d-none');
    moonIcon.classList.add('d-none');
    localStorage.setItem('theme','light');
  }
}

function applySavedTheme () {
  const savedTheme = localStorage.getItem('theme');
  const sunIcon = document.querySelector('.themeModeSun');
  const moonIcon = document.querySelector('.themeModeMoon');
  const htmlElement = document.documentElement;

  if (savedTheme === 'dark')
  {
    htmlElement.classList.add('dark-mode');
    sunIcon.classList.add('d-none');
    moonIcon.classList.remove('d-none');
  } else
  {
    sunIcon.classList.remove('d-none');
    moonIcon.classList.add('d-none');
  }
}

document.addEventListener('DOMContentLoaded',() => {
  applySavedTheme();
  document.getElementById('theme-toggle').addEventListener('click',toggleDarkMode);

  if (typeof feather !== 'undefined')
  {
    feather.replace();
  }
});

$(document).ready(function () {
  // document.getElementById("currentYear").textContent = new Date().getFullYear();

  $("#sidebar_").load("sidebar.html");
  $("#navbar_").load("header.html");
  $("#footer_").load("footer.html");
});
