// function test1(){//деклоративное
//   console.log(this);

// };
// const test2 =function(){//выражение
// console.log(this);
// };
// const test3=()=>{//стрелочная функция
//   console.log(this);
// }
/////////////////////////////////////////
// const sum1 = (...args)=>{
//   let result=null;
//   for(let i=0;i<args.length;i++){
//     result+=args[i];
//   }
//   return result;
// };
// const sum2 = (...args)=>{
//   let result=null;
//   args.forEach((number)=>{result+=number;})
// };
// const sum3 =(...args)=> args.reduse((result,number)=>result+number,null);
// const arr=[1,2,5,3,5,4,8];
// console.log(sum3(...arr));

// const factorial=(num)=>{
//   if(num===1||num===0){
//     return 1;
//   }
//   return num*factorial(num-1);
// };
// console.log(factorial(5));
// const f =(a,b)=>a>b?a:b;
// const art=f(5,7);
// console.log(art);
// const showArgs=(a,b,...c)=>{
//   console.log(c);
//   c.forEach((item)=>{
//     console.log(this);///если нет обьекта,то THIS-undefined
//   })
// };
////////////////
//17.05.22
////////////////
//Примитивы
// const check= new Boolean(true);
// console.log(check);

// if(check && check.valueOf()){
//   console.log('yes');
// }else console.log('no');

// const str= 'tO beOR Not TO bE';
// function string(str,separator){
//   let temp=str.split(separator);
// let tempArr=temp[0].toUpperCase();
// for(let i=0;i<tempArr.length;i++){

// }
// }
////////////////////////////////////
//19,05,22
////////////////////////////


