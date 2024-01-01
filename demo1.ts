// 1
// let a =[];
// let b =[];
// console.log(a==b);
// console.log(a===b)

// false
// false

// 2
// let a=[];
// let b=a;
// console.log(a==b);
// console.log(a===b);

// true
// true

// 3
// let a=[20];
// let b=[20];
// console.log(a[0]==b[0]);
// console.log(a[0]===b[0]);

// true 
// true

// 4
// let z=[1,2,3,4]
// let a = {name:"anil"}
// console.log(...z);

// 1234

// 5
// console.log(typeof NaN);

// number

// 6
// let data =10 - -10;
// console.log(data);

// 20

// 7
// const set =new Set([1,1,2,3,4]);
// console.log(set);

// Set(4){1,2,3,4}

// 8
// const data = ["Peter","anil","sam"];
// const[y]=data;
// console.log(y)

// peter

// 9
// const data =["peter","anil","sam"];
// const [y,z]=data;
// console.log(y,z);

// peter anil

// 10
// const data =["peter","anil","sam"];
// const [,y]=data;
// console.log(y)

// anil

// 11
// const data=["peter","Anil","sam"];
//  const [_,_,y] = data;
// console.log(y);

// sam

// 12
// const data ={name:"anil",age:29,skills:"js"};
// const{age}=data;
// console.log(age)

// 29

// 13
// let data = {name:"anil",age:29,skill:"Js"};
// let info ={city:"noida",mail:"anil@test.com"};
// data={...data,...info}
// console.log(data)

// {name: 'anil', age: 29, skill: 'Js', city: 'noida', mail: 'anil@test.com'}

// 14
// let data = {name:"anil",age:29,skill:"Js"};
// let info ={city:"noida",skill:"node"};
// data={...data,...info}
// console.log(data)

// {name: 'anil', age: 29, skill: 'node', city: 'noida'}

// const result = false || false || null;
// console.log(result);

// null

// 15
// const result = null || false || '';
// console.log(result)

// empty string

// 16
// const result = null || '' || false;
// console.log(result)

// false

// 17
// const result = [] || 0 || true;
// console.log(result)

// []

// 18
// function smallvalue(x,y,z){
//     return x+y+z;
// }
// console.log(smallvalue(...[1,2,3]))

// 6

// 19
// let person ={name:"vikas"};
// Object.seal(person);
// console.log(person);
// {name: 'vikas'}

// 20
// remove first element
// let data =[2,9,0,10]
// data.shift
// console.log(data);

// (4) [2, 9, 0, 10]


// 21
// Remove last element
// let data =[2,9,0,10]
// data.pop()
// console.log(data);

// (3) [2, 9, 0]

// 22
// check odd or even
// let a =30;
// console.log(a%2)

// o  zero means Even

// 23
// let data="true";
// console.log(typeof !data)

// boolean

// 24
// let data ="true";
// console.log(!data);
// console.log(!!data);

// false
// true

// 25
// let data=["anil","peter","bruce"];
// delete data[1];
// console.log( data.length);

// 26
// let a=[1,2,3];
// let b=[4,5,6];
// let c=[...a,...b];
// console.log(c)

// (6) [1, 2, 3, 4, 5, 6]

// 27
// let c=3**3;
// console.log(c);

// 27

// 28
// let c=3*3;
// console.log(c);

// 9

// 29
// let a ="like";
// let b ='like';
// console.log(a===b);

// true

// 30
// let a=1;
// let c=2;
// console.log(--c==a);

// true

// 31
// console.log(3*3)
// console.log(3**3)

// 9
// 27

// 32
// console.log(+true);
// console.log(typeof+true);

// 1
// number

// 33
// console.log(!"anil");
// console.log(typeof("anil"));

// false
// string

// 34
// let c={name:"peter"};
// let d;
// d=c;
// c.name="vikas"
// console.log(d.name)

// vikas

// 35
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,"2"))

// 12

// 36
// let number=0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// 0
// 2
// 2

// 37
// for(let i=1; i<5; i++){
//     if(i===3)continue;
//     console.log(i);
// }

// 1
// 2
// 4

//38
//  console.log(!!null);
//  console.log(!!"");
//  console.log(!!1)

 //false
 //true

//39
// const sum = eval('10*10+5');
// console.log(sum)

//40
//const result = null || '' || false;
//console.log(result)

//false



