const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

class Cuadrado {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    dibujar() {
        ctx.strokeStyle = 'black'; // Color del borde negro
        ctx.strokeRect(this.x, this.y, this.size, this.size);
    }
}

class Triangulo {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    dibujar() {
        ctx.strokeStyle = 'black'; // Color del borde negro
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.size / 2);
        ctx.lineTo(this.x - this.size / 2, this.y + this.size / 2);
        ctx.lineTo(this.x + this.size / 2, this.y + this.size / 2);
        ctx.closePath();
        ctx.stroke();
    }
}

class Circulo {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    dibujar() {
        ctx.strokeStyle = 'black'; // Color del borde negro
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
    }
}

function drawFigure() {
    const selectedFigure = document.getElementById('figureSelector').value;
    clearCanvas();

    const centerX = 200; // Centro del canvas
    const centerY = 200; // Centro del canvas

    let figura;

    if (selectedFigure === 'cuadrado') {
        figura = new Cuadrado(centerX - 50, centerY - 50, 100);
    } else if (selectedFigure === 'triangulo') {
        figura = new Triangulo(centerX, centerY, 100);
    } else if (selectedFigure === 'circulo') {
        figura = new Circulo(centerX, centerY, 50);
    }

    if (figura) {
        figura.dibujar();
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('figureSelector').selectedIndex = 0; // Resetea el selector
}

function setProjection(type) {
    console.log(`Proyección: ${type}`); // Placeholder para la función de proyección
}
