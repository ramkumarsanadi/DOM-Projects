// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navbtn = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navbtn.addEventListener("click", ()=> {
    links.classList.toggle("show-links")
    console.log("jngkjr");
})