


// button k click pe background green ho jana chaiye and button ka background color black and color white ho jna chaiye jha background color red likha h uska background color blue hona chaiye and color white hona chaiye uska //


const body = document.getElementById("body");
const one = document.getElementById("one");
const two = document.getElementById("two");

two.addEventListener("click", function(){
        body.style.backgroundColor = "green";
        two.style.backgroundColor = "black";
        two.style.color = "White";
        one.style.backgroundColor = "blue";
        one.style.color = "White";
});

// one.addEventListener("click", function(){
//     one.style.backgroundColor = "blue";
//     one.style.color = "White";
// });