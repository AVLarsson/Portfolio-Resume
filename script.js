window.addEventListener('load', typeWriter());

var imgAnimation = gsap.timeline();


imgAnimation /* Picture animation */
    .from(".portrait", { duration: 2, scale: 0.80 });


function typeWriter() { /* Typewriter style on H1 (name) */
    let i = 0;
    const name = "ANNIE LARSSON";
    const velocity = 150;
    const element = document.getElementById("mName");
    const interval = setInterval(addSymbol, velocity);

    function addSymbol() {
        if (i < name.length) {
            element.innerHTML += name.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }
}

var animation = gsap.timeline(); /* section fade in */

animation
    .from("#div1", {
        duration: 0.8,
        opacity: 0
    })
    .from("#div2", {
        duration: 0.8,
        opacity: 0
    }, "+=1.7")
    .from("#div3", {
        duration: 0.8,
        opacity: 0
    })
    .from("#div4", {
        duration: 0.8,
        opacity: 0
    });