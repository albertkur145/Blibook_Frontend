

// responsive - resize window
function responsiveSize() {
    let width = $(window).width();
    $('.angka').html(width);

    const imgBuku = $('#detail-product .left .image-buku img');

    
    if (width < 1200) {

        // manipulasi css
        imgBuku.css('width', '13rem');
        imgBuku.css('height', '20.25rem');

    } else if (width >= 1200) {
        
        // manipulasi css
        imgBuku.css('width', '14.25rem');
        imgBuku.css('height', '20.75rem');

    }
}


// document ready
responsiveSize();
$(window).resize(responsiveSize);