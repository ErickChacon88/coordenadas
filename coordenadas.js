// Función para recibir los datos y llamar a la función de cálculo para coordenadas polares a rectangulares
function recibirDatosPolaresARectangulares() {
    const r = parseFloat(document.getElementById('r').value);
    const theta = parseFloat(document.getElementById('theta').value);

    // Validación de entrada
    if (isNaN(r) || isNaN(theta)) {
        document.getElementById('resultRectangulares').innerText = 'Por favor, introduce valores válidos para r y θ.';
        return;
    }

    // Llamar a la función de cálculo
    calcularPolaresARectangulares(r, theta);
}

// Función para calcular coordenadas rectangulares a partir de coordenadas polares
function calcularPolaresARectangulares(r, theta) {
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);

    // Mostrar resultados
    document.getElementById('resultRectangulares').innerText = `x: ${x.toFixed(2)}, y: ${y.toFixed(2)}`;
}

// Función para recibir los datos y llamar a la función de cálculo para coordenadas rectangulares a polares
function recibirDatosRectangularesAPolares() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);

    // Validación de entrada
    if (isNaN(x) || isNaN(y)) {
        document.getElementById('resultPolares').innerText = 'Por favor, introduce valores válidos para x y y.';
        return;
    }

    // Llamar a la función de cálculo
    calcularRectangularesAPolares(x, y);
}

// Función para calcular coordenadas polares a partir de coordenadas rectangulares
function calcularRectangularesAPolares(x, y) {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan2(y, x);

    // Mostrar resultados
    document.getElementById('resultPolares').innerText = `r: ${r.toFixed(2)}, θ: ${theta.toFixed(2)} rad`;
}
