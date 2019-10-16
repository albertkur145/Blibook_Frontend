
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


    if (width < 420) {

        if ($('#content .right .rbody .ttl .opt-ttl').hasClass('col-3')) {
            $('#content .right .rbody .ttl .opt-ttl').addClass('col-12');
            $('#content .right .rbody .ttl .opt-ttl').removeClass('col-3');
        }

        else if ($('#content .right .rbody .ttl .opt-ttl').hasClass('col-4')) {
            $('#content .right .rbody .ttl .opt-ttl').addClass('col-12');
            $('#content .right .rbody .ttl .opt-ttl').removeClass('col-4');
        }
        
    }

    else if (width < 753) {

        if ($('#content .right .rbody .ttl .opt-ttl').hasClass('col-3')) {
            $('#content .right .rbody .ttl .opt-ttl').addClass('col-4');
            $('#content .right .rbody .ttl .opt-ttl').removeClass('col-3');
        }

        else if ($('#content .right .rbody .ttl .opt-ttl').hasClass('col-12')) {
            $('#content .right .rbody .ttl .opt-ttl').addClass('col-4');
            $('#content .right .rbody .ttl .opt-ttl').removeClass('col-12');
        }
        
    } else if (width >= 753) {

        if ($('#content .right .rbody .ttl .opt-ttl').hasClass('col-4')) {
            $('#content .right .rbody .ttl .opt-ttl').addClass('col-3');
            $('#content .right .rbody .ttl .opt-ttl').removeClass('col-4');
        }

        else if ($('#content .right .rbody .ttl .opt-ttl').hasClass('col-4')) {
            $('#content .right .rbody .ttl .opt-ttl').addClass('col-3');
            $('#content .right .rbody .ttl .opt-ttl').removeClass('col-4');
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


function validationForm() {
    if (nama.val().length == 0) {
        $('small#error-nama').css('display', 'block');
        return false;
    }

    if (email.val().length == 0) {
        $('small#error-email').css('display', 'block');
        return false;
    }

    if (nomor.val().length == 0) {
        $('small#error-nomor').css('display', 'block');
        return false;
    }

    let tgl = $('option:selected', tanggal).val();
    let bln = $('option:selected', bulan).val();

    if (tgl == 31 && !(bln == 1 || bln == 3 || bln == 5 || bln == 7 || bln == 8 || bln == 10 || bln == 12)) {
        $('small#error-ttl').css('display', 'block');
        return false;
    }

    if (tgl > 28 && bln == 2) {
        $('small#error-ttl').css('display', 'block');
        return false;
    }
}

nama.focusout(() => {
    nama.val().length == 0 ? $('small#error-nama', form).css('display', 'block') : $('small#error-nama', form).css('display', 'none');
    email.val().length == 0 ? $('small#error-email', form).css('display', 'block') : $('small#error-email', form).css('display', 'none');
    nomor.val().length == 0 ? $('small#error-nomor', form).css('display', 'block') : $('small#error-nomor', form).css('display', 'none');
});

email.focusout(() => {
    nama.val().length == 0 ? $('small#error-nama', form).css('display', 'block') : $('small#error-nama', form).css('display', 'none');
    email.val().length == 0 ? $('small#error-email', form).css('display', 'block') : $('small#error-email', form).css('display', 'none');
    nomor.val().length == 0 ? $('small#error-nomor', form).css('display', 'block') : $('small#error-nomor', form).css('display', 'none');
});

nomor.focusout(() => {
    nama.val().length == 0 ? $('small#error-nama', form).css('display', 'block') : $('small#error-nama', form).css('display', 'none');
    email.val().length == 0 ? $('small#error-email', form).css('display', 'block') : $('small#error-email', form).css('display', 'none');
    nomor.val().length == 0 ? $('small#error-nomor', form).css('display', 'block') : $('small#error-nomor', form).css('display', 'none');
});
// validasi form
