let isBaseer = true;

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}

function changeText() {
    const typingTextElement = document.getElementById("typing-text");
    if (isBaseer) {
        typingTextElement.textContent = "Software Developer";
        typingTextElement.style.color = document.body.classList.contains('dark-theme') ? "rgb(255, 69, 0)" : "BlueViolet";
    } else {
        typingTextElement.textContent = "Baseer";
        typingTextElement.style.color = document.body.classList.contains('dark-theme') ? "BlueViolet" : "black";
    }
    isBaseer = !isBaseer;
}

window.addEventListener('scroll', () => {
    document.querySelectorAll('.card').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
});

setInterval(changeText, 3000);
