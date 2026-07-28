document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================
     1. HAMBURGER MENU & NAV OVERLAY (MOBILE)
     ========================================== */
  const hamburgerBtn = document.getElementById("hamburger-toggle");
  const navLinks = document.querySelector(".v1-nav-links");
  const navOverlay = document.querySelector(".nav-overlay");
  const mobileNavItems = document.querySelectorAll(".v1-nav-links a");

  // Toggle menu saat tombol hamburger diklik
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      if (navOverlay) navOverlay.classList.toggle("active");
    });
  }

  // Tutup menu saat area luar (overlay) diklik
  if (navOverlay) {
    navOverlay.addEventListener("click", () => {
      navLinks.classList.remove("active");
      navOverlay.classList.remove("active");
    });
  }

  // Tutup menu otomatis saat salah satu link navigasi diklik
  mobileNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        if (navOverlay) navOverlay.classList.remove("active");
      }
    });
  });

  /* ==========================================
     2. VERSION SWITCHER (VERSI 1 VS VERSI 2)
     ========================================== */
  const versionBtns = document.querySelectorAll(".version-btns button");
  const layoutContainers = document.querySelectorAll(".layout-container");

  versionBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetVersion = btn.getAttribute("data-version");

      // Update active state tombol
      versionBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Switch tampilan container versi
      layoutContainers.forEach((container) => {
        if (container.id === targetVersion) {
          container.classList.add("active");
        } else {
          container.classList.remove("active");
        }
      });
    });
  });

  /* ==========================================
     3. LIGHTBOX FLEET GALLERY
     ========================================== */
  const galleryCards = document.querySelectorAll(".gallery-card");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");

  galleryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img");
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "Fleet Image";
        lightbox.classList.add("active");
      }
    });
  });

  // Tutup Lightbox saat tombol Close atau area luar gambar diklik
  if (lightboxClose) {
    lightboxClose.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });
  }

  /* ==========================================
     4. ANIMATION ON SCROLL (AOS REVEAL EFFECT)
     ========================================== */
  const reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right",
  );

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  };

  // Jalankan efek saat scroll dan saat halaman pertama kali di-load
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
