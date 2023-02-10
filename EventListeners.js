const hamButton = document.getElementById('ham-button');
const dropdownContent = document.getElementById('dropdown-id');
const subDropdownContent = document.getElementById('sub-dropdown-id');
const subButton = document.getElementById('sub-button');

const bellId = document.getElementById('bell-id');
const alertContentId = document.getElementById('alert-content-id');
const alertClass = document.getElementsByClassName('alert-class');

hamButton.addEventListener("click", function() {
    dropdownContent.classList.toggle("dropdown-content-show");
});

subButton.addEventListener("click", function() {
    subDropdownContent.classList.toggle('sub-dropdown-content-show');
});

// alertClass.addEventListener("mouseover", function() {
//     alertContentId.style.display = 'block';
// })

[bellId, alertContentId].forEach(function(element) {
    element.addEventListener("mouseover", function() {
        alertContentId.style.display = 'block';
    })
});

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

[bellId, alertContentId].forEach(function(element) {
    element.addEventListener("mouseleave", function() {
        setTimeout(() => {
            alertContentId.style.display = 'none';
        }, 300);
    })
});


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