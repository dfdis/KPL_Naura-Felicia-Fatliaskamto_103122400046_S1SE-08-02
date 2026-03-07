//Tulislah sebuah fungsi yang menerima bilangan N dan mencetak penjumalahan dari 1 hingga N.
//contohnya, jika N = 5, maka fungsi akan mencetak 15 (dalam hal ini, 1 + 2 + 3 + 4 + 5).

//loop
//function sumValues(N) {
//   let sum = 0;
//   for (let i = 1; i <= N; i++) {
//        sum = sum + i;
//   }
//   return sum;
//  }

// console.log(sumValues(5));

//math
function sumValues(N) {
    return (N * (N + 1)) / 2;
}
console.log(sumValues(5));