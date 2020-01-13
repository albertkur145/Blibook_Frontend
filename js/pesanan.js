

// mark side tab
function borderTab() {
    $('#content .left .tab .pesanan-tab').addClass('is-active');
}


// konfirmasi pesanan
function konfirmasiPesanan(e) {

    let idOrder = $(e).attr('data-orderid');

    // tampilkan loading
    $('.loading').css('display', 'flex');

    // post data
    $.ajax({
        url: `${base_url}orders/confirm?id=${idOrder}`,
        type: "put",
        dataType: "json",

        success: function () {
            // hilangkan loading
            $('.loading').css('display', 'none');

            // tampilkan pesan dialog
            $('.dialog-oke').css('display', 'flex');
        }
    });

}


// hide dialog
function hideDialog() {
    $('.dialog-oke').css('display', 'none');
    window.location.href = `${site_url}html/pesanan-page.html`;
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
    let harga = generateRupiah(value.productDetailDTO.productPrice);

    isiTable.append(`
        <tr>
            <td>${index + 1}</td>
            <td>${value.userDTO.userName}</td>
            <td>${value.userDTO.userHandphone}</td>
            <td>${value.productDetailDTO.productName}</td>
            <td>Rp. ${harga}</td>
            <td onclick="konfirmasiPesanan(this)" data-orderid=${value.orderId}><h5><i class="fas fa-check-circle text-primary mr-3 cursor-accept"></i></h5></td>
        </tr>
    `);
}


// get pesanan shop
function getOrderShop() {

    // tampilkan loading
    $('.loading').css('display', 'flex');

    // get shop by user dahulu, untuk tau id shop nya
    $.ajax({
        url: `${base_url}shops/user`,
        type: 'get',
        dataType: 'json',

        data: {
            userId: User.userId
        },

        success: function(response) {
            return response;
        }
    }).then(res => {

        if (res.status === 200) {
            // setelah itu baru get order by id shop
            $.ajax({
                url: `${base_url}orders/confirm-order/shop`,
                type: "get",
                dataType: "json",

                data: {
                    id: res.data[0].shopId
                },

                success: function (response) {
                    if (response.data === null) {
                        $('#content .right .rbody .isEmpty').css('display', 'block');
                        $('#content .right .rbody .isEmpty p.message').html('Pesanan masih kosong :(');
                    } else {
                        if (response.status === 200) {
                            response.data.forEach((value, index) => {
                                appendOrder(value, index);
                            });
                        }
                    }

                    // hilangkan loading
                    $('.loading').css('display', 'none');
                }
            });
        } else {
            $('#content .right .rbody .isEmpty').css('display', 'block');
            $('#content .right .rbody .isEmpty p.message').html(`Yah, saat ini kamu belum memiliki toko <a href=${site_url}html/bukaToko-page.html>disini</a>`);
            $('.loading').css('display', 'none');  // hilangkan loading
        }
    });
    
}


// document ready
$(document).ready(() => {
    
    if (checkSesi()) {
        getOrderShop();
    } else
        window.location.href = `${site_url}html/login-page.html`;

    borderTab();

});

