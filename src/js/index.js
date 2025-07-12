// eShop JavaScript - Interactive Features and Animations

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all components
    initCarousel();
    initScrollToTop();
    initAnimations();
    initShoppingCart();
    initMobileMenu();
    initNewsletter();
    initProductInteractions();
});

// Carousel Functionality
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let currentSlide = 0;
    const slideCount = slides.length;

    // Auto-play carousel
    let autoPlayInterval = setInterval(nextSlide, 5000);

    function updateCarousel() {
        const offset = -currentSlide * 100;
        track.style.transform = `translateX(${offset}%)`;

        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateCarousel();
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            clearInterval(autoPlayInterval);
            nextSlide();
            autoPlayInterval = setInterval(nextSlide, 5000);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            clearInterval(autoPlayInterval);
            prevSlide();
            autoPlayInterval = setInterval(nextSlide, 5000);
        });
    }

    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(autoPlayInterval);
            currentSlide = index;
            updateCarousel();
            autoPlayInterval = setInterval(nextSlide, 5000);
        });
    });

    // Pause auto-play on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });

        carouselContainer.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(nextSlide, 5000);
        });
    }
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Intersection Observer for Animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.product-card, .feature-icon, .table-row');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Shopping Cart Functionality
function initShoppingCart() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartBadge = document.querySelector('.cart-badge');

    function updateCartBadge() {
        if (cartBadge) {
            cartBadge.textContent = cartItems.length;
            if (cartItems.length > 0) {
                cartBadge.classList.add('animate-pulse');
            } else {
                cartBadge.classList.remove('animate-pulse');
            }
        }
    }

    function addToCart(product) {
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({
                ...product,
                quantity: 1
            });
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartBadge();
        showNotification('Product added to cart!');
    }

    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('button:has(.fa-cart-plus)');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const productCard = button.closest('.product-card, tr');
            const productName = productCard.querySelector('h3, .font-medium')?.textContent || 'Product';
            const productPrice = productCard.querySelector('.text-sky-blue')?.textContent || '$0.00';

            const product = {
                id: Date.now(),
                name: productName,
                price: productPrice,
                image: productCard.querySelector('img')?.src || ''
            };

            addToCart(product);
        });
    });

    // Initialize cart badge
    updateCartBadge();
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.md\\:hidden button');
    const navLinks = document.querySelector('.hidden.md\\:flex');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('hidden');
            navLinks.classList.toggle('flex');
            navLinks.classList.toggle('flex-col');
            navLinks.classList.toggle('absolute');
            navLinks.classList.toggle('top-16');
            navLinks.classList.toggle('left-0');
            navLinks.classList.toggle('w-full');
            navLinks.classList.toggle('bg-white');
            navLinks.classList.toggle('shadow-lg');
            navLinks.classList.toggle('p-4');
        });
    }
}

// Newsletter Subscription
function initNewsletter() {
    const newsletterForm = document.querySelector('input[type="email"]');
    const subscribeBtn = document.querySelector('button:has(.fa-paper-plane)');

    if (newsletterForm && subscribeBtn) {
        subscribeBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const email = newsletterForm.value.trim();

            if (email && isValidEmail(email)) {
                showNotification('Thank you for subscribing!');
                newsletterForm.value = '';
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }
}

// Product Interactions
function initProductInteractions() {
    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Rating stars interaction
    const ratingStars = document.querySelectorAll('.text-yellow-400 .fas.fa-star, .text-yellow-400 .far.fa-star');
    ratingStars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating) || 5;
            showNotification(`You rated this product ${rating} stars!`);
        });
    });
}

// Utility Functions
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full ${type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`;
    notification.textContent = message;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Search functionality
function initSearch() {
    const searchInput = document.querySelector('input[type="search"]');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const products = document.querySelectorAll('.product-card, .table-row');

            products.forEach(product => {
                const productName = product.querySelector('h3, .font-medium')?.textContent.toLowerCase() || '';
                const productCategory = product.querySelector('td:nth-child(2)')?.textContent.toLowerCase() || '';

                if (productName.includes(searchTerm) || productCategory.includes(searchTerm)) {
                    product.style.display = '';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function () {
    initLazyLoading();
    initSearch();
});

// Performance optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    // Handle scroll-based animations
    const scrolledElements = document.querySelectorAll('.animate-on-scroll');
    scrolledElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate-fade-in-up');
        }
    });
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);
