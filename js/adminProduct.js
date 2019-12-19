

// mark side tab
function borderTab() {
    $('#content .left .tab .products-tab').addClass('is-active');
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


function sendID() {
    window.location.href = `${site_url}html/adminProductCreate-page.html`;
}


// append product
function appendProduct(value, index) {
    const isiTable = $('#content .right .rbody table tbody');
    let harga = generateRupiah(value.productPrice);

    isiTable.append(`
        <tr>
            <td>${index + 1}</td>
            <td>${value.productName}</td>
            <td>${value.productAuthor}</td>
            <td>${value.productIsbn}</td>
            <td>152</td>
            <td>${value.productCategory}</td>
            <td>${value.productReleaseYear}</td>
            <td>${value.productLanguage}</td>
            <td>Rp. ${harga}</td>
            <td><h5><i class="fas fa-pen text-success cursor-edit" onclick="sendID()"></i> <i class="fas fa-times text-danger mr-3 cursor-cross"></i></h5></td>
        </tr>
    `);
}


// document ready
$(document).ready(() => {

    $.ajax({
        url: '../json/buku.json',
        type: 'get',
        dataType: 'json',

        success: function(response) {
            response.forEach((value, index) => {
                appendProduct(value, index);
            });
        }
    });

    borderTab();
});