// script.js - Core Platform Engine Pipeline

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Content Injection Layer from config.js Variables
    document.title = `Wedding Celebration: ${WeddingConfig.brideName} & ${WeddingConfig.groomName}`;
    document.getElementById("load-names").innerText = `${WeddingConfig.brideName.charAt(0)} & ${WeddingConfig.groomName.charAt(0)}`;
    document.getElementById("gate-names").innerText = `${WeddingConfig.brideName} & ${WeddingConfig.groomName}`;
    document.getElementById("gate-tagline").innerText = WeddingConfig.tagline;
    document.getElementById("scratch-couple").innerText = `${WeddingConfig.brideName} & ${WeddingConfig.groomName}`;
    document.getElementById("scratch-msg").innerText = WeddingConfig.images.scratchMessage;
    
    document.getElementById("hero-names").innerText = `${WeddingConfig.brideName} & ${WeddingConfig.groomName}`;
    document.getElementById("hero-tagline").innerText = WeddingConfig.tagline;
    document.getElementById("hero-date").innerText = WeddingConfig.displayDate;
    
    document.getElementById("hero-section").style.backgroundImage = `url('${WeddingConfig.images.heroBackground}')`;
    document.getElementById("bride-img").src = WeddingConfig.images.bridePortrait;
    document.getElementById("groom-img").src = WeddingConfig.images.groomPortrait;
    document.getElementById("bride-title").innerText = WeddingConfig.brideName;
    document.getElementById("groom-title").innerText = WeddingConfig.groomName;

    // 2. Generate Functional Scroll Dynamic Event Modules
    const container = document.getElementById("events-container");
    WeddingConfig.events.forEach((ev) => {
        const item = document.createElement("div");
        item.className = `event-block py-32 px-6 flex flex-col items-center justify-center transition-all duration-1000 data-theme="${ev.theme}"`;
        item.setAttribute("data-theme", ev.theme);
        item.innerHTML = `
            <div class="max-w-2xl text-center bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-stone-100">
                <img src="${ev.illustrationUrl}" alt="icon" class="w-20 h-20 mx-auto mb-6 object-contain animate-bounce">
                <h2 class="font-cinzel text-3xl font-bold tracking-widest mb-4">${ev.name}</h2>
                <div class="w-12 h-[2px] bg-stone-400 mx-auto mb-6"></div>
                <p class="text-xl font-medium mb-2"><i class="fa-regular fa-calendar-days mr-2"></i> ${ev.date}</p>
                <p class="text-stone-600 mb-6"><i class="fa-regular fa-clock mr-2"></i> ${ev.time}</p>
                <p class="text-lg italic mb-4"><strong>Venue:</strong> ${ev.venue}</p>
                <span class="inline-block bg-white/90 border px-6 py-2 rounded-full text-xs uppercase tracking-widest font-sans font-semibold shadow-sm">Dress Code: ${ev.dressCode}</span>
            </div>
        `;
        container.appendChild(item);
    });

    // 3. Fire Up Functional Application Utilities
    executePreloader();
    initializeLenisSmoothScroll();
    setupPersistentPetalAtmosphere();
    initiateCountdownClock();
});

// Setup Simulated Preloader Pipeline
function executePreloader() {
    let currentPercent = 0;
    const bar = document.getElementById("loader-bar");
    const label = document.getElementById("loader-text");
    
    const interval = setInterval(() => {
        currentPercent += Math.floor(Math.random() * 15) + 5;
        if (currentPercent >= 100) {
            currentPercent = 100;
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById("loader").classList.add("opacity-0", "pointer-events-none");
                document.getElementById("gate-container").classList.remove("hidden");
            }, 400);
        }
        bar.style.width = `${currentPercent}%`;
        label.innerText = `Loading Pure Love... ${currentPercent}%`;
    }, 80);
}

// Open Invitation System Core Action Elements
let audioAsset = null;
document.getElementById("open-btn").addEventListener("click", () => {
    document.getElementById("gate-container").classList.add("opacity-0", "pointer-events-none");
    document.getElementById("main-content").classList.remove("opacity-0");
    
    // Play Celebration Party Poppers
    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });

    // Audio Deployment Logic Sequence
    audioAsset = new Audio(WeddingConfig.images.musicFile);
    audioAsset.loop = true;
    audioAsset.volume = 0.5;
    audioAsset.play().catch(() => console.log("Audio Autoplay Intercepted Successfully. Use Floating Action Button"));

    // Activate Live Interaction Engines
    setupFoilScratchCard();
    deployGSAPScrollTimelines();
});

// Audio Track Mute Management Controller Pipeline
document.getElementById("music-toggle").addEventListener("click", () => {
    if (!audioAsset) return;
    const icon = document.getElementById("music-icon");
    if (audioAsset.paused) {
        audioAsset.play();
        icon.className = "fa-solid fa-music text-xl animate-bounce";
    } else {
        audioAsset.pause();
        icon.className = "fa-solid fa-volume-xmark text-xl";
    }
});

// Lenis Core Structural Execution System
function initializeLenisSmoothScroll() {
    const lenis = new Lenis();
    function scrollRAF(time) {
        lenis.raf(time);
        requestAnimationFrame(scrollRAF);
    }
    requestAnimationFrame(scrollRAF);
}

// Particle Engine Configuration Module
function setupPersistentPetalAtmosphere() {
    const cvs = document.getElementById("petalCanvas");
    const ctx = cvs.getContext("2d");
    
    function sizeCanvas() {
        cvs.width = window.innerWidth;
        cvs.height = window.innerHeight;
    }
    sizeCanvas();
    window.addEventListener("resize", sizeCanvas);

    const leafParticles = [];
    for(let i=0; i<35; i++) {
        leafParticles.push({
            x: Math.random() * cvs.width,
            y: Math.random() * cvs.height - cvs.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 50 + 20,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 1.5 + 1,
            color: i % 2 === 0 ? "#FFD700" : "#FFB6C1" // Alternating Gold Dust / Rose Petals
        });
    }

    function renderAtmosphere() {
        ctx.clearRect(0,0, cvs.width, cvs.height);
        leafParticles.forEach((p) => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = 0.6;
            ctx.fill();

            p.y += p.speedY;
            p.x += p.speedX;

            if (p.y > cvs.height) {
                p.y = -20;
                p.x = Math.random() * cvs.width;
            }
        });
        requestAnimationFrame(renderAtmosphere);
    }
    renderAtmosphere();
}

// Interactive HTML5 Foil Scratch Construction
function setupFoilScratchCard() {
    const cvs = document.getElementById("scratch-canvas");
    const ctx = cvs.getContext("2d");
    
    cvs.width = cvs.offsetWidth;
    cvs.height = cvs.offsetHeight;

    ctx.fillStyle = "#E0E0E0"; // Metallic base grey
    ctx.fillRect(0,0, cvs.width, cvs.height);
    
    // Add golden texture overlay strings
    ctx.fillStyle = "#B59410";
    ctx.font = "italic 16px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ Scratch with Royal Finger ✨", cvs.width/2, cvs.height/2 + 5);

    let scrubbing = false;
    
    function eraseTrack(clientX, clientY) {
        const bounds = cvs.getBoundingClientRect();
        const posX = clientX - bounds.left;
        const posY = clientY - bounds.top;

        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(posX, posY, 25, 0, Math.PI*2);
        ctx.fill();
    }

    cvs.addEventListener("mousedown", () => scrubbing = true);
    cvs.addEventListener("mouseup", () => scrubbing = false);
    cvs.addEventListener("mousemove", (e) => { if(scrubbing) eraseTrack(e.clientX, e.clientY); });

    cvs.addEventListener("touchstart", () => scrubbing = true);
    cvs.addEventListener("touchend", () => scrubbing = false);
    cvs.addEventListener("touchmove", (e) => {
        if(scrubbing && e.touches[0]) eraseTrack(e.touches[0].clientX, e.touches[0].clientY);
    });
}

// Countdown Calculation Engine Functions
function initiateCountdownClock() {
    const destination = new Date(WeddingConfig.weddingDate).getTime();
    
    setInterval(() => {
        const delta = destination - new Date().getTime();
        if (delta <= 0) return;

        document.getElementById("days").innerText = String(Math.floor(delta / 86400000)).padStart(2,'0');
        document.getElementById("hours").innerText = String(Math.floor((delta % 86400000) / 3600000)).padStart(2,'0');
        document.getElementById("mins").innerText = String(Math.floor((delta % 3600000) / 60000)).padStart(2,'0');
        document.getElementById("secs").innerText = String(Math.floor((delta % 60000) / 1000)).padStart(2,'0');
    }, 1000);
}

// GSAP Interpolations Engine Execution System
function deployGSAPScrollTimelines() {
    gsap.registerPlugin(ScrollTrigger);

    // Dynamic Context Background Shift Engine Core
    const sections = gsap.utils.toArray(".event-block");
    sections.forEach((sec) => {
        const targetClass = `theme-${sec.getAttribute("data-theme")}`;
        ScrollTrigger.create({
            trigger: sec,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: () => updateBodyTheme(targetClass),
            onEnterBack: () => updateBodyTheme(targetClass),
            onLeave: () => clearBodyTheme(targetClass),
            onLeaveBack: () => clearBodyTheme(targetClass),
        });
    });

    function updateBodyTheme(cls) {
        document.body.className = `text-stone-800 transition-colors duration-1000 overflow-x-hidden font-cormorant antialiased ${cls}`;
    }
    function clearBodyTheme(cls) {
        document.body.classList.remove(cls);
    }

    // Gentle Form Elements Slide reveals
    gsap.from("#rsvp-form", {
        scrollTrigger: { trigger: "#rsvp-form", start: "top 90%" },
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power2.out"
    });
}

// Basic RSVP Action Execution Handler Intercept
document.getElementById("rsvp-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("rsvp-form").classList.add("hidden");
    document.getElementById("rsvp-success").classList.remove("hidden");
});
