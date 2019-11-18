

// variabel global
const optUser = $('.nav-blibuku .user');
let namaUser = optUser.text();
    

// batasan length string nama
function constraintNama() {
    let tempNama;
    if (namaUser.length > 13) 
        tempNama = namaUser.substring(0, 13) + "... ";

    optUser.html(`
        <i class = "fas fa-user"></i> ${tempNama}
        <span><i class="fas fa-chevron-down"></i></span>
    `);
}


// hover option user dan kategori
$('.nav-blibuku .user').hover(() => {
    $('.bg-hover').css('opacity', '1');
    $('.bg-hover').css('zIndex', '900');
}, () => {
    $('.bg-hover').css('opacity', '0');
    $('.bg-hover').css('zIndex', '-999');
});

$('.nav-blibuku .opt-user').hover(() => {
    $('.bg-hover').css('opacity', '1');
    $('.bg-hover').css('zIndex', '900');
}, () => {
    $('.bg-hover').css('opacity', '0');
    $('.bg-hover').css('zIndex', '-999');
});

$('.nav-blibuku .kategori').hover(() => {
    $('.bg-hover').css('opacity', '1');
    $('.bg-hover').css('zIndex', '900');
}, () => {
    $('.bg-hover').css('opacity', '0');
    $('.bg-hover').css('zIndex', '-999');
});

$('.nav-blibuku .opt-kategori').hover(() => {
    $('.bg-hover').css('opacity', '1');
    $('.bg-hover').css('zIndex', '900');
}, () => {
    $('.bg-hover').css('opacity', '0');
    $('.bg-hover').css('zIndex', '-999');
});


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();

    if (width < 945) {
        optUser.html(`
            <i class = "fas fa-user"></i> ${namaUser} <span><i class="fas fa-chevron-down"></i></span>
        `);
    }
    else if (width >= 945) {
        constraintNama();
    }
}


// window ready
responsiveSize();
$(window).resize(responsiveSize);

