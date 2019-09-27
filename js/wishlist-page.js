

function resizeColumnWishlist() {
    let width = $(window).width();

    if(width <= 980) {
        $('.img-wish').removeClass('col-lg-2');
        $('.img-wish').addClass('col-5');

        $('.desk-wish').removeClass('col-lg-5');
        $('.desk-wish').addClass('col-7');
        
    } else {
        $('.img-wish').removeClass('col-5');
        $('.img-wish').addClass('col-lg-2');

        $('.desk-wish').removeClass('col-7');
        $('.desk-wish').addClass('col-lg-5');
    }
}

$(window).ready(resizeColumnWishlist);
$(window).resize(resizeColumnWishlist);