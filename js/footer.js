

// responsive - resize window
function responsiveSize() {
    let width = $(window).width();  
    const colFooter = $('#footer .row');

    if (width < 465) {
        
        // manipulasi column
        if (colFooter.find('.col-3')) {
            $('.col-3', colFooter).addClass('col-sm-6');
            $('.col-3', colFooter).removeClass('col-3');
        }

        if (colFooter.find('.col-6')) {
            $('.col-6', colFooter).addClass('col-sm-6');
            $('.col-6', colFooter).removeClass('col-6');
        }

    } else if (width < 977) {

        // manipulasi column
        if(colFooter.find('.col-3')) {
            $('.col-3', colFooter).addClass('col-6');
            $('.col-3', colFooter).removeClass('col-3');
        }

        if (colFooter.find('.col-sm-6')) {
            $('.col-sm-6', colFooter).addClass('col-6');
            $('.col-sm-6', colFooter).removeClass('col-sm-6');
        }

    }  else if (width > 977) {

        // manipulasi column
        if (colFooter.find('.col-6')) {
            $('.col-6', colFooter).addClass('col-3');
            $('.col-6', colFooter).removeClass('col-6');
        }

        if (colFooter.find('.col-sm-6')) {
            $('.col-sm-6', colFooter).addClass('col-3');
            $('.col-sm-6', colFooter).removeClass('col-sm-6');
        }

    }

}


// ready execute
responsiveSize();
$(window).resize(responsiveSize);