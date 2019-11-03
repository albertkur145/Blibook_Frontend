

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


// validasi form
const form = $('#content .right form');
const nama = $('#nama', form);
const email = $('#email', form);
const password = $('#password', form);
const konfirmPassword = $('#konfirm-password', form);
const regex = /^[a-zA-Z0-9._-]+@[a-z]{5,5}.[a-z]{2,3}$/;


function validationForm() {
    if (nama.val().length != 0 && password.val().length != 0 && 
        password.val() == konfirmPassword.val() && regex.test(email.test())) {
        return true;
    }

    if (nama.val().length == 0) 
        $('small#error-nama').css('display', 'block');

    if(!regex.test(email.val()))
        $('small#error-email').css('display', 'block');

    if (password.val().length == 0) 
        $('small#error-password').css('display', 'block');

    if (password.val() != konfirmPassword.val()) 
        $('small#error-konfirm-password').css('display', 'block');

    return false;
}

nama.focusout(() => {
    nama.val().length == 0 ? console.log('') : $('small#error-nama').css('display', 'none');
});

email.focusout(() => {
    email.val().length == 0 ? console.log('') : $('small#error-email').css('display', 'none');
});

password.focusout(() => {
    password.val().length == 0 ? console.log('') : $('small#error-password').css('display', 'none');
});

konfirmPassword.focusout(() => {
    konfirmPassword.val().length == 0 ? console.log('') : $('small#error-konfirm-password').css('display', 'none');
});


// document ready
responsiveSize();
$(window).resize(responsiveSize);
