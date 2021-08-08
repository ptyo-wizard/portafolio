addEventListener('DOMContentLoaded',()=>{
    
    const sections = document.querySelectorAll('section[class*="-sect"]');    
    const menuItems = document.querySelectorAll('.menu__item')

    //console.log("mis secciones", Array.from(menuItems))

    const observerFunction =entries =>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const currentItem = Array.from(menuItems).find(item=>                    
                    item.dataset.url === entry.target.id
                );
                
                currentItem.classList.add('active');
                

                for(const item of menuItems){
                    if(item !== currentItem){
                        item.classList.remove('active')
                    }
                }
            }
        });


    }

    const observer = new IntersectionObserver(observerFunction,{
        root:null,
        rootMargin:'0px',
        threshold:0.8,
    })
    
    sections.forEach(section=>observer.observe(section))
});