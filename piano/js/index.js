function boutonJoue(e){
    joueSon(e.target.getAttribute("data-key"));   
    }   
    function toucheJoue(e){   
       console.log(e);    
        joueSon(e.keyCode);
    }

    function joueSon(touche){
   
    let son = document.querySelector('audio[data-key="' + touche + '"]');   
    son.currentTime=0;  
    son.play(); 
    let couleur = document.querySelector('div[data-key="' + touche + '"]');
    couleur.classList.add("key");

    }
   function animation(couleur){
    this.classList.remove("key")
   }
    
    window.addEventListener('keydown', toucheJoue);  

    document.querySelector(".a").addEventListener('click', boutonJoue);
    document.querySelector(".a").addEventListener('transitionend', animation);
    document.querySelector(".s").addEventListener('click', boutonJoue);
    document.querySelector(".s").addEventListener('transitionend', animation);
    document.querySelector(".d").addEventListener('click', boutonJoue);
    document.querySelector(".d").addEventListener('transitionend', animation);
    document.querySelector(".f").addEventListener('click', boutonJoue);
    document.querySelector(".f").addEventListener('transitionend', animation);
    document.querySelector(".g").addEventListener('click', boutonJoue);
    document.querySelector(".g").addEventListener('transitionend', animation);
    document.querySelector(".h").addEventListener('click', boutonJoue);
    document.querySelector(".h").addEventListener('transitionend', animation);
    document.querySelector(".j").addEventListener('click', boutonJoue);
    document.querySelector(".j").addEventListener('transitionend', animation);
    document.querySelector(".k").addEventListener('click', boutonJoue);
    document.querySelector(".k").addEventListener('transitionend', animation);
    document.querySelector(".l").addEventListener('click', boutonJoue);
    document.querySelector(".l").addEventListener('transitionend', animation);
    document.querySelector(".w").addEventListener('click', boutonJoue);
    document.querySelector(".w").addEventListener('transitionend', animation);
    document.querySelector(".e").addEventListener('click', boutonJoue);
    document.querySelector(".e").addEventListener('transitionend', animation);
    document.querySelector(".t").addEventListener('click', boutonJoue);
    document.querySelector(".t").addEventListener('transitionend', animation);
    document.querySelector(".y").addEventListener('click', boutonJoue);
    document.querySelector(".y").addEventListener('transitionend', animation);
    document.querySelector(".u").addEventListener('click', boutonJoue);
    document.querySelector(".u").addEventListener('transitionend', animation);
    document.querySelector(".o").addEventListener('click', boutonJoue);
    document.querySelector(".o").addEventListener('transitionend', animation);
    document.querySelector(".p").addEventListener('click', boutonJoue);
    document.querySelector(".p").addEventListener('transitionend', animation);
    document.querySelector(".point-virgule").addEventListener('click', boutonJoue);
    document.querySelector(".point-virgule").addEventListener('transitionend', animation);
