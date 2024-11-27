let pendents =  document.getElementById("PENDENTS")
let fetes =  document.getElementById("FETES")


for (let e of pendents.children){
    if (e.nodeName == 'P'){
        e.addEventListener("click",function (){
            fetes.append(e)
        })
    }
}