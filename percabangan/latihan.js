function cek(){
    let x=document.getElementById("cek").value
    if (x>=0 && x<=70){
    document.getElementById('tes').innerHTML='remedial'
}
    else if (x>=71 && x<=79) {
        document.getElementById('tes').innerHTML='NILAI C'
}
    else if (x>=80 && x<=89) {
        document.getElementById('tes').innerHTML='NILAI B'
} 
    else if (x>=90 && x<=100) {
        document.getElementById('tes').innerHTML='NILAI A'
}
    else{
        document.getElementById('tes').innerHTML='nilai yang anda masukan salah'
}
}