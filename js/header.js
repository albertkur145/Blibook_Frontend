// ketika dropdown di hover

$('.sub-navbar .dropdown').hover(() => {
    $('.sub-kategori').css('display', 'block');
    // $('.backgroundAll').css('backgroundColor', 'rgba(0, 0, 0, 0.3)');
}, () => {
    $('.sub-kategori').css('display', 'none');
    $('.backgroundAll').css('backgroundColor', '#F2F2F2');
});



// ketika sub kategori di hover

$('.sub-kategori').hover(() => {
    $('.sub-kategori').css('display', 'block');
    // $('.backgroundAll').css('backgroundColor', 'rgba(0, 0, 0, 0.3)');
}, () => {
    $('.sub-kategori').css('display', 'none');
    $('.backgroundAll').css('backgroundColor', '#F2F2F2');
});