document.querySelectorAll(".news-card").forEach(card => {
    const textZone = card.querySelector(".text-zone");
    textZone.addEventListener("mouseenter", () => {
      document.querySelectorAll(".news-card").forEach(c => c.classList.remove("expanded"));
      card.classList.add("expanded");
    });
    card.addEventListener("mouseleave", () => card.classList.remove("expanded"));
  });