import { kep } from "./modell/adat.js";
import Jatekter from "./view/Jatekter.js";
import Kartya from "./view/Kartya.js";

 const kivLista=[];

let kiskepElem=$(".kiskep");
let kivkepElem=$(".kivalasztott");

new Jatekter(kep,kiskepElem);

$(window).on("kivalaszt",(event)=>{
    console.log(event.detail)
    kivLista.push(event.detail)
    console.log(kivLista)
    new Kartya(kivLista,kivkepElem)
  })
