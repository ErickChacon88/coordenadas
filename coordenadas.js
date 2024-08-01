function convertirPolaresARectangulares() {
    const r = parseFloat(document.getElementById('r').value);
    const theta = parseFloat(document.getElementById('theta').value);
    
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);
    
    document.getElementById('resultRectangulares').innerText = `x: ${x.toFixed(2)}, y: ${y.toFixed(2)}`;
}

function convertirRectangularesAPolares() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan2(y, x);
    
    document.getElementById('resultPolares').innerText = `r: ${r.toFixed(2)}, θ: ${theta.toFixed(2)} rad`;
}
