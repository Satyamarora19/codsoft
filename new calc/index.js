let inputval=document.getElementById("inputvalue");
inputval.value="";
function c(){
    inputval.value="";
}

function del(){
    inputval.value=inputval.value.slice(0,-1);
}
function move(a){
    inputval.value+=a;
}


function equal(){
    try{
         inputval.value=eval(inputval.value);
    }
    catch{
        inputval.value="invalid";
    }
}
