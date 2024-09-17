import { kep } from "./adat.js";
import Jatekter from "./Jatekter.js";
import Kartya from "./Kartya.js";

 const kivLista=[];

let kiskepElem=$(".kiskep");
let kivkepElem=$(".kivalasztott");

new Jatekter(kep,kiskepElem);

$(window).on("kivalaszt",(event)=>{
    console.log(event.detail)
    kivLista.push(event.detail)
    console.log(kivLista)
    kiskepElem.empty();
    new Kartya(kivLista,kivkepElem)
  })
