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
        var y = Math.tan(alpha * (Math.PI / 180)) * x;
        var z = Math.sqrt(x * x + y * y);
        yInput.value = y.toFixed(2);
        zInput.value = z.toFixed(2);
    } else if (yInput.value !== "") {
        var y = parseFloat(yInput.value);
        var x = y / Math.tan(alpha * (Math.PI / 180));
        var z = Math.sqrt(x * x + y * y);
        xInput.value = x.toFixed(2);
        zInput.value = z.toFixed(2);
    } else if (zInput.value !== "") {
        var z = parseFloat(zInput.value);
        var x = z / Math.sqrt(1 + Math.tan(alpha * (Math.PI / 180)) ** 2);
        var y = Math.tan(alpha * (Math.PI / 180)) * x;
        xInput.value = x.toFixed(2);
        yInput.value = y.toFixed(2);
    }
}
