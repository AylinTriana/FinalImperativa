const autos = [
  {
    marca: "Toyota",
    modelo: 2022,
    color: "rojo",
  },
  {
    marca: "Renault",
    modelo: 2015,
    color: "gris",
  },
  {
    marca: "Peugeot",
    modelo: 2017,
    color: "rojo",
  },
  {
    marca: "Fiat",
    modelo: 2021,
    color: "negro",
  },
];

function ejercicioNum1(autos) {

  let carros = [];

  for (let i = 0; i < autos.length; i++) {

    if (autos[i].modelo >= 2020) {
      carros.push(autos[i]);
    }

  }

  return carros;
}

let resultado = ejercicioNum1(autos);
console.log(resultado);


let estudiantes = [
  {
    nombre: "juan",
    activo: true,
    notaPromedio: 5,
  },
  {
    nombre: "maria",
    activo: false,
    notaPromedio: 3,
  },
  {
    nombre: "florencia",
    activo: true,
    notaPromedio: 9,
  },
  {
    nombre: "carlos",
    activo: false,
    notaPromedio: 8,
  },
  {
    nombre: "jose",
    activo: true,
    notaPromedio: 6,
  },
];

const ordenar = (arr) => {
  let temporal;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].notaPromedio < arr[j + 1].notaPromedio) {
        temporal = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temporal;
      }
    }
  }
};

ordenar(estudiantes);
console.log(estudiantes);

let matrix = [
  [1, 4, 7, 4],
  [5, 7, 6, 2],
  [6, 2, 3, 3],
  [2, 6, 8, 1],
]

function mat(matrix, posicion) {

  let nuevaMatrix = [];

  for(let i = 0; i < matrix.length; i++ ) {
    nuevaMatrix.push ( matrix[i][posicion])
  }

  return nuevaMatrix

}; 

let matFilaTres = mat(matrix, 3)
console.log(matFilaTres)


function impares (matrix) {

  for(let i = 0 ; i < matrix.length; i++ ){ 

    for(let j = 0; j < matrix[i].length; j++){
      if( matrix[i][j] % 2 !== 0){

        matrix [i][j] = 0

      }
      
    }

  }
};

impares(matrix)
console.log(matrix);




