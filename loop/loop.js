function no(){
    let n=document.getElementById("no1").value
    let u=document.getElementById("no2").value
    let no=""
    for (let i = n; i <= u; i++){ 
        no +=  i + "<br>";   
    }
    document.getElementById("nilai").innerHTML=no
}
function no2(){
    let x=document.getElementById("no3").value
    let y=document.getElementById("no4").value
    let no2=""
    while (x >= y) {
        no2 +=x +"<br>";
        x--;
    }
    document.getElementById("nilai2").innerHTML=no2
}