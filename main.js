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
        rainDiv.innerText = Math.random() < 0.5 ? '0' : '1';
        //rainDiv.style.fontSize = Math.random() * 0.5 + 1 + 'rem';
        rainDiv.style.left = Math.random() * window.innerWidth + 'px';
        document.body.appendChild(rainDiv);

        setTimeout(() => {
            rainDiv.remove();
        }, 2000);
    };

    setInterval(createRain, 50);
});

document.addEventListener('DOMContentLoaded', function () {
    const aboutMeText = "\nHello! I’m Ryan Meziane, a computer science enthusiast\n" +
        "with a passion for merging the worlds of technology and the cosmos.\n" +
        "As a goal-oriented programmer, I specialize in C#, JavaScript, and \nJava, " +
        "bringing forth a comprehensive skill set and innovative solutions";
    let i = 0;
    const speed = 50; // Speed of typing, in milliseconds
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


