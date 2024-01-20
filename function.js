function printmultiplys(index){
  console.log("index",index)

  console.log(`${double[index].double} multiply ${double[index].multiply} is ${double[index].equal}`);

}



printmultiplys(0)
printmultiplys(1)
printmultiplys(2)
printmultiplys(3)
printmultiplys(4)
printmultiplys(5)



let index = "0"
let double = [
    {
      double:2,
      multiply:"2*2",
      equal:4 
    },
    {
        double:2,
        multiply:"2*6",
        equal:12 
    },
    {
        double:2,
        multiply:"2*8",
        equal:16 
    },
    {
        double:2,
        multiply:"2*12",
        equal:24 
    },
    {
        double:2,
        multiply:"2*16",
        equal:32 
    },
    {
        double:2,
        multiply:[],
        equal:[] 
    }

];

console.log(double);