// Image Data Configuration
const images = [
    { src: 'https://picsum.photos/id/1015/800/600', category: 'nature', caption: 'Scenic River' },
    { src: 'https://picsum.photos/id/1016/800/600', category: 'nature', caption: 'Mountain Canyons' },
    { src: 'https://picsum.photos/id/1033/800/600', category: 'nature', caption: 'Green Forest' },
    { src: 'https://picsum.photos/id/1040/800/600', category: 'city', caption: 'Ancient Castle' },
    { src: 'https://picsum.photos/id/106/800/600', category: 'nature', caption: 'Sunset Bloom' },
    { src: 'https://picsum.photos/id/1076/800/600', category: 'city', caption: 'Modern Arch' },
    { src: 'https://picsum.photos/id/1/800/600', category: 'tech', caption: 'Coding Laptop' },
    { src: 'https://picsum.photos/id/180/800/600', category: 'tech', caption: 'Workstation Setup' },
    { src: 'https://picsum.photos/id/122/800/600', category: 'city', caption: 'City Bridge' }
];

// DOM Elements
const galleryGrid = document.getElementById('gallery-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentFilteredImages = []; // Stores images currently visible
let currentIndex = 0; // Index relative to the filtered list

// --- Initialization ---
function init() {
    // Initial Load: Show all
    currentFilteredImages = images;
    renderGallery(images);
    
    // Filter Event Listeners
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            e.target.classList.add('active');
            
            const filterValue = e.target.getAttribute('data-filter');
            filterGallery(filterValue);
        });
    });

    // Lightbox Event Listeners
    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    // Close on click outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('show')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        }
    });
}

// --- Gallery Functions ---

function renderGallery(items) {
    galleryGrid.innerHTML = ''; // Clear grid
    items.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('gallery-item');
        div.innerHTML = `<img src="${item.src}" alt="${item.caption}">`;
        
        // Add click event to open lightbox with specific filtered index
        div.addEventListener('click', () => {
            openLightbox(index);
        });
        
        galleryGrid.appendChild(div);
    });
}

function filterGallery(category) {
    if (category === 'all') {
        currentFilteredImages = images;
    } else {
        currentFilteredImages = images.filter(img => img.category === category);
    }
    renderGallery(currentFilteredImages);
}

// --- Lightbox Functions ---

function openLightbox(index) {
    currentIndex = index;
    updateLightboxImage();
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeLightbox() {
    lightbox.classList.remove('show');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

function updateLightboxImage() {
    const item = currentFilteredImages[currentIndex];
    lightboxImg.src = item.src;
    captionText.innerText = item.caption;
}

function showNext() {
    currentIndex++;
    if (currentIndex >= currentFilteredImages.length) {
        currentIndex = 0; // Loop back to start
    }
    updateLightboxImage();
}

function showPrev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = currentFilteredImages.length - 1; // Loop to end
    }
    updateLightboxImage();
}

// Run Initialization
init();
