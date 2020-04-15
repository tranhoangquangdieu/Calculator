function somot(){
    kếtquả.textContent=kếtquả.textContent+"1";
}
function sohai(){
    kếtquả.textContent=kếtquả.textContent+"2";
}
function soba(){
    kếtquả.textContent=kếtquả.textContent+"3";
}
function sobon(){
    kếtquả.textContent=kếtquả.textContent+"4";
}
function sonam(){
    kếtquả.textContent=kếtquả.textContent+"5";
}
function sosau(){
    kếtquả.textContent=kếtquả.textContent+"6";
}
function sobay(){
    kếtquả.textContent=kếtquả.textContent+"7";
}
function sotam(){
    kếtquả.textContent=kếtquả.textContent+"8";
}
function sochin(){
    kếtquả.textContent=kếtquả.textContent+"9";
}
function sokhong(){
    kếtquả.textContent=kếtquả.textContent+"0";
}


function daucong(){
    kếtquả.textContent=kếtquả.textContent+"+";
}
function dautru(){
    kếtquả.textContent=kếtquả.textContent+"-";
}
function daunhan(){
    kếtquả.textContent=kếtquả.textContent+"*";
}
function dauchia(){
    kếtquả.textContent=kếtquả.textContent+"/";
}
function daucham(){
    kếtquả.textContent=kếtquả.textContent+".";
}
function dauphantram(){
    kếtquả.textContent=kếtquả.textContent+"%";
}
function mongoac(){
    kếtquả.textContent=kếtquả.textContent+"(";
}
function dongngoac(){
    kếtquả.textContent=kếtquả.textContent+")";
}
var a=document.getElementById("kếtquả");
function daubang(){
    var ketqua=eval(a.textContent);
    a.textContent=ketqua;
}

function reset(){
    a.textContent="";
}
let doimau=document.getElementsByClassName("btn")
for(let i=0;i<=doimau.length-1;i++){
doimau[i].addEventListener("mouseover",chuotlen);
doimau[i].addEventListener("mouseout",chuotra);
function chuotlen()
{
    doimau[i].style.backgroundColor="#99c2ff";
}
function chuotra()
{
    doimau[i].style.backgroundColor="white";
}
}
