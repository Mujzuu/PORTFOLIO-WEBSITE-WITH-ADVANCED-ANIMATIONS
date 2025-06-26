gsap.from("#hero-title", {
  duration: 1.2,
  y: -80,
  opacity: 0,
  ease: "power3.out"
});
gsap.from("#hero-subtitle", {
  duration: 1.2,
  y: 80,
  opacity: 0,
  delay: 0.3,
  ease: "power3.out"
});

gsap.utils.toArray(".project-card").forEach((card, i) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 0,
    opacity: 1,
    duration: 1,
    delay: i * 0.2,
    ease: "power2.out"
  });
});

gsap.utils.toArray(".service").forEach((service, i) => {
  gsap.to(service, {
    scrollTrigger: {
      trigger: service,
      start: "top 85%"
    },
    opacity: 1,
    y: 0,
    duration: 1,
    delay: i * 0.3,
    ease: "power2.out"
  });
});

gsap.utils.toArray(".blog-post").forEach((post, i) => {
  gsap.to(post, {
    scrollTrigger: {
      trigger: post,
      start: "top 90%"
    },
    opacity: 1,
    y: 0,
    duration: 1,
    delay: i * 0.3,
    ease: "power2.out"
  });
});
