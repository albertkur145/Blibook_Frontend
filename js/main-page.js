
// bestsellers slider

let xOffsetBestsellers = 0;
let statsBestsellers = 0;

$('#bestsellers .slider-container-bestsellers .kanan').on('click', () => {
    if ((window.innerWidth >= 992 && xOffsetBestsellers >= 1113) || (window.innerWidth <= 576 && xOffsetBestsellers >= 1446)) {
        statsBestsellers = 1;
    }


    if (window.innerWidth >= 992) {
        if (statsBestsellers == 0) 
            xOffsetBestsellers += 371;
        else {
            xOffsetBestsellers = 0;
            statsBestsellers = 0;
        }
    }
    else if (window.innerWidth <= 576) {
        if (statsBestsellers == 0) 
            xOffsetBestsellers+=482;
        else {
            xOffsetBestsellers = 0;
            statsBestsellers = 0;
        }
    }

    console.log(xOffsetBestsellers);
    $('.slider-container-bestsellers .slides-items-bestsellers').css('marginLeft', '-' + xOffsetBestsellers + 'px');
})


$('#bestsellers .slider-container-bestsellers .kiri').on('click', () => {
    if (xOffsetBestsellers == 0) {
        statsBestsellers = 1;
    }


    if (window.innerWidth >= 992) {
        if (statsBestsellers == 0)
            xOffsetBestsellers -= 371;
        else {
            xOffsetBestsellers = 1113;
            statsBestsellers = 0;
        }
    }
    else if (window.innerWidth <= 576) {
        if (statsBestsellers == 0)
            xOffsetBestsellers -= 477;
        else {
            xOffsetBestsellers = 1446;
            statsBestsellers = 0;
        }
    }

    console.log(xOffsetBestsellers);
    $('.slider-container-bestsellers .slides-items-bestsellers').css('marginLeft', '-' + xOffsetBestsellers + 'px');
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