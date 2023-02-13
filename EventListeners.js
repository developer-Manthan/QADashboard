const hamButton = document.getElementById('ham-button');
const dropdownContent = document.getElementById('dropdown-id');

//
const subDropdownContent1 = document.getElementById('sub-dropdown-id-1');
const subButton1 = document.getElementById('sub-button-1');

const subDropdownContent2 = document.getElementById('sub-dropdown-id-2');
const subButton2 = document.getElementById('sub-button-2');

const subDropdownContent3 = document.getElementById('sub-dropdown-id-3');
const subButton3 = document.getElementById('sub-button-3');

const toggleClass = "sub-dropdown-content-show";

//
const bellButton = document.getElementById('bell-icon-button');

const bellId = document.getElementById('bell-id');
const alertContentId = document.getElementById('alert-content-id');
const alertClass = document.getElementsByClassName('alert-class');

//
hamButton.addEventListener("click", function() {
    dropdownContent.classList.toggle("dropdown-content-show");
});

subButton1.addEventListener("click", function() {
    
    subDropdownContent1.classList.toggle(toggleClass);

    if(subDropdownContent2.classList.contains(toggleClass)) {
        subDropdownContent2.classList.toggle(toggleClass);
    } else if(subDropdownContent3.classList.contains(toggleClass)) {
        subDropdownContent3.classList.toggle(toggleClass);
    }

    
});

subButton2.addEventListener("click", function() {

    if(subDropdownContent1.classList.contains(toggleClass)) {
        subDropdownContent1.classList.toggle(toggleClass);
    } else if(subDropdownContent3.classList.contains(toggleClass)) {
        subDropdownContent3.classList.toggle(toggleClass);
    }

    subDropdownContent2.classList.toggle(toggleClass);
});

subButton3.addEventListener("click", function() {

    if(subDropdownContent2.classList.contains(toggleClass)) {
        subDropdownContent2.classList.toggle(toggleClass);
    } else if(subDropdownContent1.classList.contains(toggleClass)) {
        subDropdownContent1.classList.toggle(toggleClass);
    }

    subDropdownContent3.classList.toggle(toggleClass);
});

bellButton.addEventListener("mouseover", () => {
    alertContentId.style.display = 'flex';
})

bellButton.addEventListener("mouseout", () => {
    alertContentId.style.display = 'none';
})

// alertClass.addEventListener("mouseover", function() {
//     alertContentId.style.display = 'block';
// })

// [bellId, alertContentId].forEach(function(element) {
//     element.addEventListener("mouseover", function() {
//         alertContentId.style.display = 'block';
//     })
// });

// let open = false;

// alertContentId.addEventListener("mouseover", () => {
//     open = true;
//     console.log("now open");
// })

// alertClass.addEventListener("mouseleave", function() {
//     setTimeout(() => {
//         alertClass.addEventListener("mouseover", function() {
//             alertContentId.style.display = 'block';
//         });
//         if(!open) {
//             console.log("close")
//             alertContentId.style.display = 'none';
//         }
//     }, 300);
// })

// [bellId, alertContentId].forEach(function(element) {
//     element.addEventListener("mouseleave", function() {
//         setTimeout(() => {
//             alertContentId.style.display = 'none';
//         }, 300);
//     })
// });


// subDropdownContent.onmouseover = function() {
//     subDropdownContent.setAttribute("style", "display:flex; flex-direction:column;");
// };

// subButton.onmouseleave = function() {
//     setTimeout(function() {
//         subDropdownContent.style.display = 'none';
//     }, 100);
// }

// subDropdownContent.onmouseleave = function() {
//     setTimeout(function() {
//         subDropdownContent.style.display = 'none';
//     }, 100);
// }