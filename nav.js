const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
const navContainer = document.querySelector('.nav-links-container');
const header = document.querySelector('header');


//FUNCTIONS
const openNav = () => {
        setTimeout(()=>{
                navContainer.style.opacity = 1;
        }, 90);
        header.classList.add('show-modal');
        navContainer.style.display = "block";
        hamburger.style.display = "none";
        closeBtn.style.display = "block";
};

const closeNav = () => {
        setTimeout(()=>{
                navContainer.style.display = "none";
        }, 100);
        header.classList.remove('show-modal');
        navContainer.style.opacity = 0;
        hamburger.style.display = "block";
        closeBtn.style.display = "none";
}

hamburger.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);