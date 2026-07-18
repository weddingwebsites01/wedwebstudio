// config.js - Global Customization File
const WeddingConfig = {
    // 1. Couple Details
    brideName: "Navneet",
    groomName: "Mansimran",
    tagline: "Together with their families, invite you to celebrate their union",
    weddingDate: "2026-12-25T18:00:00", // ISO Format for the countdown timer
    displayDate: "December 25, 2026",
    
    // 2. Custom Images (Place your files in assets/images/ folder)
    images: {
        heroBackground: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1200&q=80",
        bridePortrait: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
        groomPortrait: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
        scratchMessage: "We can't wait to celebrate with you! ❤️",
        musicFile: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Replace with real royal instrumental path
    },

    // 3. Dynamic Section-Switching Events
    // Theme types supported: 'haldi' (yellow), 'mehendi' (green), 'wedding' (maroon/pink), 'reception' (royal blue)
    events: [
        {
            name: "The Auspicious Haldi",
            theme: "haldi",
            date: "Dec 23, 2026",
            time: "10:00 AM onwards",
            venue: "The Marigold Courtyard, Luxury Resort",
            dressCode: "Vibrant Yellow / Mustard Traditional Attire",
            illustrationUrl: "https://cdn-icons-png.flaticon.com/512/3255/3255655.png"
        },
        {
            name: "The Vibrant Mehendi & Sangeet",
            theme: "mehendi",
            date: "Dec 24, 2026",
            time: "4:00 PM onwards",
            venue: "The Emerald Lawns & Pavilion",
            dressCode: "Traditional Green / Creative Fusion Henna Wear",
            illustrationUrl: "https://cdn-icons-png.flaticon.com/512/3565/3565935.png"
        },
        {
            name: "The Royal Wedding (Anand Karaj)",
            theme: "wedding",
            date: "Dec 25, 2026",
            time: "10:00 AM onwards",
            venue: "Grand Palace Mandap & Gurudwara Hall",
            dressCode: "Royal Pastels, Crimson, or Sherwani Suite",
            illustrationUrl: "https://cdn-icons-png.flaticon.com/512/2928/2928158.png"
        },
        {
            name: "The Grand Reception Ballroom",
            theme: "reception",
            date: "Dec 26, 2026",
            time: "7:00 PM onwards",
            venue: "The Imperial Ballroom & Banquet",
            dressCode: "Black Tie, Elegant Gowns, Tuxedos",
            illustrationUrl: "https://cdn-icons-png.flaticon.com/512/3163/3163195.png"
        }
    ]
};
