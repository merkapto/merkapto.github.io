"use strict";
const NAV = 
`<link href="/static/navbar.css" rel="stylesheet">
<style>
    nav a {background: wheat}
</style> 
<ul>
    <li class=math>Matematik
      <div class=nav_menu>
        <a href="/pages/math/egim-hesapla.html">Eğim Hesapla</a>
        <a href="/pages/math/aci-bul.html">Açı Bul</a>
        <a href="/pages/math/alan-hesapla.html">Alan Hesapla</a>
        <a href="/pages/math/kelime-say.html">Kelime Say</a>
      </div>
    </li>
    <li class=pdf>PDF
      <div class=nav_menu>
        <a href="/JS/math/Counting.html">Counting</a>
        <a href="/JS/math/Math%20functions.html">Math Functions</a>
        <a href="/JS/math/Numbers.html">Numbers</a>
        <a href="/JS/math/Base%20Conversion.html">Base Conversion</a>
        <a href="/JS/math/Primes.html">Primes</a>
        <a href="/JS/math/TCKimlik.html">TC Kimlik</a>
        <a href="/JS/math/Folding.html">Pythagorean Triples</a>
        <a href="/JS/canvas/Graphics.html">Graphics</a>
        <a href="/JS/canvas/Pie%20Chart.html">Pie Chart</a>
        <a href="/JS/canvas/webcam.html">Camera</a>
        <a href="/JS/canvas/colliding.html">Colliding balls</a>
        <a href="/JS/canvas/sunflower.html">Sunflower</a>
        <a href="/JS/canvas/solar_system.html">Solar System</a>
      </div>
    </li>
    <li class=karekod>Karekod
      <div class=nav_menu>
        <a href="/JS/hard/JS%20page.html">Page made by JS</a>
        <a href="/JS/hard/Table%20maker.html">Table Maker</a>
        <a href="/JS/hard/Select%20file.html">Select Local</a>
        <a href="/JS/api/directory.html">Select directory</a>
        <a href="/JS/hard/Fetch%20remote.html">Fetch Remote</a>
        <a href="/JS/data/Students.html">Student Database</a>
        <a href="/JS/hard/ObjectList.html">List of Objects</a>
        <a href="/JS/linear/Equation.html">Linear Equations</a>
        <a href="/JS/auto/Auto.html">Automata</a>
        <a href="/JS/auto/Expression.html">Expression tree</a>
        <a href="/JS/hard/JSON_Hilite.html">JSON Highlight</a>
        <a href="/JS/hard/Philosophers.html">Dining Philosophers</a>
        <a href="/JS/sss/inspector.html">Inspector</a>
      </div>
    </li>
    <li class=diger>Diğer
      <div class=nav_menu>
        <a href="/JS/api/qrcode.html">QR Code</a>
        <a href="/JS/api/GitHub_Users.html">GitHub Users</a>
        <a href="/JS/api/Location.html">Location</a>
        <a href="/JS/api/Weather.html">OpenWeather</a>
        <a href="/JS/canvas/googlemaps.html">Maps 1</a>
        <a href="/JS/canvas/mapboxgl.html">Maps 2</a>
        <a href="/JS/canvas/ibb_map.html">Maps 3</a>
        <a href="/JS/api/YouTube.html">YouTube play list</a>
        <a href="/JS/api/YT_teacher.html">YouTube teacher</a>
        <a href="/JS/api/Drive_API.html">Google Drive</a>
        <a href="/JS/api/Drive_teacher.html">Drive teacher</a>
      </div>
    </li>
</ul>`

function setNavbar() {
  let nav = document.createElement('nav')
  nav.innerHTML = NAV
  document.body.append(nav)
  nav.querySelectorAll("li").forEach(li => {
    let div = li.firstElementChild
    li.onmouseenter = () => {
      div.style.display = 'block'
      let w = div.offsetWidth - li.offsetWidth
      let x = li.offsetLeft - w/2
      let m = nav.offsetWidth - div.offsetWidth
      div.style.left = Math.min(Math.max(0, x), m)+'px'
    }
    li.onmouseleave = () => { div.style.display = '' }
  })
}
setNavbar()