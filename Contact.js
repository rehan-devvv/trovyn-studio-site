function renderContact() {
    const section = document.createElement('section');
    section.id = "contact";
    section.className = "bg-gray-900 text-white py-20";

    section.innerHTML = `
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-6">Get in Touch</h2>
            <p class="text-center mb-12">We'd love to hear from you! Fill out the form below or reach out through our social media channels.</p>
            <form class="max-w-lg mx-auto">
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2" for="name">Name</label>
                    <input type="text" id="name" class="w-full p-3 bg-gray-800 border border-gray-700 rounded" placeholder="Your Name" required />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2" for="email">Email</label>
                    <input type="email" id="email" class="w-full p-3 bg-gray-800 border border-gray-700 rounded" placeholder="Your Email" required />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2" for="message">Message</label>
                    <textarea id="message" class="w-full p-3 bg-gray-800 border border-gray-700 rounded" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded">Send Message</button>
            </form>
        </div>
    `;

    return section;
}

export default renderContact;