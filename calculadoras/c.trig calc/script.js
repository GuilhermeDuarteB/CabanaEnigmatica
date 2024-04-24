function calculateTrigFunctions() {
    const angle = parseFloat(document.getElementById("angleInput").value);
    const radians = (angle * Math.PI) / 180;
    const tangent = Math.tan(radians);
    const sine = Math.sin(radians);
    const cosine = Math.cos(radians);

    document.getElementById("sineResult").textContent = sine.toFixed(2);
    document.getElementById("cosineResult").textContent = cosine.toFixed(2);

    const angleMarker = document.getElementById("angleMarker");
    const circle = document.getElementById("circle");

    const markerAngle = 90 - angle;
    angleMarker.style.transform = `rotate(${markerAngle}deg)`;

    if (angle === 90 || angle === 270) {
        document.getElementById("tangentResult").textContent = "Esse ângulo não tem tangente.";
    } else {
        document.getElementById("tangentResult").textContent = tangent.toFixed(2);
    }
}