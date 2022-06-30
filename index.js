const Header = document.createElement("div");
Header.className = "header";
let body = document.querySelector("body");
body.appendChild(Header);
let h1 = document.createElement("h1");
h1.innerHTML = "<h1>Welcome To The Book Store</h1>";
h1.className = "h1";
Header.appendChild(h1);