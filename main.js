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

// document.addEventListener('DOMContentLoaded', () => {
//     const createRain = () => {
//         const rainDiv = document.createElement('div');
//         rainDiv.classList.add('rain');
//         rainDiv.innerText = Math.random() < 0.5 ? '1' : '0';
//         rainDiv.style.left = Math.random() * (window.innerWidth - 45) + 'px';
//         rainDiv.style.zIndex = 1;
//         document.body.appendChild(rainDiv);

//         setTimeout(() => {
//             rainDiv.remove();
//         }, 2000);
//     };

//     setInterval(createRain, 50);
// });

document.addEventListener('DOMContentLoaded', function () {
    const aboutMeText = "\n\nHello! I’m Ryan Meziane, a devoted computer science enthusiast\n" +
        "with a keen interest in blending technology and space exploration.\n" +
        "As a diligent programmer, I have honed my skills in C#, JavaScript, and Java,\n" +
        "offering innovative solutions and a comprehensive understanding\nof software development." +
        "My educational journey in \ncomputer science began at John Abbott College,n" +
        "where I embraced the\ncomplexities and intricacies of programming.\n" +
        "I'm driven by the challenges in technology and constantly seek to \npush the boundaries" +
        "of what's possible in the digital realm.\n\nRyanMeziane:/$ cat info.txt\n" +
        "Please find contact links located at the top of the page \nfor Linkedin and Github\n\nRyanMeziane:/$";
    const info = "";
    let i = 0;
    const speed = 1;
    const aboutMeContent = document.getElementById('about-me-content');
    aboutMeContent.innerHTML += "RyanMeziane:/$ cat AboutMe.txt";

    function typeWriter() {
        if (i < aboutMeText.length) {
            aboutMeContent.innerHTML += aboutMeText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        else
            aboutMeContent.innerHTML += '<span class="blinking-cursor">_</span>';
    }

    typeWriter();
});



