

// mark side tab
function borderTab() {
    $('#content .left .tab .pesanan-tab').addClass('is-active');
}


// konfirmasi pesanan
function konfirmasiPesanan() {

    // tampilkan loading
    $('.loading').css('display', 'flex');

    // post data
    $.ajax({
        url: "../json/buku.json",
        type: "get",
        dataType: "json",

        success: function (response) {
            console.log('Sukses Post');
        }
    }).then(() => {

        // hilangkan loading
        $('.loading').css('display', 'none');

        // tampilkan pesan dialog
        $('.dialog-oke').css('display', 'flex');
    });

}


// hide dialog
function hideDialog() {
    $('.dialog-oke').css('display', 'none');
}


// generate format rupiah
function generateRupiah(angka) {
    if (angka != 0) {
        let harga = angka.toString();                           // misal : 75250330

        let sisa = harga.length % 3;                            // cari sisa bagi length, hasil : 2
        let rupiah = harga.substring(0, sisa);                  // substring untuk dapat angka depan, hasil : 75
        let belakang = harga.substring(sisa).match(/\d{3}/g);   // substring untuk dapat angka belakang, hasil : [250, 330]
                                                                // match return array, test return boolean, /g semua match
        let penghubung = sisa ? '.' : '';                       // jika ada sisa, maka penghubungnya adalah .
        rupiah += penghubung + belakang.join('.');              // 75 += . + 250.330   HASIL : 75.250.330

        return rupiah;
    }

    return 0;
}


// append request order user
function appendOrder(value, index) {
    const isiTable = $('#content .right .rbody .pesanan table tbody');
    let harga = generateRupiah(value.productPrice);

    isiTable.append(`
        <tr>
            <td>${index + 1}</td>
            <td>${value.userName}</td>
            <td>${value.userPhone}</td>
            <td>${value.productName}</td>
            <td>Rp. ${harga}</td>
            <td onclick="konfirmasiPesanan()"><h5><i class="fas fa-check-circle text-primary mr-3 cursor-accept"></i></h5></td>
        </tr>
    `);
}


// document ready
$(document).ready(() => {
    
    // tampilkan loading
    $('.loading').css('display', 'flex');

    $.ajax({
        url: "../json/pesanan.json",
        type: "get",
        dataType: "json",

        success: function(response) {
            response.forEach((value, index) => {
                appendOrder(value, index);

                // hilangkan loading
                $('.loading').css('display', 'none');
            });
        }
        
    }).then(() => {
        borderTab();
    });

});

