document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.05
    });

    const sections = document.querySelectorAll('.portfolio-section');

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const createRain = () => {
        const rainDiv = document.createElement('div');
        rainDiv.classList.add('rain');
        rainDiv.innerText = Math.random() < 0.5 ? '|' : '|';
        rainDiv.style.left = Math.random() * (window.innerWidth - 40) + 'px';
        document.body.appendChild(rainDiv);

        setTimeout(() => {
            rainDiv.remove();
        }, 2000);
    };

    setInterval(createRain, 50);
});

document.addEventListener('DOMContentLoaded', function () {
    const aboutMeText = "\n\nHello! I’m Ryan Meziane, a computer science enthusiast\n" +
        "with a passion for merging the worlds of technology and the cosmos.\n" +
        "As a goal-oriented programmer, I specialize in C#, JavaScript, and \nJava, " +
        "bringing forth a comprehensive skill set and innovative solutions";
    let i = 0;
    const speed = 20;
    const aboutMeContent = document.getElementById('about-me-content');
    aboutMeContent.innerHTML += "RyanMeziane:/$ cat AboutMe.txt";

    function typeWriter() {
        if (i < aboutMeText.length) {
            aboutMeContent.innerHTML += aboutMeText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            aboutMeContent.innerHTML += '<span class="blinking-cursor">_</span>';
        }
    }

    typeWriter();
});


