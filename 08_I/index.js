//cjs


//ISM
//import 'dotenv/config';

//console.log('dalam mode : ${process.env.SECRET_KEY}');

//async functionb ambilKutipan() {
//    try{
2//       const fetched = await fecth(process.env.BASE_API);
//        const data = await fetched.json();
//
//        return data;
//    } catch (console.error();
//    )
//    }
require('dotenv').config();

function ambilKutipan() {
  try {
    fetch(process.env.BASE_API)
      .then((response) => response.json())
      .then((data) => console.log(data
        ['data']));
  } catch (error) {
    console.error(error);
  }
}

ambilKutipan();