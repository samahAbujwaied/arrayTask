// 'use strict'
// alert('welcome go to inspect to see outbut');
// let num=[100,20,33,45,44,37,10,2,3,5,15,12,31,32,88,94,62,63,77,66,27,1,7,8,9];
// let even=0 , odd=0;
// for(let i=0;i<25;i++)
// {
// if(num[i]%2 ==0)
// even++;
// else if(num[i]%2 !=0)
// odd++;
// }
// console.log('number of even numbers is  ' + even);
// console.log('number of odd numbers is ' + odd);

let start='*';
let userInput=prompt('please Enter the number you want to starts');

for(let i=1;i<=userInput;i++)
{
    for(let j=1 ; j<=i;j++)
    {
        document.write('*') ;
    }
    document.write('<br/>');
}