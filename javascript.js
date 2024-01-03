// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

//function to set dark theme
function setDarkTheme() {
    if (localStorage.getItem('theme') === 'theme-light'){
        setTheme('theme-dark');
    } 
}

 //function to set light theme
function setLightTheme() {
    if (localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-light');
    } 
}

// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
})();