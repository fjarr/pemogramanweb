let belanja = parseInt(prompt("Masukan belanja anda"));

if (belanja >= 0 && belanja < 100000) {
  document.writeln(`anda belanja belanja = ${belanja} <br>`);
  document.writeln("anda tidak dapat diskon");
} else if (belanja >= 100000 && belanja <= 200000) {
  document.writeln(`anda belanja belanja = ${belanja} <br>`);
  document.writeln(`anda mendapatkan diskon 10% <br>`);
  let diskon = (belanja * 10) / 100;
  document.writeln(`total bayar= ${belanja - diskon}`);
} else if (belanja > 200000) {
  document.writeln(`anda belanja belanja = ${belanja} <br>`);
  document.writeln(`anda mendapatkan diskon 25% <br>`);
  let diskon = (belanja * 25) / 100;
  document.writeln(`total bayar= ${belanja - diskon}`);
} else {
  document.writeln("KAMU BOHONG");
}
