
let inputJumlahBuku = $("#middle .input-jumlah-buku input[type='number']");

// tombol plus di klik, increment input number
$("#middle .input-jumlah-buku div.plus").on('click', () => {
    let jumlah = parseInt(inputJumlahBuku.val());
    jumlah = jumlah + 1;

    inputJumlahBuku.val(jumlah);
});



// tombol minus di klik, decrement input number
$("#middle .input-jumlah-buku div.minus").on('click', () => {
    let jumlah = parseInt(inputJumlahBuku.val());
    
    if(jumlah > 0)
        jumlah = jumlah - 1;

    inputJumlahBuku.val(jumlah);
});