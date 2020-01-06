

// mark side tab
function borderTab() {
    $('#content .left .tab .perpustakaan-tab').addClass('is-active');
}


// document ready
$(document).ready(() => {
    let id = window.location.search.substring(1);

    $('#obj-pdf').css('height', $(window).height());
    $('#obj-pdf').css('width', $(window).width());
    $('#obj-pdf').attr('src', `http://docs.google.com/gview?url=https://yafaifoods.tech/buku/pdf/${id}.pdf&embedded=true`);
    
    borderTab();
});