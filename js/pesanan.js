

// mark side tab
function borderTab() {
    $('#content .left .tab .pesanan-tab').addClass('is-active');
}


// responsive - resize window
function responsiveSize() {
    let width = $(window).width();

}

// document ready
$(document).ready(() => {
    borderTab();
});
