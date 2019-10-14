
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
function validationForm() {
    const form = $('#content .right .rbody form');
    const nama = $('#nama', form).val();
    const email = $('#email', form).val();
    const tanggal = $('#tanggal :selected', form).text();
    const bulan = $('#bulan :selected', form).text();
    const tahun = $('#tahun :selected', form).text();
    const nomor = $('#nomor', form).val();
}
// validasi form
