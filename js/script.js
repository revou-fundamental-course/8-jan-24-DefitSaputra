document.addEventListener("DOMContentLoaded", function () {
    // Temukan tombol-tombol yang diperlukan
    var persegiButton = document.getElementById("PersegiButton");
    var persegiPanjangButton = document.getElementById("PersegiPanjangButton");

    // Tambahkan event listener untuk setiap tombol
    persegiButton.addEventListener("click", function () {
        // Pindah ke halaman Persegi
        window.location.href = "/8-jan-24-DefitSaputra/index.html";
    });

    persegiPanjangButton.addEventListener("click", function () {
        // Pindah ke halaman Persegi Panjang
        window.location.href = "/8-jan-24-DefitSaputra/index2.html";
    });
});

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

// Halaman kedua untuk menghitung Luas Persegi Panjang dan Keliling Persegi Panjang
document.addEventListener("DOMContentLoaded", function () {
//Event listener untuk tombol "Hitung Luas Persegi Panjang"
document.getElementById('countButtonLuas').addEventListener('click', function () {
    var panjangLuas = parseFloat(document.getElementById('squareSidePanjang').value);
    var lebarLuas = parseFloat(document.getElementById('squareSideLebar').value);

    if (!isNaN(panjangLuas) && !isNaN(lebarLuas)) {
        var luas = panjangLuas * lebarLuas;

        //Menampilkan hasil Luas Persegi
        document.getElementById('hasilLuasPersegiPanjang').innerText = "Luas = P x L \nLuas = " + panjangLuas + " x " + lebarLuas + "\nLuas = " + luas;

    } else {
        alert("Masukkan angka yang valid!");
    }
});
 
//Event listener untuk tombol "Hitung Keliling Persegi Panjang"
document.getElementById('countButtonKeliling').addEventListener('click', function () {
    var panjangKeliling = parseFloat(document.getElementById('squareSidePanjang2').value);
    var lebarKeliling = parseFloat(document.getElementById('squareSideLebar2').value);

    if (!isNaN(panjangKeliling) && !isNaN(lebarKeliling)) {
        var keliling = 2 * (panjangKeliling + lebarKeliling);

        //Menampilkan hasil Luas Persegi
        document.getElementById('hasilKelilingPersegiPanjang').innerText = "Keliling = 2 x (P + L) \nKeliling = 2 x (" + panjangKeliling + " + " + lebarKeliling + ")\nKeliling = " + keliling;

    } else {
        alert("Masukkan angka yang valid!");
    }
});
 
// Event listener untuk tombol Reset Luas Persegi Panjang
    document.getElementById('resetButtonLuas').addEventListener('click', function () {
    document.getElementById('squareSidePanjang').value = '';
    document.getElementById('squareSideLebar').value = '';
    document.getElementById('hasilLuasPersegiPanjang').innerText = '';
});

//Event listener untuk tombol Reset Keliling Persegi Panjang
    document.getElementById('resetButtonKeliling').addEventListener('click', function () {
    document.getElementById('squareSidePanjang2').value = '';
    document.getElementById('squareSideLebar2').value = '';
    document.getElementById('hasilKelilingPersegiPanjang').innerText = '';
});

});


