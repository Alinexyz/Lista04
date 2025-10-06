const temperatura = 29
const escala = 'Celsius'

if (escala === 'Celsius') {
    const Fahrenheit = (temperatura * 9/5) + 32
    console.log("De celsius para Fahrenheit:" + Fahrenheit + "°F")
} else if (escala === 'Fahrenheit') {
    const Celsius = (temperatura - 32) * 9/5
    console.log("De Fahrenheit para Celsius:" + Celsius + "°C")
}