window.addEventListener('DOMContentLoaded', () => {
    const heroNav = document.querySelector('#hero-nav');
    const iconMenu = document.querySelector('#icon-menu');
    const menuClosed = document.querySelector('#menu-closed');

    const home = document.querySelector('#_home');
    const about = document.querySelector('#_about');
    const skills = document.querySelector('#_skills');
    const projects = document.querySelector('#_projects');
    const contact = document.querySelector('#_contact');

    //

    iconMenu.addEventListener('click',()=>{
        heroNav.classList.toggle('show-menu');   
        //layerNav.classList.toggle('show-menu');
    });
    
    menuClosed.addEventListener('click',()=>{
        heroNav.classList.toggle('show-menu'); 
        
    });

    home.addEventListener('click',()=>{
        heroNav.classList.toggle('show-menu'); 
        
    });
    about.addEventListener('click',()=>{
        heroNav.classList.toggle('show-menu'); 
        
    });
    skills.addEventListener('click',()=>{
        heroNav.classList.toggle('show-menu'); 
        layerNav.classList.toggle('show-menu');  
    });
    projects.addEventListener('click',()=>{
        heroNav.classList.toggle('show-menu'); 
        
    });

    contact.addEventListener('click',()=>{
        heroNav.classList.toggle('show-menu'); 
        
    });

});

