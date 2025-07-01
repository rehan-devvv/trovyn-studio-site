import './styles/main.css';

// --- Layout component logic in vanilla JS ---
function renderLayout(container) {
    // Example layout: Replace with your actual layout structure
    // If you have a layout.js file, you may need to convert its logic as well

    // Create a header
    const header = document.createElement('header');
    header.textContent = 'Welcome to Trovyn Homepage!';

    // Create a main section
    const main = document.createElement('main');
    main.textContent = 'This is the main content area.';

    // Append to container
    container.appendChild(header);
    container.appendChild(main);
}

// --- Main App logic ---
document.addEventListener('DOMContentLoaded', () => {
    // Find the root element (should exist in index.html)
    let root = document.getElementById('root');
    if (!root) {
        // If not present, create and append it
        root = document.createElement('div');
        root.id = 'root';
        document.body.appendChild(root);
    }

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("root").appendChild(renderNavbar());
});

    // Clear root and render layout
    root.innerHTML = '';
    renderLayout(root);
});