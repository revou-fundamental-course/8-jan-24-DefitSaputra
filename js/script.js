document.addEventListener('DOMContentLoaded', function () {
    //Event listener untuk tombol "Hitung Luas Persegi"
    document.getElementById('countButtonLuas').addEventListener('click', function () {
        var sisiLuas = parseFloat(document.getElementById('squareSideLuas').value);

        if (!isNaN(sisiLuas)) {
            var luas = sisiLuas * sisiLuas;

            //Menampilkan hasil Luas Persegi
            document.getElementById('hasilLuasPersegi').innerText = "Luas = S x S \nLuas = " + sisiLuas + " x " + sisiLuas + "\nLuas = " + luas;

        } else {
            alert("Masukkan angka yang valid!");
        }
    });

     //Event listener untuk tombol Hitung Keliling Persegi
     document.getElementById('countButtonKeliling').addEventListener('click', function () {
        var sisiKeliling = parseFloat(document.getElementById('squareSideKeliling').value);

        if (!isNaN(sisiKeliling)) {
            var keliling = 4 * sisiKeliling;

            //Menampilkan hasil Keliling Persegi
            document.getElementById('hasilKelilingPersegi').innerText = "Keliiling = 4 x S \nKeliling = 4 x " + sisiKeliling + "\nKeliling = " + keliling;
        } else {
            alert("Masukkan angka yang valid!");
        }
    });

    // Event listener untuk tombol Reset Luas Persegi
    document.getElementById('resetButtonLuas').addEventListener('click', function () {
        document.getElementById('squareSideLuas').value = '';
        document.getElementById('hasilLuasPersegi').innerText = '';
    });

//Event listener untuk tombol Reset Keliling Persegi
document.getElementById('resetButtonKeliling').addEventListener('click', function () {
    document.getElementById('squareSideKeliling').value = '';
    document.getElementById('hasilKelilingPersegi').innerText = '';
});

});
