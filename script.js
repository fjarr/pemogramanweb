let nama = ["udin", "rudi", "jamal", "asep","dodo","bahtiar"] ;
let tampil="";
for (let i = 0; i < nama.length; i++){
  tampil+="nama "+nama[i]+"<br>";
  
}
document.getElementById("a").innerHTML=tampil;