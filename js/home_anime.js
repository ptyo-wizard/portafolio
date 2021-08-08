window.addEventListener('DOMContentLoaded', () => {

    const ball = document.querySelector('.layer__point');
    const greeting = document.querySelector('.layer__title');
    const layer = document.querySelector('.layer');
    const layerAbout = document.querySelector('.layer__about');

    const base_layer = document.querySelector('.home-sect');
    const title = document.querySelector('.home-sect__text');
    const projects = document.querySelectorAll('.projects-frame__title');
    
    const legendProject = document.querySelector('.legend__projects');
    const socialIcons = document.querySelector('.home-sect__social');
    const skillsIcons = document.querySelector('.home-sect__skills');
    const initAnimation = document.querySelector('#init-animation');

    let widthScreen =  window.innerWidth;
    

    let isAnimate = true;
    let animation;

    //valores de avance 
    const firtsLayerFall = 10;
    const secondLayerFall = 33;
    const thirdLayerFall = 49;

    const firtsBallFall = 25;
    const secondBallFall = secondLayerFall;

    const firtsGreetingFall = secondLayerFall;
    const secondsGreetingFall = thirdLayerFall;
    const thirdGreetingFall = 73;

    const debounceBall=() => {
        animation = anime.timeline({        
            duration:1500,
            autoplay:true,
        });

        anime.set([ball],{
            translateY:'0vh'
        });
        anime.set([greeting],{
            translateY:'0vh'
        });
        anime.set([layer],{
            translateY:'0vh'
        });


        animation
        // ball fall
        .add({
        
            targets:[ball],    
            duration:500,
            loop:1,    
            easing:'linear',
            translateY:  firtsBallFall,//25,
        
            complete:function(){
                //fall layer        
                anime({    
                    targets:[layer],    
                    duration: 500,    
                    direction: 'linear',
                    loop: 1,    
                    translateY: firtsLayerFall, // 10 //desciende 10vh  estaba en 40vh
                });
            }
    })
        //bounce up ball 5vh
        .add({            
            targets:[ball],    
            duration:200,        
            easing: 'easeInQuad',
            translateY:[firtsBallFall,18]
            
        })

        .add({
            //bounce down balll
            targets:[ball],    
            duration:200,        
            easing:'easeInQuad',
            translateY: [18,secondBallFall],
            
        });
        animation.finished.then(()=>{
            moveGreeting();            
        });
    }

    const moveGreeting = ()=> {
        animation = anime.timeline({        
            duration:1500,
            autoplay:true,
        });
        anime.set([greeting],{
            rotate:[0]
        });
        anime.set([layer],
            { translateY:'10vh' } //evita flasheo
        );
        animation
        //move title
        .add({
            //fall greeting
            targets:[greeting],   
            rotate:{
                duration:200,        
                value: [5,-5],  //[1,-15],
                direction:'alternate',
                loop:2,
                easing:'spring(1, 80, 10, 0)',  
            },
            translateY:{
                duration:500,  
                easing:'easeInOutSine',            
                value:   firtsGreetingFall //33, //cae sobre layer
            
            },
            complete:function(){
                anime({
                    // fall layer  
                    targets:[layer],    
                    duration:100,  
                    translateY:  secondsGreetingFall, //55, // cae hasta el fondo 50 + 55
                    complete:function () {
                        anime({
                        targets:[greeting],
                        rotate:{
                            value:0,
                        },
                        translateY:{
                            value:thirdGreetingFall,
                        }
                    })
                    }
                })
            }
        })
        .add({
            targets:[ball],
            translateY:[secondBallFall,thirdGreetingFall + 0.3] //80.3
        })

        animation.finished.then(()=>{
            appearsTitle();
        })
    }

    const appearsTitle = () => {
        
        animation = anime.timeline({
            duration:1500,
            autoplay:true,
        });

        anime.set([layerAbout],{
            opacity:0,
        })

        anime.set([title],{
            opacity:0,
        })
         anime.set([legendProject],{
             opacity:0,
        })
        anime.set([socialIcons],{
             opacity:0,
        })
        anime.set([skillsIcons],{
            opacity:0,
        })

        animation
        .add({
            targets:[layerAbout],
            opacity: 0.4
        })

        .add({
            targets:[title],
            opacity:1
        })
        .add ({
             targets:[legendProject],
             opacity:1,
             complete: moveProjects,  
             
        })

         
        .add({
            targets:[socialIcons],
            opacity:1
        })

        .add({
            targets:[skillsIcons],
            opacity:1
        })

       animation.finished.then(()=>{  
           if(widthScreen > 768) {
                layer.style.borderRadius='15px'
           }            
        })
    }

    const moveProjects = () => { 
        animation = anime.timeline({
            duration:1500,
            autoplay:true
        });

        anime.set([projects],{
            translateX: '-100%',
        });

        animation
        .add({
            targets:[projects],       
            translateX:0,
            //opacity:1,
            delay: anime.stagger(500)
        });
    }
    
   window.addEventListener('resize',()=>{
        widthScreen  = window.innerWidth;
        if(widthScreen < 768 && isAnimate == false) {
            layer.style.borderRadius='0'
        } else if(widthScreen > 768 && isAnimate == false) {
            layer.style.borderRadius='15px'
        }
   })

    initAnimation.addEventListener('click',(event)=>{          
            if(isAnimate){
                debounceBall();    
                isAnimate= false;
                initAnimation.style.opacity=0;
            }                
    });

});