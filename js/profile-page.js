

// append tanggal dan tahun lahir
function appendTTL() {
    for (let i = 1950; i <= 2020; i++) {
        $('#content .right .rbody select#tahun').append(`
            <option value="${i}">${i}</option>
        `);
    }

    for (let i = 1; i <= 31; i++) {
        if(i <= 9) {
            $('#content .right .rbody select#tanggal').append(`
                <option value="0${i}">${i}</option>
            `);
        } else {
            $('#content .right .rbody select#tanggal').append(`
                <option value="${i}">${i}</option>
            `);
        }
    }
}


// mark side tab
function borderTab() {
    $('#content .left .tab .profile-tab').addClass('is-active');
}


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();
    const optTTL = $('#content .right .rbody .ttl .opt-ttl');

    if (width < 420) {

        // manipulasi column
        if (optTTL.hasClass('col-3')) {
            optTTL.addClass('col-12');
            optTTL.removeClass('col-3');
        } else if (optTTL.hasClass('col-4')) {
            optTTL.addClass('col-12');
            optTTL.removeClass('col-4');
        }
        
    } else if (width < 753) {

        // manipulasi column
        if (optTTL.hasClass('col-3')) {
            optTTL.addClass('col-4');
            optTTL.removeClass('col-3');
        } else if (optTTL.hasClass('col-12')) {
            optTTL.addClass('col-4');
            optTTL.removeClass('col-12');
        }
        
    } else if (width >= 753) {

        // manipulasi column
        if (optTTL.hasClass('col-4')) {
            optTTL.addClass('col-3');
            optTTL.removeClass('col-4');
        } else if (optTTL.hasClass('col-12')) {
            optTTL.addClass('col-3');
            optTTL.removeClass('col-12');
        }
    }
}


// update user
function updateUser() {
    // tampilkan loading
    $('.loading').css('display', 'flex');

    let tgl = $('option:selected', tanggal).val();
    let bln = $('option:selected', bulan).val();
    let thn = $('option:selected', tahun).val();
    let gdr = $('input:radio[name=gender]:checked').val();

    let Data = {
        "userId": User.userId,
        "userEmail": email.val(),
        "userName": nama.val(),
        "userBirthdate": `${tgl}-${bln}-${thn}`,
        "userHandphone": nomor.val(),
        "userGender": gdr
    };

    let params = new FormData();
    params.append('user', JSON.stringify(Data));
    params.append('role', 2);
    params.append('status', 1);

    $.ajax({
        url: `${base_url}users/update`,
        type: 'put',
        dataType: 'json',
        processData: false, // default kirim object, form mengandung string
        contentType: false, // default x-www-form-urlencoded

        data: params,

        success: function(response) {
            // hilangkan loading
            $('.loading').css('display', 'none');

            // update localstorage dan User
            localStorage.setItem('dataUser', JSON.stringify(response.data[0]));
            User = JSON.parse(localStorage.getItem('dataUser'));

            window.location.href = `${site_url}html/profile-page.html`;
        }
    });
}


// validasi form
const form = $('#content .right .rbody .form');
const nama = $('#nama', form);
const email = $('#email', form);
const tanggal = $('#tanggal', form);
const bulan = $('#bulan', form);
const tahun = $('#tahun', form);
const nomor = $('#nomor', form);
const gender = $('input:radio[name=gender]');
const regexHP = /^08[0-9]{8,10}$/;


function validationForm() {
    let tgl = $('option:selected', tanggal).val();
    let bln = $('option:selected', bulan).val();
    let thn = $('option:selected', tahun).val();

    if (nama.val().length != 0 && regexHP.test(nomor.val()) && !(tgl == 31 && !(bln == 1 || bln == 3 || bln == 5 || bln == 7 || bln == 8 || bln == 10 || bln == 12))) {
        if (tgl > 28 && bln == 2) {
            if (tgl != 29 || thn % 4 != 0)
                $('small#error-ttl').css('display', 'block');
            else 
                updateUser();
        } else
            updateUser();
    }

    if (nama.val().length == 0)
        $('small#error-nama').css('display', 'block');

    if (!regexHP.test(nomor.val())) 
        $('small#error-nomor').css('display', 'block');

    if (tgl == 31 && !(bln == 1 || bln == 3 || bln == 5 || bln == 7 || bln == 8 || bln == 10 || bln == 12)) 
        $('small#error-ttl').css('display', 'block');

    if (tgl > 28 && bln == 2) {
        if (tgl == 29 && thn%4 == 0) {}
        else
            $('small#error-ttl').css('display', 'block');
    }
}

function keyUpNama () {
    if (nama.val().length == 0)
        $('small#error-nama', form).css('display', 'block');
    else
        $('small#error-nama', form).css('display', 'none');
}

function keyUpNomor () {
    if (regexHP.test(nomor.val()) == 0)
        $('small#error-nomor', form).css('display', 'block');
    else
        $('small#error-nomor', form).css('display', 'none');
}

tanggal.focusout(() => {
    $('small#error-ttl').css('display', 'none');       
});

bulan.focusout(() => {
    $('small#error-ttl').css('display', 'none');
});

tahun.focusout(() => {
    $('small#error-ttl').css('display', 'none');
});


// get user detail
function getUserDetail(response) {
    let ttl = response.userBirthdate.split('-');

    // set value profile
    nama.val(response.userName);
    email.val(response.userEmail);
    tanggal.val(ttl[0]);
    bulan.val(ttl[1]);
    tahun.val(ttl[2]);
    nomor.val(response.userPhone);
    gender.val([response.userGender]);;
}


// document ready
$(document).ready(() => {

    appendTTL();
    borderTab();
    responsiveSize();

    if (checkSesi()) 
        getUserDetail(User);
    else 
        window.location.href = `${site_url}html/login-page.html`;
});

$(window).resize(responsiveSize);