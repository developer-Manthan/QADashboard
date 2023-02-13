const myRequest = new Request('dashboard.json');

const navItems = document.querySelectorAll('.nav-item');
const courseHeaderItems = document.querySelectorAll('.course-header-item');
const showing = document.querySelector('.showing');
const cardLine1 = document.querySelectorAll('.card-content .line-1');
const cardLine3 = document.querySelectorAll('.card-content .line-3');
const cardLine5 = document.querySelectorAll('.card-content .line-5');
const subjects = document.querySelectorAll('#subject');
const grades = document.querySelectorAll('#grade');
const aboutUs = document.querySelector('.about-us');
const footerText = document.querySelector('#footer-text');
const cardImages = document.querySelectorAll('.card-img img');

fetch(myRequest)
.then((response) => {
    return response.json();
})
.then((data) => {
    //
    for(let i = 0; i<5; i++) {
        navItems[i].innerHTML = data.nav_item[i];
    }

    //
    for(let i = 0; i < 2; i++) {
        var aTag = document.createElement('a');
        aTag.setAttribute('href',"#");
        aTag.innerText = data.course_header_item[i];
        // let inText = document.createTextNode(data.course_header_item[i]);
        courseHeaderItems[i].appendChild(aTag);
    }

    //
    showing.innerHTML = data.showing;

    //
    for(let [i, element] of cardLine1.entries()) {
        element.innerHTML = data.cards[i].line_1;
    }

    for(let [i, element] of cardLine3.entries()) {
        element.innerHTML = data.cards[i].line_3;
    }

    for(let [i, element] of cardLine5.entries()) {
        element.innerHTML = data.cards[i].line_5;
    }

    for(let [i, element] of subjects.entries()) {
        element.innerHTML = data.cards[i].subject;
    }

    for(let [i, element] of grades.entries()) {
        element.innerHTML = data.cards[i].grade;
    }

    //
    for(let [i, element] of cardImages.entries()) {
        cardImages[i].src = data.cards[i].image;
    }

    //
    aboutUs.innerHTML = data.about_us;

    //
    footerText.innerHTML = data.footer_text;
})