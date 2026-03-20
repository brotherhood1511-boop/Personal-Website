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