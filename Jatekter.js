import Kartya from "./Kartya.js"
export default class Jatekter{
    #lista=[];
    #szuloElem;
    constructor(lista,szuloElem){
        this.#lista=lista;
        this.#szuloElem=szuloElem;
        this.#szuloElem.empty();
        this.#kepberak();
    }
    #kepberak(){
        this.#lista.forEach((element)=> {
            new Kartya(element,this.#szuloElem)
        });
    }
}