/* Lo primero que debemos hacer es crear 
un abecedario de letras en morse.
*/

const abecedario = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '-',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
  0: '-----'
};

// Ahora, ya podemos trabajar con el.
const textoIntroducido: string = 'Bioque';
let textoTraducido: string = '';
const texToArray:string[] = textoIntroducido.split('');

console.log(texToArray);

for(let a of texToArray){
  (a.toLowerCase() == 'a')? textoTraducido += abecedario.a + " ":
  (a.toLowerCase() == 'b')? textoTraducido += abecedario.b +  " ":
  (a.toLowerCase() == 'c')? textoTraducido += abecedario.c +  " ":
  (a.toLowerCase() == 'd')? textoTraducido += abecedario.d +  " ":
  (a.toLowerCase() == 'e')? textoTraducido += abecedario.e +  " ":
  (a.toLowerCase() == 'f')? textoTraducido += abecedario.f +  " ":
  (a.toLowerCase() == 'g')? textoTraducido += abecedario.g +  " ":
  (a.toLowerCase() == 'h')? textoTraducido += abecedario.h +  " ":
  (a.toLowerCase() == 'i')? textoTraducido += abecedario.i +  " ":
  (a.toLowerCase() == 'j')? textoTraducido += abecedario.j +  " ":
  (a.toLowerCase() == 'k')? textoTraducido += abecedario.k +  " ":
  (a.toLowerCase() == 'l')? textoTraducido += abecedario.l +  " ":
  (a.toLowerCase() == 'm')? textoTraducido += abecedario.m +  " ":
  (a.toLowerCase() == 'n')? textoTraducido += abecedario.n +  " ":
  (a.toLowerCase() == 'n')? textoTraducido += abecedario.n +  " ":
  (a.toLowerCase() == 'o')? textoTraducido += abecedario.o +  " ":
  (a.toLowerCase() == 'p')? textoTraducido += abecedario.p +  " ":
  (a.toLowerCase() == 'q')? textoTraducido += abecedario.q +  " ":
  (a.toLowerCase() == 'r')? textoTraducido += abecedario.r +  " ":
  (a.toLowerCase() == 's')? textoTraducido += abecedario.s +  " ":
  (a.toLowerCase() == 't')? textoTraducido += abecedario.t +  " ":
  (a.toLowerCase() == 'u')? textoTraducido += abecedario.u +  " ":
  (a.toLowerCase() == 'v')? textoTraducido += abecedario.v +  " ":
  (a.toLowerCase() == 'w')? textoTraducido += abecedario.w +  " ":
  (a.toLowerCase() == 'x')? textoTraducido += abecedario.x +  " ":
  (a.toLowerCase() == 'y')? textoTraducido += abecedario.y +  " ":
  (a.toLowerCase() == 'z')? textoTraducido += abecedario.z +  " ":
  (a.toLowerCase() == '1')? textoTraducido += abecedario[1] +  " ":
  (a.toLowerCase() == '2')? textoTraducido += abecedario[2] +  " ":
  (a.toLowerCase() == '3')? textoTraducido += abecedario[3] +  " ":
  (a.toLowerCase() == '4')? textoTraducido += abecedario[4] +  " ":
  (a.toLowerCase() == '5')? textoTraducido += abecedario[5] +  " ":
  (a.toLowerCase() == '6')? textoTraducido += abecedario[6] +  " ":
  (a.toLowerCase() == '7')? textoTraducido += abecedario[7] +  " ":
  (a.toLowerCase() == '8')? textoTraducido += abecedario[8] +  " ":
  (a.toLowerCase() == '9')? textoTraducido += abecedario[9] +  " ":
  (a.toLowerCase() == '0')? textoTraducido += abecedario[0] +  " ":
  textoTraducido += ' ';
}

console.log(textoTraducido);

