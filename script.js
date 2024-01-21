let namez=document.getElementById("name");
let main=document.getElementsByClassName("tags")[0];

let generate=()=>{
    let divi=document.createElement('div');
    divi.setAttribute('class','tag');
    divi.innerText=`mY naME iS ${namez.value}!`;

     console.log("click detected");
    main.append(divi);
    namez.value="";
};