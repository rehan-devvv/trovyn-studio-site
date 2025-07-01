function renderFooter() {
    const footer = document.createElement('footer');
    footer.className = "bg-gray-900 text-white py-6";

    const year = new Date().getFullYear();

    footer.innerHTML = `
        <div class="container mx-auto text-center">
            <h2 class="text-2xl font-bold">TROVYN</h2>
            <p class="mt-2">Crafting innovative solutions for a digital world.</p>
            <div class="mt-4">
                <a href="#" class="mx-2 text-gray-400 hover:text-white">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="mx-2 text-gray-400 hover:text-white">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="mx-2 text-gray-400 hover:text-white">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
            <p class="mt-4 text-sm">&copy; ${year} TROVYN. All rights reserved.</p>
        </div>
    `;

    return footer;
}

document.body.appendChild(renderFooter());