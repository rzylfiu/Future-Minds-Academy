function getRandomColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    const alpha = (Math.random() * 0.5 + 0.5).toFixed(2); 
    return `rgba(${r}, ${g}, ${b}, ${alpha})`; 
}

function createCircle() {
    const circle = document.createElement('div');
    const size = Math.random() * 130 + 20; 

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.backgroundColor = getRandomColor();
    circle.style.left = `${Math.random() * 100}vw`; 
    circle.style.top = `${Math.random() * 100}vh`; 

    document.body.appendChild(circle);
}


for (let i = 0; i < 300; i++) {
    createCircle();
}
