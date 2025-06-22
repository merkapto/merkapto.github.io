"use strict";
const NAV = `
<style>body{font-family:monospace}</style>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
        <div class="container">
            <a class="navbar-brand" href="/">/GellanBori</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL"
                aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample07XL">
                <ul class="navbar-nav nav-fill me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                            aria-expanded="false">Matematik</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/pages/math/egim-hesapla.html">Eğim Hesapla</a></li>
                            <li><a class="dropdown-item" href="#">Açı Bul</a></li>
                            <li><a class="dropdown-item" href="#">Alan Hesapla</a></li>
                            <li><a class="dropdown-item btn-outline-success" href="/pages/math/kelime-say.html">Kelime Say</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                            aria-expanded="false">Pdf</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Pdf Düzenle</a></li>
                            <li><a class="dropdown-item" href="#">Pdf Çevir</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                            aria-expanded="false">KareKod</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Web sayfa</a></li>
                            <li><a class="dropdown-item" href="#">İlaç</a></li>
                            <li><a class="dropdown-item" href="#">Oluştur</a></li>
                        </ul>
                    </li>
                </ul>
                <form role="search">
                    <input class="form-control" type="search" placeholder="Ara" aria-label="Search" />
                </form>
            </div>
        </div>
    </nav>`;

function setNavbar() {
  let nav = document.createElement("nav");
  nav.innerHTML = NAV;
  document.body.append(nav);
  nav.querySelectorAll("li").forEach((li) => {
    let div = li.firstElementChild;
    li.onmouseenter = () => {
      div.style.display = "block";
      let w = div.offsetWidth - li.offsetWidth;
      let x = li.offsetLeft - w / 2;
      let m = nav.offsetWidth - div.offsetWidth;
      div.style.left = Math.min(Math.max(0, x), m) + "px";
    };
    li.onmouseleave = () => {
      div.style.display = "";
    };
  });
}
setNavbar();
