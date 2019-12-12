var imgAnimation = gsap.timeline();

gsap.from("body", { duration: 1, opacity: 0 })

imgAnimation /* Picture animation */
    .from(".portrait", { duration: 2, scale: 0.80 })