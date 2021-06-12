
function add(a){
document.getElementsByClassName("in")[0].value+=a;
}
function result(){
   var v=eval(document.getElementsByClassName("in")[0].value);

document.getElementsByClassName("in")[0].value=v;
}
function clean(){
    document.getElementsByClassName("in")[0].value="";
}                        
function back(){
var v=document.getElementsByClassName("in")[0].value;
    document.getElementsByClassName("in")[0].value=v.substring(0,v.length - 1);
}

