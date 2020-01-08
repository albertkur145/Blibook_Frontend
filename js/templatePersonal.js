let personal = `
    <!-- head -->
    <div class="head">
        <h2 class="nama-user">Albert Kurniawan</h2>
        <p class="as">Signature Member</p>
    </div>
    <!-- head -->

    <!-- tab -->
    <div class="tab">
        <a href="profile-page.html"><p class="profile-tab">Profile</p></a>
        <a href="wishlist-page.html"><p class="wishlist-tab ">Wishlist</p></a>
        <a href="perpusatakaan-page.html"><p class="perpustakaan-tab">Perpustakaan</p></a>
        <a href="bukaToko-page.html"><p class="buka-toko-tab">Buka Toko</p> </a>
        <a href="tokoSaya-page.html"><p class="toko-saya-tab">Toko Saya</p></a>
        <a href="pesanan-page.html"><p class="pesanan-tab">Pesanan Masuk</p></a>
        <a href="main-page.html" onclick="logout()"><p class="keluar-tab">Keluar</p></a>
    </div>
    <!-- tab -->
`;

$('#content .left').html(personal);