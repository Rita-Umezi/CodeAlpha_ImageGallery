// Gallery Data
const galleryData = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
        title: 'Mountain Landscape',
        category: 'nature'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop',
        title: 'Modern Architecture',
        category: 'architecture'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=400&h=400&fit=crop',
        title: 'Abstract Art',
        category: 'abstract'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1552639554-f6b08422c612?w=400&h=400&fit=crop',
        title: 'Forest Trail',
        category: 'nature'
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop',
        title: 'Building Design',
        category: 'architecture'
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1549887534-7898e3a87d6e?w=400&h=400&fit=crop',
        title: 'Colorful Patterns',
        category: 'abstract'
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
        title: 'Mountain Peak',
        category: 'nature'
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1486875751519-bf21a51a446c?w=400&h=400&fit=crop',
        title: 'Urban Architecture',
        category: 'architecture'
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1578987124954-a8f29578e3ff?w=400&h=400&fit=crop',
        title: 'Digital Artwork',
        category: 'abstract'
    },
    {
        id: 10,
        src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop',
        title: 'Beach Sunset',
        category: 'nature'
    },
    {
        id: 11,
        src: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=400&fit=crop',
        title: 'Skyscraper',
        category: 'architecture'
    },
    {
        id: 12,
        src: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=400&fit=crop',
        title: 'Geometric Design',
        category: 'abstract'
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
