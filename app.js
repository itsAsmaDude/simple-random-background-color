let button = document.getElementById('button');
let color = document.getElementById('color');
let colors = ['#500724', '#466', '#555', '#456', '#777', '#a78bfa', '#455', '#f87171', '#d97706', '#4ade80', '#6366f1']


function changeBgColor(){
    button.addEventListener('click', () => {
        document.body.style.background = colors[Math.floor(Math.random() * colors.length)]
        color.textContent = document.body.style.background
    })
}

changeBgColor()