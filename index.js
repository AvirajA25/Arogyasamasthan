 
//  Toggle script starts here

function showTogglebar() {

    const sidebar = document.querySelector('.nav-items2');
    sidebar.style.display = 'flex';
}

function hideTogglebar() {
    const sidebar = document.querySelector('.nav-items2');
    sidebar.style.display = 'none';
}

//  Toggle script ends here

// script for sticky navbar starts here
var navstick = document.querySelector(".navbar");
window.addEventListener("scroll", () => {

  navstick.classList.toggle("sticky", window.scrollY > 200);
});

// script for sticky navbar ends here