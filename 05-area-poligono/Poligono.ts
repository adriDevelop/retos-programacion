class Poligono {
  constructor(
    public base: number = 0,
    public lado: number = 0,
    public altura: number = 0,
  ){}

  
}

class Cuadrado extends Poligono {
  constructor(base: number, lado: number){
    super(base, lado);
  }
}

class Rectangulo extends Poligono {
  constructor(base: number, lado: number){
    super(base, lado);
  }
}

class Triangulo extends Poligono {
  constructor(base: number,altura: number){
    super(base, altura);
  }
}

const calculaArea = (poligono: Poligono):number => {
  let area = 0;
  (poligono instanceof(Triangulo))? area =(poligono.base * poligono.lado) / 2:
  (poligono instanceof(Cuadrado)) ? area = poligono.base * poligono.lado:
  (poligono instanceof(Rectangulo)) ? area = poligono.base * poligono.lado:
  area = 0;
  return area;
}

const triangulo = new Triangulo(20, 20);
const cuadrado = new Cuadrado(20, 20);
const reactangulo = new Rectangulo(20, 40);

console.log(calculaArea(triangulo));
console.log(calculaArea(cuadrado));
console.log(calculaArea(reactangulo));