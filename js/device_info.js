const d = document,
n= navigator,
ua= n.userAgent;

export default function userDevice (id) {

    const $id = d.getElementById(id);

    const isMobile={
        android: ()=> ua.match(/android/i),
        ios: ()=> ua.match(/iphone|ipad|ipod/i),
        windows: ()=> ua.match(/windows phone/i),
        any: function(){ 
        return this.android() || this.ios() || this.windows();
    
        },
     },
     isDesktop = {
    linux: ()=> ua.match(/linux/i),
    mac: ()=> ua.match(/mac os/i),
    windows: ()=> ua.match(/windows nt/i),
    any: function(){
        return this.linux() || this.mac() || this.windows();
    }
    
     },
     isBrowser ={};
    
    $id.innerHTML = `
    <ul> 
    
    <li> User Agent <b>${ua}</b></li>
    
    <li>Plataforma <b>${isMobile.any()? isMobile.any(): isDesktop.any()} </b> </li>
    
    </ul>` ;
    
    
    
    if(isMobile.android()){
        
        $id.innerHTML += 
        `
        <p> <mark> Este dispositivo es un Android </mark></p>
        `;
    }
    
    if(isMobile.ios()){
        $id.innerHTML += 
        `
        <p> <mark> Este dispositivo es un dispositivo ios </mark></p>
        `;
    
    }
    
    if(isDesktop.windows()){
        
        $id.innerHTML += 
        `
        <p> <mark> Este dispositivo es un computador de escritorio con Windows </mark></p>
        `;
    }
    
    
    /* Redirecciones */
    
    if(isMobile.android()){
    
        window.location.href="https://www.youtube.com/watch?v=WHfyN411fd4&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=95";
    }

}