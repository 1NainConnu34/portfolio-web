<template>
    <header class="banner" id="mainHeader" role="banner">
        <nav role="navigation">
            <div class="top-header">
                <div class="navBurger">
                    <div class="burger"></div>
                </div>
            </div>
            <ul id="menu-vertical-menu" class="nav">
                <li><a href="">Home</a></li>
                <li><a href="projects">Projects</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <h1>
        Alexandre bret
    </h1>
    <h3 class="reveal-text">
        Etudiant 1ère année
    </h3>
    <h3 class="reveal-text">
        Epitech Montpellier
    </h3>
    <div class="frame">
        <h2>Découvrez mes projets</h2>
        <button class="custom-btn btn-5" onclick="window.location.href = 'projects'"><span>Découvrir</span></button>
    </div>
    <div>
        <img class="image_1" src="~/assets/python.png" alt="" />
        <h4 class="text_1">1 an d'expérience</h4>
        <img class="image_2" src="~/assets/c.png" alt="" />
        <h4 class="text_2">2 mois d'expérience</h4>
    </div>
</template>




<style scoped>
@import 'https://fonts.googleapis.com/css?family=Montserrat';


h1 {
    color: black;
    position: absolute;
    right: 20px;
    text-transform: uppercase;
    text-align: right;
    font-size: 50px;
    font-weight: 700;
}

.image_1 {
    display: flex;
    margin-top: 100px;
    margin-left: 400px;
    width: 150px;
    height: 150px;
}

.text_1 {
    display: flex;
    margin-top: 30px;
    margin-left: 400px;
}

.image_2 {
    display: flex;
    margin-top: -200px;
    margin-left: 1400px;
    width: 150px;
    height: 150px;
}

.text_2 {
    display: flex;
    margin-top: 30px;
    margin-left: 1400px;
}

.frame {
    width: 90%;
    margin: 40px auto;
    text-align: center;
}

.frame h2 {
    position: relative;
    text-align: center;
    color: #353535;
    font-size: 50px;
    font-family: "Cormorant Garamond", serif;
    padding-top: 100px;
}

button {
    margin: 20px;
}

.custom-btn {
    width: 130px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
    outline: none;
}

.btn-5 {
    width: 130px;
    height: 40px;
    line-height: 42px;
    padding: 0;
    border: none;
    background: rgb(255, 27, 0);
    background: linear-gradient(0deg, rgba(255, 27, 0, 1) 0%, rgba(251, 75, 2, 1) 100%);
}

.btn-5 a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
}

.btn-5:hover {
    color: #f0094a;
    background: transparent;
    box-shadow: none;
}

.btn-5:before,
.btn-5:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #f0094a;
    box-shadow:
        -1px -1px 5px 0px #fff,
        7px 7px 20px 0px #0003,
        4px 4px 5px 0px #0002;
    transition: 400ms ease all;
}

.btn-5:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
}

.btn-5:hover:before,
.btn-5:hover:after {
    width: 100%;
    transition: 800ms ease all;
}

h3 {
    margin-left: 235px;
}

.reveal-text,
.reveal-text {
    margin-top: 0px;
    position: relative;
    font-size: 40px;
    user-select: none;
    color: #000;
    white-space: nowrap;
    font-family: "Work Sans", sans-serif;
}

header#mainHeader {
    width: 60px;
    height: 100%;
    left: 0;
    -webkit-transition: left 0.5s ease-in-out 0.2s;
    transition: left 0.5s ease-in-out 0.2s;
    position: fixed;
    display: inline-block;
    background-color: #3a4151;
    z-index: 1000;
}

header#mainHeader nav {
    height: 100%;
    width: 60px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    /*
  	position:absolute;
  	left:0;
  */
    /* L'element */
}

header#mainHeader nav .top-header {
    background-color: #3a4151;
    position: relative;
}

header#mainHeader nav:after {
    content: ' ';
    background-color: #3a4151;
    width: 60px;
    height: 100%;
    position: absolute;
    left: 0px;
}

header#mainHeader nav:before {
    content: ' ';
    height: 100%;
    width: 0px;
    background-color: #424a5c;
    position: absolute;
    left: 60px;
    -webkit-transition: width 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    transition: width 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

header#mainHeader nav .navBurger {
    cursor: pointer;
    width: 100%;
    height: 45px;
}

header#mainHeader nav .navBurger .burger {
    margin-left: 18px;
    margin-top: 30px;
    cursor: pointer;
    /* pour créer le hamburger, on décale les deux
   * barres de 8px
   */
}

header#mainHeader nav .navBurger .burger,
header#mainHeader nav .navBurger .burger::before,
header#mainHeader nav .navBurger .burger::after {
    border-radius: 2px;
    position: absolute;
    z-index: 100;
    width: 24px;
    height: 4px;
    background: white;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}

header#mainHeader nav .navBurger .burger::before,
header#mainHeader nav .navBurger .burger::after {
    content: "";
    display: block;
}

header#mainHeader nav .navBurger .burger::before {
    margin-top: -8px;
}

header#mainHeader nav .navBurger .burger::after {
    margin-top: 8px;
}

header#mainHeader nav ul {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    margin-top: calc(50vh - 160px);
}

header#mainHeader nav ul li {
    font-size: 14px;
    width: 60px;
    height: 40px;
    cursor: pointer;
    position: relative;
    display: block;
}

header#mainHeader nav ul li a {
    display: block;
    width: 150px;
    color: white;
    position: relative;
    z-index: 0;
    opacity: 0;
    left: -80px;
    text-transform: uppercase;
    -webkit-transition: left 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045), opacity 0.15s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    transition: left 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045), opacity 0.15s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    color: #fff;
    text-decoration: none;
}

header#mainHeader nav ul li:before {
    z-index: 10;
    content: ' ';
    width: 8px;
    height: 8px;
    background-color: transparent;
    position: absolute;
    left: 26px;
    top: 3px;
    border-radius: 50%;
    border: 2px solid white;
    -webkit-transform: scale(1) translate3d(0, 0, 0);
    transform: scale(1) translate3d(0, 0, 0);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

header#mainHeader nav ul li a:hover,
header#mainHeader nav ul li a:active,
header#mainHeader nav ul li a:visited,
header#mainHeader nav ul li a:focus {
    background-color: transparent !important;
    color: white;
}

header#mainHeader nav ul li:hover:before {
    background-color: white;
}

header#mainHeader nav ul li.active:before,
header#mainHeader nav ul li:hover:before {
    -webkit-transform: scale(1.5) translate3d(0, 0, 0);
    transform: scale(1.5) translate3d(0, 0, 0);
    background-color: white;
}

header#mainHeader nav:hover:before {
    width: 160px;
    -webkit-transition: width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

header#mainHeader nav:hover .burger {
    /* 		background:transparent; */
    -webkit-transform: rotate(45deg) translate3d(0, 0, 0);
    transform: rotate(45deg) translate3d(0, 0, 0);
}

header#mainHeader nav:hover .burger::before {
    margin-top: 0px;
    -webkit-transform: rotate(-90deg) translate3d(0, 0, 0);
    transform: rotate(-90deg) translate3d(0, 0, 0);
}

header#mainHeader nav:hover .burger::after {
    margin-top: 0px;
    -webkit-transform: rotate(0deg) translate3d(0, 0, 0);
    transform: rotate(0deg) translate3d(0, 0, 0);
}

header#mainHeader nav:hover li a {
    left: 70px;
    opacity: 1;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    -webkit-transition-property: left, opacity;
    transition-property: left, opacity;
    -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

header#mainHeader nav:hover li:nth-child(1) a {
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
}

header#mainHeader nav:hover li:nth-child(2) a {
    -webkit-transition-delay: 0.34s;
    transition-delay: 0.34s;
}

header#mainHeader nav:hover li:nth-child(3) a {
    -webkit-transition-delay: 0.38s;
    transition-delay: 0.38s;
}

header#mainHeader nav:hover li:nth-child(4) a {
    -webkit-transition-delay: 0.42s;
    transition-delay: 0.42s;
}

header#mainHeader nav:hover li:nth-child(5) a {
    -webkit-transition-delay: 0.46s;
    transition-delay: 0.46s;
}

header#mainHeader nav:hover li:nth-child(6) a {
    -webkit-transition-delay: 0.50s;
    transition-delay: 0.50s;
}

header#mainHeader nav:hover li:nth-child(7) a {
    -webkit-transition-delay: 0.54s;
    transition-delay: 0.54s;
}

header#mainHeader nav:hover li:nth-child(8) a {
    -webkit-transition-delay: 0.58s;
    transition-delay: 0.58s;
}
</style>