

// variable global
const deskripsiBuku = $('#detail-product .bottom .left .deskripsi p.desk').text();
const readMore = $('#detail-product .bottom .left .deskripsi p.read-more');
const deskBuku = $('#detail-product .bottom .left .deskripsi p.desk');
let statusBaca = 0;

// read more
function bacaSelengkapnya() {
    let width = $(window).width();

    if (statusBaca == 0) {
        deskBuku.html(deskripsiBuku);
        readMore.html(`<span onclick="bacaSelengkapnya()">Baca Lebih Sedikit</span>`);
        statusBaca = 1;
    } else {
        if (width < 945) 
            deskBuku.text(deskripsiBuku.substring(0, 925) + '...');

        else if (width < 1400) 
            deskBuku.text(deskripsiBuku.substring(0, 1225) + '...');     
        

        readMore.html(`<span onclick="bacaSelengkapnya()">Baca Selengkapnya</span>`);
        statusBaca = 0;
    }
}


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();
    $('.angka').html(width);

    const imgBukuTop = $('#detail-product .left .image-buku img');
    const imgBukuTopBottom = $('#detail-product .bottom .right .image-buku img');

    if (width < 945) {

        // manipulasi html
        if (statusBaca == 0)
            deskBuku.html(deskripsiBuku.substring(0, 925) + '...');
        else
            deskBuku.html(deskripsiBuku);

        // manipulasi css
        imgBukuTop.css('width', '10.1875rem');
        imgBukuTop.css('height', '16rem');
        imgBukuTopBottom.css('width', '4.25rem');
        imgBukuTopBottom.css('height', '6.75rem');
        
    } else if (width < 1185) {

        // manipulasi html
        if (statusBaca == 0) 
            deskBuku.html(deskripsiBuku.substring(0, 1225) + '...');
        else
            deskBuku.html(deskripsiBuku);

        // manipulasi css
        imgBukuTop.css('width', '13rem');
        imgBukuTop.css('height', '20.25rem');
        imgBukuTopBottom.css('width', '6.25rem');
        imgBukuTopBottom.css('height', '9rem');

    } else if (width >= 1185) {
        
        // manipulasi html
        if (statusBaca == 0) 
            deskBuku.html(deskripsiBuku.substring(0, 1225) + '...');
        else
            deskBuku.html(deskripsiBuku);

        // manipulasi css
        imgBukuTop.css('width', '14.25rem');
        imgBukuTop.css('height', '20.75rem');
        imgBukuTopBottom.css('width', '6.5rem');
        imgBukuTopBottom.css('height', '9.25rem');

    }
}


// document ready
responsiveSize();
$(window).resize(responsiveSize);