# eShop - Modern Online Store

A beautiful, responsive e-commerce website built with vanilla HTML, CSS, and JavaScript featuring a modern sky blue theme with glassmorphism effects and smooth animations.

## 🌟 Features

### Design & UI
- **Modern Sky Blue Theme** - Clean, professional design with sky blue color scheme
- **Glassmorphism Effects** - Beautiful frosted glass effects throughout the interface
- **Responsive Design** - Fully responsive layout that works on all devices
- **Smooth Animations** - CSS animations and transitions for enhanced user experience
- **Custom Scrollbar** - Styled scrollbar matching the theme

### Interactive Components
- **Auto-playing Carousel** - Featured product collections with navigation controls
- **Shopping Cart** - Local storage-based cart with badge notifications
- **Product Grid** - Hover effects and add-to-cart functionality
- **Product Table** - Complete catalog with detailed information
- **Newsletter Subscription** - Email validation and subscription handling
- **Scroll to Top** - Floating action button with smooth scrolling

### User Experience
- **Mobile Menu** - Collapsible navigation for mobile devices
- **Smooth Scrolling** - Navigation links with smooth scroll behavior
- **Loading States** - Visual feedback for user interactions
- **Notifications** - Toast notifications for user actions
- **Lazy Loading** - Optimized image loading for better performance

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required - everything is included via CDN

### Installation
1. Clone or download the project files
2. Open `src/index.html` in your web browser
3. That's it! The website is ready to use

### File Structure
```
eshop/
├── src/
│   ├── index.html          # Main HTML file
│   ├── css/
│   │   └── index.css       # Custom styles and animations
│   ├── js/
│   │   └── index.js        # Interactive functionality
│   └── icons/
│       └── favicon.ico     # Website icon
├── docs/
│   └── images/             # Documentation screenshots
└── README.md               # This file
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#0ea5e9` (Sky Blue)
- **Secondary Blue**: `#0284c7` (Darker Sky Blue)
- **Accent Blue**: `#0369a1` (Deep Blue)
- **Background**: `#f8fafc` (Light Gray)
- **Text**: `#1f2937` (Dark Gray)

### Typography
- **Font Family**: Roboto (Google Fonts)
- **Weights**: 300, 400, 500, 700
- **Responsive**: Scales appropriately on different screen sizes

### Components
- **Cards**: Rounded corners with shadow effects
- **Buttons**: Gradient backgrounds with hover animations
- **Forms**: Clean input styling with focus states
- **Tables**: Hover effects and responsive design

## 🔧 Customization

### Changing Colors
The color scheme can be easily modified in the CSS file:
```css
:root {
    --primary-blue: #0ea5e9;
    --secondary-blue: #0284c7;
    --accent-blue: #0369a1;
}
```

### Adding Products
To add new products, simply duplicate the product card structure in the HTML:
```html
<div class="product-card">
    <img src="product-image.jpg" alt="Product Name">
    <div class="p-4">
        <h3 class="font-semibold">Product Name</h3>
        <div class="flex items-center mb-2">
            <!-- Rating stars -->
        </div>
        <div class="flex justify-between items-center">
            <span class="text-sky-blue font-bold">$99.99</span>
            <button class="bg-sky-blue text-white px-4 py-2 rounded-lg">
                <i class="fas fa-cart-plus mr-2"></i>Add
            </button>
        </div>
    </div>
</div>
```

### Modifying Animations
Animation durations and effects can be adjusted in the CSS file:
```css
.animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out; /* Change duration here */
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🚀 Performance Features

- **CDN Resources**: Fast loading via CDN for external libraries
- **Optimized Images**: Responsive images with proper sizing
- **Lazy Loading**: Images load only when needed
- **Debounced Events**: Optimized scroll and resize handlers
- **Minimal Dependencies**: Only essential external resources

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for proper indexing
- Alt text for images
- Proper heading hierarchy
- Fast loading times

## 🛠️ Development

### Adding New Features
1. **HTML**: Add structure in `index.html`
2. **CSS**: Style in `css/index.css`
3. **JavaScript**: Add functionality in `js/index.js`

### Best Practices
- Use semantic HTML elements
- Maintain consistent naming conventions
- Add proper comments for complex functionality
- Test on multiple devices and browsers
- Optimize for performance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**
