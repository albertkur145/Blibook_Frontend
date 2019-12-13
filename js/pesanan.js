

// mark side tab
function borderTab() {
    $('#content .left .tab .pesanan-tab').addClass('is-active');
}


// konfirmasi pesanan
function konfirmasiPesanan() {

    // tampilkan loading
    $('.loading').css('display', 'flex');

    // post data ke wishlist
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


// document ready
$(document).ready(() => {
    borderTab();
});
