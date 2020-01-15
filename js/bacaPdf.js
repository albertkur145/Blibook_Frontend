

// mark side tab
function borderTab() {
    $('#content .left .tab .perpustakaan-tab').addClass('is-active');
}


// set keperluan baca buku
function setBuku() {
    let id = window.location.search.substring(1);

    $('#obj-pdf').css('height', $(window).height());
    $('#obj-pdf').css('width', $(window).width());
    $('#obj-pdf').attr('data', `http://192.168.43.138:8010/Project/blibook.backend/src/main/resources/uploads/productItem/${id}.pdf?#toolbar=0`);

    $('#mobile-pdf').attr('href', `http://192.168.43.138:8010/Project/blibook.backend/src/main/resources/uploads/productItem/${id}.pdf`);
}


// document ready
$(document).ready(() => {

    if (checkSesi())
        setBuku();
    else
        window.location.href = `${site_url}html/login-page.html`;
    
    borderTab();
});