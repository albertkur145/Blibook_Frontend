
$(window).ready(DOM_Manipulation);


// saat window ready
function DOM_Manipulation() {
    appendTTL();
    borderTab();
}
// saat window ready


// append tanggal dan tahun lahir
function appendTTL() {
    for (let i = 1950; i <= 2019; i++) {
        $('#content .right .rbody select#tahun').append(`
            <option value="`+ i +`">`+ i +`</option>
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
const tanggal = $('#tanggal option:selected', form).text();
const bulan = $('#bulan option:selected', form).text();
const tahun = $('#tahun :selected', form).text();
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
    alert(tanggal);

    return false;
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
})

nomor.focusout(() => {
    nama.val().length == 0 ? $('small#error-nama', form).css('display', 'block') : $('small#error-nama', form).css('display', 'none');
    email.val().length == 0 ? $('small#error-email', form).css('display', 'block') : $('small#error-email', form).css('display', 'none');
    nomor.val().length == 0 ? $('small#error-nomor', form).css('display', 'block') : $('small#error-nomor', form).css('display', 'none');
})
// validasi form
