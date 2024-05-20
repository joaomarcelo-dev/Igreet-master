const getRandom = (nr: number) => [1, 2, 3, 4, 5, 6, 7, 8, 9]
.slice() // criar uma cópia para não mudar a array inicial
.sort(() => 0.5 - Math.random()) // misturar
.slice(0, nr) // retirar N elementos da nova array misturada


const utils = {
  getRandom,
}

export default utils;
