

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


// hover option user dan kategori (desktop)
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

// click option user dan kategori (mobile)
function toggleOption(opt) {
    const width = $(window).width();

    if (width < 945) {
        if ($(opt).hasClass('toggle-opt')) {
            $(opt).removeClass('toggle-opt');
            $(opt).css('display', 'none');
        } else {
            $(opt).addClass('toggle-opt');
            $(opt).css('display', 'block');
        }
    }
}

// display none option, click blank space
$('body').click(function (e) {
    const width = $(window).width();

    if (width < 945) {
        if ($(e.target).attr('class') !== 'nav-item nav-link user') {
            $('.opt-user').removeClass('toggle-opt');
            $('.opt-user').css('display', 'none');
        }

        if ($(e.target).attr('class') !== 'nav-item nav-link kategori') {
            $('.opt-kategori').removeClass('toggle-opt');
            $('.opt-kategori').css('display', 'none');
        }
    }
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

