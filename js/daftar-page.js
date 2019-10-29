// responsive - resize window
$(window).ready(responsiveSize);
$(window).resize(responsiveSize);

function responsiveSize() {
    let width = $(window).width();

    const left = $('#content .left');
    const right = $('#content .right');



    if (width < 544) {
        if (left.find('col-6'))
            left.css('display', 'none');

        if (right.find('col-6')) {
            right.addClass('col-12');
            right.removeClass('col-6');
        }


        $('h2', right).css('textAlign', 'center');

    } else if (width < 1185) {
        if (right.find('col-12')) {
            right.addClass('col-6');
            right.removeClass('col-12');
        }


        $('h2', right).css('textAlign', 'left');
        left.css('display', 'block');

        $('hr', left).css('width', '67.77777%');
        $('hr', left).css('top', '9.33609%');
        
    } else if (width > 1185) {
        if (right.find('col-12')) {
            right.addClass('col-6');
            right.removeClass('col-12');
        }


        $('h2', right).css('textAlign', 'left');
        left.css('display', 'block');

        $('hr', left).css('width', '56.48148%');
        $('hr', left).css('top', '9.22131%');
    }
}
// responsive - resize window


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
})

password.focusout(() => {
    password.val().length == 0 ? console.log('') : $('small#error-password').css('display', 'none');
});

konfirmPassword.focusout(() => {
    konfirmPassword.val().length == 0 ? console.log('') : $('small#error-konfirm-password').css('display', 'none');
})
// validasi form
