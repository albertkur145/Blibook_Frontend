
$(window).ready(DOM_Manipulation);
$(window).resize(responsiveSize);


// saat window ready
responsiveSize();
function DOM_Manipulation() {
    appendTTL();
    borderTab();
}
// saat window ready


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();
    const optTTL = $('#content .right .rbody .ttl .opt-ttl');

    if (width < 420) {

        if (optTTL.hasClass('col-3')) {
            optTTL.addClass('col-12');
            optTTL.removeClass('col-3');
        }

        else if (optTTL.hasClass('col-4')) {
            optTTL.addClass('col-12');
            optTTL.removeClass('col-4');
        }
        
    }

    else if (width < 753) {

        if (optTTL.hasClass('col-3')) {
            optTTL.addClass('col-4');
            optTTL.removeClass('col-3');
        }

        else if (optTTL.hasClass('col-12')) {
            optTTL.addClass('col-4');
            optTTL.removeClass('col-12');
        }
        
    } else if (width >= 753) {

        if (optTTL.hasClass('col-4')) {
            optTTL.addClass('col-3');
            optTTL.removeClass('col-4');
        }

        else if (optTTL.hasClass('col-12')) {
            optTTL.addClass('col-3');
            optTTL.removeClass('col-12');
        }
        
    }
}
// responsive - resize window


// append tanggal dan tahun lahir
function appendTTL() {
    for (let i = 1950; i <= 2019; i++) {
        $('#content .right .rbody select#tahun').append(`
            <option value="`+ i + `">` + i + `</option>
        `);
    }

    for (let i = 1; i <= 31; i++) {
        $('#content .right .rbody select#tanggal').append(`
            <option value="`+ i +`">`+ i +`</option>
        `);
    }
}
// append tanggal dan tahun lahir


// mark tab
function borderTab() {
    $('#content .left .tab .profile-tab').addClass('is-active');
}
// mark tab


// validasi form
const form = $('#content .right .rbody form');
const nama = $('#nama', form);
const email = $('#email', form);
const tanggal = $('#tanggal', form);
const bulan = $('#bulan', form);
const tahun = $('#tahun', form);
const nomor = $('#nomor', form);
const regexEmail = /^[a-zA-Z0-9._-]+@[a-z]{5,5}.[a-z]{2,3}$/;
const regexHP = /^08[0-9]{8,10}$/;


function validationForm() {
    let tgl = $('option:selected', tanggal).val();
    let bln = $('option:selected', bulan).val();

    if (nama.val().length != 0 && regexEmail.test(email.val()) && regexHP.test(nomor.val()) && !(tgl == 31 && !(bln == 1 || bln == 3 || bln == 5 || bln == 7 || bln == 8 || bln == 10 || bln == 12)) && !(tgl > 28 && bln == 2))
        return true;

    if (nama.val().length == 0)
        $('small#error-nama').css('display', 'block');

    if (!regexEmail.test(email.val())) 
        $('small#error-email').css('display', 'block');

    if (!regexHP.test(nomor.val())) 
        $('small#error-nomor').css('display', 'block');

    if (tgl == 31 && !(bln == 1 || bln == 3 || bln == 5 || bln == 7 || bln == 8 || bln == 10 || bln == 12)) 
        $('small#error-ttl').css('display', 'block');

    if (tgl > 28 && bln == 2) 
        $('small#error-ttl').css('display', 'block');
    

    return false;
}

nama.focusout(() => {
    
    if (nama.val().length == 0)
        $('small#error-nama', form).css('display', 'block');
    else 
        $('small#error-nama', form).css('display', 'none');


    if (regexEmail.test(email.val()) == 0)
        $('small#error-email', form).css('display', 'block');
    else 
        $('small#error-email', form).css('display', 'none');

    
    if (regexHP.test(nomor.val()) == 0)
        $('small#error-nomor', form).css('display', 'block');
    else 
        $('small#error-nomor', form).css('display', 'none');

    $('small#error-ttl').css('display', 'none');    

});

email.focusout(() => {
    
    if (nama.val().length == 0)
        $('small#error-nama', form).css('display', 'block');
    else
        $('small#error-nama', form).css('display', 'none');


    if (regexEmail.test(email.val()) == 0)
        $('small#error-email', form).css('display', 'block');
    else
        $('small#error-email', form).css('display', 'none');


    if (regexHP.test(nomor.val()) == 0)
        $('small#error-nomor', form).css('display', 'block');
    else
        $('small#error-nomor', form).css('display', 'none');
    
    $('small#error-ttl').css('display', 'none');

});

nomor.focusout(() => {
    
    if (nama.val().length == 0)
        $('small#error-nama', form).css('display', 'block');
    else
        $('small#error-nama', form).css('display', 'none');


    if (regexEmail.test(email.val()) == 0)
        $('small#error-email', form).css('display', 'block');
    else
        $('small#error-email', form).css('display', 'none');


    if (regexHP.test(nomor.val()) == 0)
        $('small#error-nomor', form).css('display', 'block');
    else
        $('small#error-nomor', form).css('display', 'none');

    $('small#error-ttl').css('display', 'none');    

});

tanggal.focusout(() => {
    $('small#error-ttl').css('display', 'none');    
});

bulan.focusout(() => {
    $('small#error-ttl').css('display', 'none');
});

tahun.focusout(() => {
    $('small#error-ttl').css('display', 'none');
});
// validasi form
