function renderAbout() {
    const section = document.createElement('section');
    section.id = "about";
    section.className = "py-20 bg-gray-900 text-white";

    section.innerHTML = `
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-6">About TROVYN</h2>
            <div class="flex flex-col md:flex-row items-center">
                <img src="../assets/placeholder.jpg" alt="About TROVYN" class="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0" />
                <div class="md:ml-6">
                    <p class="mb-4">
                        TROVYN is a creative tech studio dedicated to pushing the boundaries of innovation and design. Our mission is to create impactful digital experiences that resonate with users and elevate brands.
                    </p>
                    <p class="mb-4">
                        We specialize in a range of services including web development, UI/UX design, and digital marketing. Our team of experts collaborates closely with clients to understand their vision and deliver tailored solutions that meet their needs.
                    </p>
                    <p>
                        Join us on our journey to transform ideas into reality and make a lasting impact in the digital world.
                    </p>
                </div>
            </div>
        </div>
    `;

    return section;
}

export default renderAbout;