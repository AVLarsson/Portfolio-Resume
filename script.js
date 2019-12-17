window.addEventListener('load', typeWriter());

var imgAnimation = gsap.timeline();

gsap.from("body", { duration: 1, opacity: 1 });

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