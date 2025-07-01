function renderLayout() {
    // Assuming renderNavbar, renderHero, renderAbout, renderContact, renderFooter are globally available
    const root = document.createElement('div');
    root.className = "bg-gray-900 text-white";

    // Navbar
    root.appendChild(renderNavbar());

    // Main content
    const main = document.createElement('main');
    main.appendChild(renderHero());
    main.appendChild(renderAbout());
    main.appendChild(renderContact());
    root.appendChild(main);

    // Footer
    root.appendChild(renderFooter());

    // Append to body or a specific container
    document.body.appendChild(root);
}

// Call the function to render