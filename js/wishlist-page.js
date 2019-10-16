
$(window).ready(DOM_Manipulation);
$(window).resize(responsiveSize);


// saat window ready
function DOM_Manipulation() {
    borderTab();
}
// saat window ready


// responsive - resize window
function responsiveSize() {
    
}
// responsive - resize window


// mark tab
function borderTab() {
    $('#content .left .tab .wishlist-tab').addClass('is-active');
}
// mark tab
