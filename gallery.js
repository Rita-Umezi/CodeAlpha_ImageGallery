// Gallery Data
const galleryData = [
    // Nature Images
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
        title: 'Mountain Landscape',
        category: 'nature'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1552639554-f6b08422c612?w=400&h=400&fit=crop',
        title: 'Forest Trail',
        category: 'nature'
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
        title: 'Mountain Peak',
        category: 'nature'
    },
    {
        id: 10,
        src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop',
        title: 'Beach Sunset',
        category: 'nature'
    },
    {
        id: 13,
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop',
        title: 'Ocean Waves',
        category: 'nature'
    },
    {
        id: 14,
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
        title: 'Autumn Forest',
        category: 'nature'
    },
    {
        id: 15,
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop',
        title: 'Desert Dunes',
        category: 'nature'
    },
    {
        id: 16,
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
        title: 'Lake Reflection',
        category: 'nature'
    },

    // Architecture Images
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop',
        title: 'Modern Architecture',
        category: 'architecture'
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop',
        title: 'Building Design',
        category: 'architecture'
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1486875751519-bf21a51a446c?w=400&h=400&fit=crop',
        title: 'Urban Architecture',
        category: 'architecture'
    },
    {
        id: 11,
        src: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=400&fit=crop',
        title: 'Skyscraper',
        category: 'architecture'
    },
    {
        id: 17,
        src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop',
        title: 'Glass Building',
        category: 'architecture'
    },
    {
        id: 18,
        src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=400&fit=crop',
        title: 'Historic Cathedral',
        category: 'architecture'
    },
    {
        id: 19,
        src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=400&fit=crop',
        title: 'Modern Bridge',
        category: 'architecture'
    },
    {
        id: 20,
        src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop',
        title: 'City Skyline',
        category: 'architecture'
    },

    // Abstract Images
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=400&h=400&fit=crop',
        title: 'Abstract Art',
        category: 'abstract'
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1549887534-7898e3a87d6e?w=400&h=400&fit=crop',
        title: 'Colorful Patterns',
        category: 'abstract'
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1578987124954-a8f29578e3ff?w=400&h=400&fit=crop',
        title: 'Digital Artwork',
        category: 'abstract'
    },
    {
        id: 12,
        src: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=400&fit=crop',
        title: 'Geometric Design',
        category: 'abstract'
    },
    {
        id: 21,
        src: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
        title: 'Abstract Shapes',
        category: 'abstract'
    },
    {
        id: 22,
        src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
        title: 'Color Explosion',
        category: 'abstract'
    },
    {
        id: 23,
        src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop',
        title: 'Digital Waves',
        category: 'abstract'
    },
    {
        id: 24,
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        title: 'Minimalist Art',
        category: 'abstract'
    },

    // People Images
    {
        id: 25,
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        title: 'Portrait Study',
        category: 'people'
    },
    {
        id: 26,
        src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop',
        title: 'Professional Headshot',
        category: 'people'
    },
    {
        id: 27,
        src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        title: 'Casual Portrait',
        category: 'people'
    },
    {
        id: 28,
        src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        title: 'Creative Expression',
        category: 'people'
    },
    {
        id: 29,
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
        title: 'Business Professional',
        category: 'people'
    },
    {
        id: 30,
        src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
        title: 'Artistic Portrait',
        category: 'people'
    },
    {
        id: 31,
        src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
        title: 'Confident Smile',
        category: 'people'
    },
    {
        id: 32,
        src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
        title: 'Natural Beauty',
        category: 'people'
    }
];

// State Management
let state = {
    currentFilter: 'all',
    currentLightboxIndex: 0,
    filteredImages: galleryData,
    lightboxOpen: false
};

// DOM Elements
const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const currentIndexSpan = document.getElementById('currentIndex');
const totalImagesSpan = document.getElementById('totalImages');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxBg = document.getElementById('lightboxBg');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize Gallery
function initGallery() {
    renderGallery();
    setupEventListeners();
}

// Setup Event Listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilter);
    });

    // Search input
    searchInput.addEventListener('input', handleSearch);

    // Lightbox events
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', previousImage);
    lightboxNext.addEventListener('click', nextImage);
    lightboxBg.addEventListener('click', closeLightbox);

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyPress);
}
    setupEventListeners();
    updateTotalImages();
}

// Render Gallery Items
function renderGallery() {
    galleryGrid.innerHTML = '';
    state.filteredImages = state.currentFilter === 'all' 
        ? galleryData 
        : galleryData.filter(img => img.category === state.currentFilter);

    state.filteredImages.forEach((image, index) => {
        const galleryItem = createGalleryItem(image, index);
        galleryGrid.appendChild(galleryItem);
    });

    // Animate items
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item, index) => {
        item.style.animation = `slideUp 0.5s ease-out ${index * 0.05}s forwards`;
        item.style.opacity = '0';
        setTimeout(() => {
            item.style.opacity = '1';
        }, index * 50);
    });
}

// Create Gallery Item Element
function createGalleryItem(image, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
        <img src="${image.src}" alt="${image.title}" loading="lazy">
        <div class="gallery-item-overlay">
            <div class="gallery-item-icon">🔍</div>
            <h3 class="gallery-item-title">${image.title}</h3>
            <p class="gallery-item-category">${image.category}</p>
        </div>
    `;

    item.addEventListener('click', () => openLightbox(index));
    return item;
}

// Setup Event Listeners
function setupEventListeners() {
    // Filter Buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });

    // Lightbox Controls
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxBg.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', previousImage);
    lightboxNext.addEventListener('click', nextImage);

    // Keyboard Navigation
    document.addEventListener('keydown', handleKeyPress);
}

// Handle Filter Click
function handleFilterClick(e) {
    const filter = e.target.dataset.filter;
    state.currentFilter = filter;

    // Update Active Button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    // Re-render Gallery
    renderGallery();
}

// Open Lightbox
function openLightbox(index) {
    state.currentLightboxIndex = index;
    state.lightboxOpen = true;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    state.lightboxOpen = false;
    document.body.style.overflow = 'auto';
}

// Update Lightbox Content
function updateLightbox() {
    const image = state.filteredImages[state.currentLightboxIndex];
    if (!image) return;

    lightboxImage.src = image.src;
    lightboxCaption.textContent = `${image.title} - ${image.category}`;
    currentIndexSpan.textContent = state.currentLightboxIndex + 1;
}

// Next Image
function nextImage(e) {
    if (e) e.stopPropagation();
    state.currentLightboxIndex = (state.currentLightboxIndex + 1) % state.filteredImages.length;
    updateLightbox();
    playTransitionAnimation();
}

// Previous Image
function previousImage(e) {
    if (e) e.stopPropagation();
    state.currentLightboxIndex = (state.currentLightboxIndex - 1 + state.filteredImages.length) % state.filteredImages.length;
    updateLightbox();
    playTransitionAnimation();
}

// Play Transition Animation
function playTransitionAnimation() {
    lightboxImage.style.animation = 'none';
    setTimeout(() => {
        lightboxImage.style.animation = 'scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    }, 10);
}

// Handle Keyboard Navigation
function handleKeyPress(e) {
    if (!state.lightboxOpen) return;

    switch (e.key) {
        case 'ArrowLeft':
            previousImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
        case 'Escape':
            closeLightbox();
            break;
    }
}

// Update Total Images Count
function updateTotalImages() {
    totalImagesSpan.textContent = state.filteredImages.length;
}

// Add Smooth Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.gallery-header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', initGallery);

// Preload Images
function preloadImages() {
    galleryData.forEach(image => {
        const img = new Image();
        img.src = image.src;
    });
}

// Call preload after gallery initializes
window.addEventListener('load', preloadImages);
