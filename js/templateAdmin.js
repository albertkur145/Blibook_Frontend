let adminSpace = `
    <!-- head -->
    <div class="head">
        <h2 class="nama-user">admin</h2>
        <p class="as">Signature Member</p>
    </div>
    <!-- head -->

    <!-- tab -->
    <div class="tab">
        <a href="adminProduct-page.html"><p class="products-tab">Buku</p></a>
        <a href="adminUsers-page.html"><p class="users-tab ">Pengguna</p></a>
        <a href="adminShops-page.html"><p class="shops-tab">Toko</p></a>
        <a href="main-page.html" onclick="logout()"><p class="keluar-tab">Keluar</p></a>
    </div>
    <!-- tab -->
`;

$('#content .left').html(adminSpace);