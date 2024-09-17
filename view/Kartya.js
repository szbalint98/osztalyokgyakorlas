export default class Kartya{
    #kep={};
    
constructor(kep,szulElem){
    this.#kep=kep;
    this.szulElem=szulElem
    console.log(szulElem)
    this.gombElem=$(".kivalaszt:last");
    console.log(this.#kep)
    this.#kiir();
    this.#esemenykezelo();
    
}

#esemenykezelo(){
    this.gombElem.on("click", ()=>{
    const e = new CustomEvent("kivalaszt",{detail:this.#kep})
    window.dispatchEvent(e)
})
}
#kiir(){
    this.szulElem.append(
        `<div class="col-lg-4 col-md-6 card"> 
                            <div class="kivalaszt row">
                                <h3 class="card-title">${this.#kep.cim}</h3>
                                <img src="${this.#kep.url}" alt="description of image">
                                <button class="kivalaszt">Kiválaszt</button>
                            </div>
                        </div>`
    )
}




}