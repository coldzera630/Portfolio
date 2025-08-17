document.addEventListener('DOMContentLoaded', () => {
    const techProjects = [
        {
            title: 'Digital Strategy for SBI YONO',
            role: 'Consulting Project',
            description: 'Developed a comprehensive digital strategy for the SBI YONO application, focusing on enhancing user engagement and market penetration.',
            image: 'https://placehold.co/600x400/f97316/ffffff?text=SBI+YONO',
            link: '#',
            github: 'https://github.com/coldzera630/Digital-Strategy-SBI-YONO'
        },
        {
            title: 'Netflix Consulting Project',
            role: 'Data Analysis Project',
            description: 'Conducted a consulting project for Netflix, analyzing user data to provide strategic insights for content acquisition and user retention.',
            image: 'https://placehold.co/600x400/ef4444/ffffff?text=Netflix+Project',
            link: '#',
            github: 'https://github.com/coldzera630/Netflix-Consulting-Project'
        },
        {
            title: 'Neural Network Model',
            role: 'Machine Learning Project',
            description: 'Built and trained a neural network for classification and forecasting tasks, demonstrating skills in machine learning and predictive modeling.',
            image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Neural+Network',
            link: '#',
            github: 'https://github.com/coldzera630/Neural-Network-Classification-and-Forecasting'
        },
        {
            title: 'Srimad Bhagavatam Chatbot',
            role: 'AI Project',
            description: 'Developed an AI-powered chatbot providing users with insights and answers from the Srimad Bhagavatam scriptures.',
            image: 'https://placehold.co/600x400/3b82f6/ffffff?text=AI+Chatbot',
            link: '#',
            github: 'https://github.com/coldzera630/Srimad-Bhagavatam-Chatbot'
        },
        {
            title: 'E-Commerce Website',
            role: 'Full-Stack Project',
            description: 'Created a complete e-commerce platform using the MERN stack, featuring product listings, a shopping cart, and user authentication.',
            image: 'https://placehold.co/600x400/22c55e/ffffff?text=E-Commerce',
            link: '#',
            github: 'https://github.com/coldzera630/E-Commerce-Website'
        },
        {
            title: 'This Portfolio Website',
            role: 'Personal Project',
            description: 'A dynamic personal portfolio built from scratch using HTML, Tailwind CSS, and a Node.js/Express backend to handle contact form submissions.',
            image: 'https://placehold.co/600x400/64748b/ffffff?text=Portfolio',
            link: '#',
            github: 'https://github.com/coldzera630/Portfolio'
        },
    ];
    const techTypedStrings = ['Fullstack Developer', 'MERN Stack Engineer', 'Software Developer'];
    
    const currentProjects = techProjects;
    const currentTypedStrings = techTypedStrings;
    
    const skills = [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'C Programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'NI LabVIEW', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/labview/labview-original.svg' },
    ];

    function renderSkills() {
        const container = document.getElementById('skills-container');
        if (!container) return;
        container.innerHTML = skills.map(skill =>
            `<div class="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:shadow-lg transition-all">
                <img src="${skill.icon}" alt="${skill.name}" class="h-16 w-16">
                <span class="font-medium">${skill.name}</span>
            </div>`
        ).join('');
    }

    function renderProjects() {
        const container = document.getElementById('projects-container');
        if (!container) return;
        container.innerHTML = currentProjects.map(project =>
            `<div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden group">
                <div class="relative overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">${project.title}</h3>
                    <p class="text-sm font-medium text-royal-600 dark:text-intense-400 mb-2">${project.role}</p>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">${project.description}</p>
                    <div class="flex justify-between items-center">
                        <a href="${project.link}" target="_blank" class="text-royal-600 dark:text-intense-400 font-semibold hover:underline">Live Demo <i data-lucide="arrow-up-right" class="inline h-4 w-4"></i></a>
                        <a href="${project.github}" target="_blank" class="text-gray-500 hover:text-royal-500 dark:hover:text-intense-400"><i data-lucide="github" class="h-6 w-6"></i></a>
                    </div>
                </div>
            </div>`
        ).join('');
    }

    renderSkills();
    renderProjects();
    lucide.createIcons();

    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: currentTypedStrings,
            typeSpeed: 70,
            backSpeed: 50,
            loop: true
        });
    }

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            formStatus.innerHTML = '';
            const formData = { name: contactForm.name.value, email: contactForm.email.value, subject: contactForm.subject.value, message: contactForm.message.value };
            try {
                const response = await fetch('http://localhost:5000/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
                const result = await response.json();
                if (result.success) {
                    formStatus.innerHTML = `<p class="text-green-500">${result.message}</p>`;
                    contactForm.reset();
                } else {
                    formStatus.innerHTML = `<p class="text-red-500">${result.message}</p>`;
                }
            } catch (error) {
                console.error("Error sending message:", error);
                formStatus.innerHTML = `<p class="text-red-500">An unexpected error occurred. Please try again.</p>`;
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }
        });
    }
});