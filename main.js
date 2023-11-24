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

document.addEventListener('DOMContentLoaded', function () {
    const aboutMeText = "\n\nHello! I’m Ryan Meziane, a passionate computer science student deeply fascinated by the mysteries of space and the intricate laws of physics. My journey in computer science is driven by a curiosity to understand how things work, much like the enigmatic cosmos that always seems to intrigue and inspire me. I find immense joy in coding and solving complex problems, believing that every line of code is a small step towards a larger discovery.\n\n" +
        "My technical skills are rooted in a diverse range of programming languages, including C#, Java, JavaScript, Kotlin, and Python. This broad skill set allows me to approach problems from various angles, crafting solutions that are as efficient as they are creative. Whether I’m developing a robust Java application, designing an interactive website with JavaScript, or exploring data analytics with Python, I bring the same level of enthusiasm and dedication. For me, programming is not just about writing code; it’s about weaving logic and creativity to build something truly remarkable.\n\nRyanMeziane:/$";
    let i = 0;
    const speed = 1;
    const aboutMeContent = document.getElementById('about-me-content');
    const paragraph = document.createElement('p');
    paragraph.innerHTML = "RyanMeziane:/$ cat about-me.txt"
    aboutMeContent.appendChild(paragraph);

    function typeWriter() {
        if (i < aboutMeText.length) {
            paragraph.innerHTML += aboutMeText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        else {
            //paragraph.innerHTML += '<span class="blinking-cursor">_</span>';
            createTextInput();
        }
    }
    
    function createTextInput() {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'terminal-input';
        input.placeholder = '';
    
        paragraph.appendChild(input);
    
        //input.focus();
    }
    

    typeWriter();
});

function copyEmailToClipboard() {
    navigator.clipboard.writeText('ryanmeziane@hotmail.com').then(function() {
        var notification = document.getElementById('copyNotification');
        notification.style.display = 'inline';
        setTimeout(function() {
            notification.style.display = 'none';
        }, 2000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}



