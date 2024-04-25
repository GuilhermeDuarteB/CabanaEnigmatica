function calcularLadosManual() {
    var alphaInput = document.getElementById('alpha');
    var xInput = document.getElementById('x');
    var yInput = document.getElementById('y');
    var zInput = document.getElementById('z');

    var alpha = parseFloat(alphaInput.value);

    if (isNaN(alpha)) {
        alert("Por favor, insira um ângulo alfa válido.");
        return;
    }

    if (xInput.value !== "") {
        var x = parseFloat(xInput.value);
        var z = x / Math.cos(alpha * (Math.PI / 180)); // Corrigido: z = x / cos(alfa)
        var y = Math.sqrt(z * z - x * x); // Corrigido: y = sqrt(z^2 - x^2)
        yInput.value = y.toFixed(2);
        zInput.value = z.toFixed(2);
    } else if (yInput.value !== "") {
        var y = parseFloat(yInput.value);
        var z = y / Math.sin(alpha * (Math.PI / 180)); // Corrigido: z = y / sin(alfa)
        var x = Math.sqrt(z * z - y * y); // Corrigido: x = sqrt(z^2 - y^2)
        xInput.value = x.toFixed(2);
        zInput.value = z.toFixed(2);
    } else if (zInput.value !== "") {
        var z = parseFloat(zInput.value);
        var x = z * Math.cos(alpha * (Math.PI / 180)); // Corrigido: x = z * cos(alfa)
        var y = Math.sqrt(z * z - x * x); // Corrigido: y = sqrt(z^2 - x^2)
        xInput.value = x.toFixed(2);
        yInput.value = y.toFixed(2);
    }
}
