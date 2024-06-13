const img = new Image();

img.src = './06-aspect-ratio/Google.jpg'
const altura: number = img.height;
const anchura: number = img.width;

console.log('El aspect ratio de la imagen es: ' + anchura + ':' + altura);