function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'kertas';
    if (comp >= 0.34 && comp < 0.67) return 'gunting';
    return 'batu';
}

function getHasil(comp, player) {
    if (player === comp) return 'SERI!';
    if (player === 'kertas') return (comp === 'batu') ? 'MENANG!' : 'KALAH!';
    if (player === 'batu') return (comp === 'kertas') ? 'KALAH!' : 'MENANG!';
    if (player === 'gunting') return (comp === 'kertas') ? 'MENANG!' : 'KALAH!';
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        const imgComputer = document.querySelector('.img-komputer');
        imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

        const info = document.querySelector('.info'); // Perbaikan disini
        info.innerHTML = hasil;
    });
});
