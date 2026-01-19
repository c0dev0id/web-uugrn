// Handle iframe date loading
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading text once iframes are loaded
    setTimeout(function() {
        const loadingElements = document.querySelectorAll('.date-loading');
        loadingElements.forEach(function(el) {
            el.style.display = 'none';
        });
    }, 2000);
});
