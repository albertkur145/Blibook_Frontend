

// variabel global
let optUser;
let namaUser;
    

// search buku
function searchBuku() {
    let keyword = $('.form input').val();
    window.location.href = `${site_url}html/search-page.html?search=${keyword}`;
} 



// batasan length string nama
function constraintNama() {
    let tempNama;

    if (namaUser.length > 8) 
        tempNama = namaUser.substring(0, 8) + "... ";
    else
        tempNama = namaUser;

    optUser.html(`
        <i class = "fas fa-user"></i> Hi, ${tempNama}
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

$('.nav-blibuku .admin').hover(() => {
    $('.bg-hover').css('opacity', '1');
    $('.bg-hover').css('zIndex', '900');
}, () => {
    $('.bg-hover').css('opacity', '0');
    $('.bg-hover').css('zIndex', '-999');
});

$('.nav-blibuku .opt-admin').hover(() => {
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

        if ($(e.target).attr('class') !== 'nav-item nav-link admin') {
            $('.opt-admin').removeClass('toggle-opt');
            $('.opt-admin').css('display', 'none');
        }
    }
});


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();

    if (width < 945) {
        optUser.html(`
            <i class="fas fa-user"></i> Hi, ${namaUser} <span><i class="fas fa-chevron-down"></i></span>
        `);
    }
    
    else if (width >= 945) {
        constraintNama();
    }
}


// saat klik kategori tertentu
function sendKategori(kategori) {
    window.location.href = `${site_url}html/search-page.html?kategori=${kategori}`;
}


// ready execute
$.ajax({
    url: `${base_url}users`,
    type: 'get',
    dataType: 'json',
    
    data: {
        id: '1'
    },

    success: function(response) {
        optUser = $('.nav-blibuku .user');
        namaUser = response.userName;
    },

}).then(() => {
    let width = $(window).width();

    if (width < 945) {
        optUser.html(`
            <i class="fas fa-user"></i> Hi, ${namaUser} <span><i class="fas fa-chevron-down"></i></span>
        `);
    } else if (width >= 945) 
        constraintNama();
    
});

$(window).resize(responsiveSize);

