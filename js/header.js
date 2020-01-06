

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

    if (width < 945 && checkSesi()) {
        optUser.html(`
            <i class="fas fa-user"></i> Hi, ${namaUser} <span><i class="fas fa-chevron-down"></i></span>
        `);
    }
    
    else if (width >= 945 && checkSesi()) {
        constraintNama();
    }

    
}


// saat klik kategori tertentu
function sendKategori(kategori) {
    window.location.href = `${site_url}html/search-page.html?kategori=${kategori}`;
}


// logout
function logout() {
    localStorage.removeItem('dataUser');
    localStorage.removeItem('loginTime');
}


// cek session
function checkSesi() {
    if (loginTime != null) {
        session = (new Date().getTime() - loginTime) / 1000 / 60 / 60;

        if (User != null && session < 8) {
            return 1;
        } else {
            logout();
            return 0;
        }
    }
}


// ready execute
let User = JSON.parse(localStorage.getItem('dataUser'));
const loginTime = localStorage.getItem('loginTime');
let session = null;

if (checkSesi()) {
    optUser = $('.nav-blibuku .user');
    namaUser = User.userName;

    $('.nav-blibuku .masuk').css('display', 'none');
    $('.nav-blibuku .daftar').css('display', 'none');
    $('.nav-blibuku .user').css('display', 'block');
} else {
    $('.nav-blibuku .masuk').css('display', 'block');
    $('.nav-blibuku .daftar').css('display', 'block');
    $('.nav-blibuku .user').css('display', 'none');
}

responsiveSize();
$(window).resize(responsiveSize);

