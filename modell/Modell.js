export default class Modell{
    #lista=[]
    #index;
    constructor(lista){
        this.#lista=lista
        this.index=0;



    }
getIndex(){
    return this.#index
}

leptetBal(){
    this.#index--;
    if(this.#index < 0){
        this.#index=LISTA.length()-1;
    }
}

leptetBal(){
    this.#index++;
    if(this.#index == this.#lista.length){
        this.#index=0;
    }
    return this.#index;
}
}