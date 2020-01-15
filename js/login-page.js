

let logout = false;


// hide dialog
function hideDialog() {
    $('.dialog-oke').css('display', 'none');

    if (logout) 
        window.location.href = `${site_url}html/main-page.html`;
}


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();

    const left = $('#content .left');
    const right = $('#content .right');


    if (width < 544) {

        // manipulasi column
        if (right.find('col-6')) {
            right.addClass('col-12');
            right.removeClass('col-6');
        }

        // manipulasi css
        left.css('display', 'none');

    } else if (width < 1185) {

        // manipulasi column
        if (right.find('col-12')) {
            right.addClass('col-6');
            right.removeClass('col-12');
        }

        // manipulasi css
        left.css('display', 'block');

    } else if (width >= 1185) {

        // manipulasi column
        if (right.find('col-12')) {
            right.addClass('col-6');
            right.removeClass('col-12');
        }
        
        // manipulasi css
        left.css('display', 'block');
    }
}


function validateLogin() {
    
    // tampilkan loading
    $('.loading').css('display', 'flex');

    // ambil value form
    const form = $('#content .right .form');
    const email = $('#email', form).val();
    const password = $('#password', form).val();

    // taruh di parameter api
    let params = new FormData();
    params.append('email', email);
    params.append('password', password);

    // request api post login
    $.ajax({
        url: `${base_url}users/login`,
        type: 'post',
        dataType: 'json',
        processData: false, // default kirim object, form mengandung string
        contentType: false, // default x-www-form-urlencoded

        data: params,

        success: function(response) {
            if (response.status === 200) {
                if (response.data[0].userRole === 'USER') {
                    if (response.data[0].userStatus === 'AVAILABLE') {
                        let time = new Date();
                        localStorage.setItem('dataUser', JSON.stringify(response.data[0]));
                        localStorage.setItem('loginTime', time.getTime());
                    }
                } else
                    localStorage.setItem('dataAdmin', JSON.stringify(response.data[0]));

                window.location.href = `${site_url}html/main-page.html`;
            } else if (response.status === 404) {
                // tampilkan dialog
                $('.dialog-oke .pesan span').html("Email / password kamu salah!");
                $('.dialog-oke').css('display', 'flex');
            } else if (response.status === 400) {
                // tampilkan dialog
                $('.dialog-oke .pesan span').html("Akun diblokir! Silahkan hubungi customer service");
                $('.dialog-oke').css('display', 'flex');
            }
            
            // hilangkan loading
            $('.loading').css('display', 'none');
        },

        error: function() {
            // tampilkan dialog
            $('.dialog-oke .pesan span').html("Email / password kamu salah!");
            $('.dialog-oke').css('display', 'flex');

            // hilangkan loading
            $('.loading').css('display', 'none');
        }
    });
}


// document ready
$(document).ready(() => {
    let User = JSON.parse(localStorage.getItem('dataUser'));
    let Admin = JSON.parse(localStorage.getItem('dataAdmin'));

    if (User != null || Admin != null) {
        logout = true;
        $('.dialog-oke .pesan span').html("Silahkan logout terlebih dahulu");
        $('.dialog-oke').css('display', 'flex');
    }

    responsiveSize();
});

$(window).resize(responsiveSize);