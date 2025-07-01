import React from 'react';

function renderNavbar() {
    const nav = document.createElement('nav');
    nav.className = "fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50";

    nav.innerHTML = `
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <div class="text-2xl font-bold">TROVYN</div>
            <ul class="flex space-x-6">
                <li>
                    <button data-scroll="hero" class="hover:text-gray-400">Home</button>
                </li>
                <li>
                    <button data-scroll="about" class="hover:text-gray-400">About</button>
                </li>
                <li>
                    <button data-scroll="contact" class="hover:text-gray-400">Contact</button>
                </li>
            </ul>
        </div>
    `;

    // Add smooth scroll event listeners
    nav.querySelectorAll('button[data-scroll]').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('data-scroll');
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    return nav;
}

const Navbar = () => {
    return renderNavbar();
};

export default Navbar;