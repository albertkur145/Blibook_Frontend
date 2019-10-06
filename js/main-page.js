
function hitungWidth() {
    let width = $(window).width();
    $('.angka').html(width);
}


$(window).ready(hitungWidth);
$(window).resize(hitungWidth);






// bestsellers slider

let xOffsetEducation = 0;
let statsEducation = 0;

$('#education .slider-container-education .kanan').on('click', () => {
    if ((window.innerWidth >= 992 && xOffsetEducation >= 1113) || (window.innerWidth <= 576 && xOffsetEducation >= 1446)) {
        statsEducation = 1;
    }


    if (window.innerWidth >= 992) {
        if (statsEducation == 0) 
            xOffsetEducation += 371;
        else {
            xOffsetEducation = 0;
            statsEducation = 0;
        }
    }
    else if (window.innerWidth <= 576) {
        if (statsEducation == 0) 
            xOffsetEducation+=482;
        else {
            xOffsetEducation = 0;
            statsEducation = 0;
        }
    }

    console.log(xOffsetEducation);
    $('.slider-container-education .slides-items-education').css('marginLeft', '-' + xOffsetEducation + 'px');
})


$('#education .slider-container-education .kiri').on('click', () => {
    if (xOffsetEducation == 0) {
        statsEducation = 1;
    }


    if (window.innerWidth >= 992) {
        if (statsEducation == 0)
            xOffsetEducation -= 371;
        else {
            xOffsetEducation = 1113;
            statsEducation = 0;
        }
    }
    else if (window.innerWidth <= 576) {
        if (statsEducation == 0)
            xOffsetEducation -= 477;
        else {
            xOffsetEducation = 1446;
            statsEducation = 0;
        }
    }

    console.log(xOffsetEducation);
    $('.slider-container-education .slides-items-education').css('marginLeft', '-' + xOffsetEducation + 'px');
});




// indonesian book slider

let xOffsetIndobook = 0;
let statsIndobook = 0;

$('#indonesian-book .slider-container-indobook .kanan').on('click', () => {
    if ((window.innerWidth >= 992 && xOffsetIndobook >= 1113) || (window.innerWidth <= 576 && xOffsetIndobook >= 1446)) {
        statsIndobook = 1;
    }


    if (window.innerWidth >= 992) {
        if (statsIndobook == 0)
            xOffsetIndobook += 371;
        else {
            xOffsetIndobook = 0;
            statsIndobook = 0;
        }
    }
    else if (window.innerWidth <= 576) {
        if (statsIndobook == 0)
            xOffsetIndobook += 482;
        else {
            xOffsetIndobook = 0;
            statsIndobook = 0;
        }
    }

    console.log(xOffsetIndobook);
    $('.slider-container-indobook .slides-items-indobook').css('marginLeft', '-' + xOffsetIndobook + 'px');
})


$('#indonesian-book .slider-container-indobook .kiri').on('click', () => {
    if (xOffsetIndobook == 0) {
        statsIndobook = 1;
    }


    if (window.innerWidth >= 992) {
        if (statsIndobook == 0)
            xOffsetIndobook -= 371;
        else {
            xOffsetIndobook = 1113;
            statsIndobook = 0;
        }
    }
    else if (window.innerWidth <= 576) {
        if (statsIndobook == 0)
            xOffsetIndobook -= 477;
        else {
            xOffsetIndobook = 1446;
            statsIndobook = 0;
        }
    }

    console.log(xOffsetIndobook);
    $('.slider-container-indobook .slides-items-indobook').css('marginLeft', '-' + xOffsetIndobook + 'px');
});