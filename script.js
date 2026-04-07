const skills = document.querySelectorAll('.skill-fill');

const skillsObserver = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.width = entry.target.classList.contains('html') ? '90%' :
entry.target.classList.contains('css') ? '80%' :
entry.target.classList.contains('js') ? '75%' :
entry.target.classList.contains('network') ? '70%' :
entry.target.classList.contains('cyber') ? '65%' : '0';
}
});
});

skills.forEach(skill => {
skillsObserver.observe(skill);
});

const wrapper = document.querySelector(".timeline-wrapper");
const track = document.querySelector(".timeline-track");

let scrollX = 0;

function autoScroll() {
scrollX += 0.3;

track.style.transform = `translateX(-${scrollX}px)`;

// reset when fully scrolled
if (scrollX > track.scrollWidth / 2) {
scrollX = 0;
}

requestAnimationFrame(autoScroll);
}

autoScroll();