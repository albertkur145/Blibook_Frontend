

// batasan length string nama
function constraintNama() {
    const optUser = $('.nav-blibuku .option-user');
    let namaUser = optUser.text();

    if (namaUser.length > 13) 
        namaUser = " " + namaUser.substring(0, 13) + "... ";

    optUser.html(`
        <i class = "fas fa-user"></i>`+ namaUser +`
        <span><i class="fas fa-chevron-down"></i></span>
    `);
}


// document ready
constraintNama();


