

// mark side tab
function borderTab() {
    $('#content .left .tab .perpustakaan-tab').addClass('is-active');
}


// document ready
$(document).ready(() => {
    $('#obj-pdf').css('height', $(window).height());
    $('#obj-pdf').css('width', $(window).width());
    
    borderTab();
});