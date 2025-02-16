const header = `
    <!-- background body -->
    <div class="backgroundAll"></div>
    <!-- background body -->

    <div class="nav-fixed">
    
        <!-- navbar -->
        <nav class="navbar navbar-expand-lg navbar-light nav-blibuku">
            <div class="container">

                <!-- judul nav -->
                <a class="navbar-brand blibuku-brand" href="main-page.html"><i class="fas fa-book-open"></i> blibuku.com</a>
                <!-- judul nav -->

                <!-- button burger -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-header"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- button burger -->

                <!-- nav -->
                <div class="collapse navbar-collapse" id="nav-header">
                    <div class="navbar-nav ml-auto position-relative">
                        <a class="nav-item nav-link bag" href="bag-page.html"><i class="fas fa-shopping-bag"></i> Bag</a>

                        <!-- kategori -->
                        <span class="nav-item nav-link kategori" onclick="toggleOption('.opt-kategori')"><i class="fas fa-bars"></i> Kategori <span><i class="fas fa-chevron-down"></i></span></span>

                        <div class="opt-kategori">
                            <div class="arrow text-right"><span></span></div>

                            <div class="list-opt">
                                <a href="search-page.html?kategori=All">Lihat Semua Buku</a>
                                <a href="search-page.html?kategori=Indonesia">Buku Indonesia</a>
                                <a href="search-page.html?kategori=Pendidikan">Pendidikan</a>
                                <a href="search-page.html?kategori=Teknologi">Teknologi</a>
                                <a href="search-page.html?kategori=Kartun">Kartun</a>
                                <a href="search-page.html?kategori=Novel">Novel</a>
                                <a href="search-page.html?kategori=Bisnis">Bisnis</a>
                                <a href="search-page.html?kategori=Percintaan">Percintaan</a>
                            </div>
                        </div>
                        <!-- kategori -->

                        <!-- option / space user -->
                        <span class="nav-item nav-link user" onclick="toggleOption('.opt-user')"><i class="fas fa-user"></i> Hi, Default <span><i class="fas fa-chevron-down"></i></span></span>
                        
                        <div class="opt-user">
                            <div class="arrow text-right"><span></span></div>

                            <div class="list-opt">
                                <a href="profile-page.html">
                                    <div class="row">
                                        <div class="col-1">
                                            <i class="fas fa-user-circle"></i>
                                        </div>

                                        <div class="col-10">
                                            Profile
                                        </div>
                                    </div>
                                </a>

                                <a href="wishlist-page.html">
                                    <div class="row">
                                        <div class="col-1">
                                            <i class="fas fa-heart"></i>
                                        </div>

                                        <div class="col-10">
                                            Wishlist
                                        </div>
                                    </div>
                                </a>

                                <a href="perpusatakaan-page.html">
                                    <div class="row">
                                        <div class="col-1">
                                            <i class="fas fa-book"></i>
                                        </div>

                                        <div class="col-10">
                                            Perpustakaan
                                        </div>
                                    </div>
                                </a>

                                <a href="bukaToko-page.html">
                                    <div class="row">
                                        <div class="col-1">
                                            <i class="fas fa-door-open"></i>
                                        </div>

                                        <div class="col-10">
                                            Buka Toko
                                        </div>
                                    </div>
                                </a>

                                <a href="tokoSaya-page.html">
                                    <div class="row">
                                        <div class="col-1">
                                            <i class="fas fa-store"></i>
                                        </div>

                                        <div class="col-10">
                                            Toko Saya
                                        </div>
                                    </div>
                                </a>

                                <a href="pesanan-page.html">
                                    <div class="row">
                                        <div class="col-1">
                                            <i class="fas fa-envelope-open-text"></i>
                                        </div>

                                        <div class="col-10">
                                            Pesanan Masuk
                                        </div>
                                    </div>
                                </a>

                                <a href="main-page.html" onclick="logout()">
                                    <div class="row">
                                        <div class="col-1">
                                            <i class="fas fa-external-link-alt"></i>
                                        </div>

                                        <div class="col-10">
                                            Keluar
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- option / space user -->


                        <!-- option / space admin -->
                        <span class="nav-item nav-link admin" onclick="toggleOption('.opt-admin')"><i class="fas fa-user"></i> Hi, Admin <span><i class="fas fa-chevron-down"></i></span></span>
                        
                        <div class="opt-admin">
                            <div class="arrow text-right"><span></span></div>

                            <div class="list-opt">
                                <a href="adminProduct-page.html">
                                    <div class="row">
                                        <div class="col-1">
                                            <i class="fas fa-user-circle"></i>
                                        </div>

                                        <div class="col-10">
                                            Buku
                                        </div>
                                    </div>
                                </a>

                                <a href="adminUsers-page.html">
                                    <div class="row">
                                        <div class="col-1">
                                            <i class="fas fa-heart"></i>
                                        </div>

                                        <div class="col-10">
                                            Pengguna
                                        </div>
                                    </div>
                                </a>

                                <a href="adminShops-page.html">
                                    <div class="row">
                                        <div class="col-1">
                                            <i class="fas fa-book"></i>
                                        </div>

                                        <div class="col-10">
                                            Toko
                                        </div>
                                    </div>
                                </a>

                                <a href="main-page.html" onclick="logout()">
                                    <div class="row">
                                        <div class="col-1">
                                            <i class="fas fa-external-link-alt"></i>
                                        </div>

                                        <div class="col-10">
                                            Keluar
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- option / space admin -->

                        <a class="nav-item nav-link masuk" href="login-page.html">Masuk</a>
                        <a class="nav-item nav-link daftar" href="daftar-page.html">Daftar</a>

                    </div>
                </div>
                <!-- nav -->

                
                <!-- form search -->
                <div class="form">
                    <input type="text" class="search" autocomplete="off" placeholder="Cari buku Anda disini....">
                    <button class="cari-btn" onclick="searchBuku()">Cari</button>
                </div>
                <!-- form search -->

            </div>
        </nav>
        <!-- akhir navbar -->



        <!-- sub navbar -->
        <div class="sub-navbar">
            <div class="container">

                <!-- kategori buku -->
                <ul class="kategori">
                    <a href="search-page.html?kategori=All">
                        <li>Lihat Semua Buku</li>
                    </a>
                    <a href="search-page.html?kategori=Indonesia">
                        <li>Buku Indonesia</li>
                    </a>
                    <a href="search-page.html?kategori=Pendidikan">
                        <li>Pendidikan</li>
                    </a>
                    <a href="search-page.html?kategori=Teknologi">
                        <li>Teknologi</li>
                    </a>
                    <a href="search-page.html?kategori=Kartun">
                        <li>Kartun</li>
                    </a>
                    <a href="search-page.html?kategori=Novel">
                        <li>Novel</li>
                    </a>
                    <a href="search-page.html?kategori=Bisnis">
                        <li>Bisnis</li>
                    </a>
                    <a href="search-page.html?kategori=Percintaan">
                        <li>Percintaan</li>
                    </a>
                </ul>
                <!-- kategori buku -->

            </div>
        </div>
        <!-- akhir sub navbar -->

    </div>
`

$('#header').html(header);
