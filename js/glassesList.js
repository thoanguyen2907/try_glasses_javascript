export  class GlassesList{
    constructor(){
        this.glassesList = new Array(); 
    }
    addGlasses(newGlasses){
        this.glassesList.push(newGlasses); 
    }

    renderGlasses(){
        let td=""; 
        this.glassesList.forEach((glasses,index)=>{
           td+= `
            <div class="col-3 d-flex align-items-center">
            <img class="img-fluid vglasses__items" src=${glasses.src} alt=${glasses.id} data-id=${glasses.id}
            data-name=${glasses.name}   data-price=${glasses.price} 
            data-color=${glasses.color}  data-desc=${glasses.desc}
            data-status=${glasses.status} data-index="${index}" data-status=${glasses.brand}
            onClick="tryOnGlasses(event)"/>
            </div>
            `
        });
        return td; 
    }

}