const particles = document.querySelector('.particles');

for(let i = 0; i < 80; i++) {

    const particle = document.createElement('span');

    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';

    particle.style.animationDuration =
        Math.random() * 5 + 3 + 's';

    particle.style.width = particle.style.height =
        Math.random() * 4 + 2 + 'px';

    particles.appendChild(particle);
}
