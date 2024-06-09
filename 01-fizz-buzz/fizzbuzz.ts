const fizz_buzz = () => {
  for(let x: number = 1; x <= 100; x++){
    (x % 3 == 0 && x % 5 == 0) ? console.log('fizzbuzz') :
    (x % 3 == 0) ? console.log('fizz') :
    (x % 5 == 0) ? console.log('buzz') :
      console.log(x); 
  }
}

fizz_buzz();