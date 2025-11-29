//Typed animation
var typed = new Typed("#typed",{
    strings: ["Développeur Web Full-Stack","Développeur de bases de données","UI/UX Designer"],
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 3000,
    showCurser: false,
    Loop: true
});

//Theme
function theme() {
    const darkBtn = document.getElementById('darkBtn');
    const lightBtn = document.getElementById('lightBtn');

    document.body.classList.toggle('light');

        if (document.body.classList.contains('light')) {
            darkBtn.style.display = 'block';
            lightBtn.style.display = 'none';
        }else{
            darkBtn.style.display = 'none';
            lightBtn.style.display = 'block'; 
        }
}

//Scroll reveal
const menuItems = document.querySelectorAll('.nav-item');
menuItems.forEach(item=> {
    item.addEventListener('click', () => {
        menuItems.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    });
});