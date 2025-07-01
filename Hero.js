function renderHero() {
    const section = document.createElement('section');
    section.className = "flex items-center justify-center h-screen bg-gray-900 text-white";

    section.innerHTML = `
        <div class="text-center">
            <h1 class="text-5xl font-bold mb-4">Welcome to TROVYN</h1>
            <p class="text-lg mb-8">Innovative solutions for a creative future.</p>
            <a href="#contact" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                Get in Touch
            </a>
        </div>
    `;
    return section;
}

export default renderHero;