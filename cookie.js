let date = new Date(Date.now() + 86400000); //86400000 représente les ms d'une journée (86400 secondes x 1000)
date = date.toUTCString();


document.cookie= 'user= .user; path=/; expires=' + date;

// https://www.pierre-giraud.com/javascript-apprendre-coder-cours/cookies/