
$(window).ready(responsiveSize);
$(window).resize(responsiveSize);


function responsiveSize() {
    let width = $(window).width();
    $('.angka').html(width);
    

    if (width < 753) {
        $('#content .left').addClass('col-4');
        $('#content .left').removeClass('col-3');

        $('#content .right').addClass('col-8');
        $('#content .right').removeClass('col-9');
    } else if (width >= 753) {
        $('#content .left').addClass('col-3');
        $('#content .left').removeClass('col-4');

        $('#content .right').addClass('col-9');
        $('#content .right').removeClass('col-8');
    }
}


