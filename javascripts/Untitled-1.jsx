// # 1. ES6 에서의 variable 변동점. 
// let / const / var 

// 1. var

// 1.1 var는 한번 선언한 변수를 다시 선언할 수 있다. 

// 1.1.1 예시
// var name = `Mike`;
// console.log(name) ; // Mike
// var name = `Jane`; 
// console.log(name) ; // Jane
// 문제되지 않음.

// 1.1.1 반례
// let name = `Mike`
// console.log(name); //Mike
// let name = `Jane`
// console.log(name); //Jane
// Identifier `name` has already been daclared
// 1.2 var는 선언하기 전에 사용할 수 있다.
 

// 1.2 var는 선언하기 전에 사용할 수 있다.
// console.log(name);  // undefined
// var name = `Mike`;  // 할당
// 1.2.1 var로 선언한 모든 변수는 code가 실제로 이동하진 않지만 최상위로 끌어올려진 것과같이 동작한다. = hoisting
// 하지만 console.log에서는 undefined가 나타나는데, 선언은 hoisting 하나 할당은 hoisting 하지 않음. 

// 2. let과 const 도 hosting 되지만 Error occured 이유.

// hoisting : Scope 내부 어디에서든 variable 선언은 최상위에 선언한 것과 같이 행동함.
// let , const 는 Temporal Dead Zone 의 영향을 받음.

// 2.1 ex)
// console.log(name);
// const name = `Mike` // 함수 선언 및 할당
// console.log(name) // 사용 가능
// 결과 : cannot access `name` before initialization.
 // 할당을 하기 전에는 사용할 수 없음. 이는 code를 예측 가능하게 하고 잠재적인 bug를 줄일 수 있음.

// 2.1.1 ex)
// let age = 30;
// function showAge(){
//   console.log(age);
//    let age = 20;
// }
// showAge();
// function 문 안의 let으로 인해 error , 이는 hoisting 되지 않아 발생하는문제가 아님. 
// hoisting은 scope 단위로 일어나는데, hoisting이 되지 않았을 경우 첫번째 선언한 age변수가 실행되어야 함. 
// TDZ 안의 두번째 선언한 age가 hoisting 되었기 때문에 error가 발생하는 것.


// 3. 변수의 생성과정 
//    1) 선언 단계 
//    2) 초기화 단계
//    3) 할당 단계 
// 3.1 var는 선언과 초기화가 동시에 됨.  # 초기화 : undefined를 할당 해주는 단계

// 3.2. let은 선언단계와 초기화 단계가 분리되어서 실행 됨.  -> 초기화 단계는 실제 코드에 도달하였을 때 실행되기 때문에 
// reference error 가 발생함. 

// 3.3 const는 선언 , 초기화 , 할당이 동시에 되어야 함. 
// let , var는 선언만 해 두고 나중에 할당하는것을 허용 함. var , let = 변수값 변경이 가능 , const 변경불가한 변수 

// ex)
// let name;
// name = `Mike`;
// var age;
// age = 30;
// const gender; 
// gender = `male`;
// 결과 : syntaxError : Missing initializer in const delaration. : 71 선언하면서 바로 할당하지 않았기 때문. 
  

// 4. Scope 
// var : 함수 스코프 (function-scoped)
// let, const : 블록 스코프(block-scoped)
  // 블록 스코프는 모든 코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효하며 외부에서는 접근할 수 없음. 
    // 즉 코드블록 내에서 선언한 변수는 지역변수임.
    // 여기서 말하는 코드 블록은 : 함수, if문, for문 , while문, try/catch 문 등이 있음. 

// 반면 함수 스코프는 함수 내에서만 선언된 변수만 그 지역 변수가 된다는 의미임. 
// ex.1) 
// const age = 30; 
// if(age>19) {
//   var txt = `성인`;
// }
// console.log(txt); // '성인'
// if 문에서의 var는 지역변수가 아니기 때문에 블록 외에서도 접근 가능함.
// ex.2)
// function add(num1, num2){
//   var result = num1 + num2;
// }
// add(2,3);
// console.log(result);
// uncaught ReferenceError : result is not defined
// function문 안에서의 var은 지역변수이므로 블록 외부에서 접근 불가.
// var 이 유일하게 벗어날 수 없는 scope가 function 이라고 생각하면 됨. 



// # 2.  생성자 함수
// let user = {
//   name : `Mike`,
//   age  : 30; 
// }  - > 객체 리터럴

// 만일 이와같은 객체 리터럴을 같은 형식으로 다수 생성해 내야 할 경우. = 생성자 함수를 사용
 // 생성자 함수는 보통 첫 글자를 대문자로 해서 함수를 만들어 줌. 
// function User(name, age){
//  this.name = name;
//   this.age = age;
// }
//  let user1 = new User(`Mike`, 30);
//  let user2 = new User(`Jane`, 22);
//  let user3 = new User(`Tom`, 17); 
// console.log(user1);
// console.log(user2);
// console.log(user3); 

// & 생성자함수의 작동방식
// function User(name,age){
//   this = {}  // -> 1. 빈 객체를 생성하고 this에 할당한다. 
  
//   this.name = name; // 
//   this.age = age; // -> 2. 함수문들을 실행하면서 this의property들을 추가한다.
//   return this;   // -> 3. this를 반환한다. 
// }
// new 함수명(); // -> 4. new를 붙여 실행할 때마다 위의 알고리즘으로 동작한다.

// 예제 - method 추가법

 // function User(name, age){
 //   this.name = name;
 //   this.age = age;
 //   this.sayName = function(){
 //    console.log(this.name);
 //   }
 // }
 // let user5 = new User(`Han`, 40);
 // user5.sayName();

// 생성자 함수 : create product

// function Item(title,price){
//   // this = {}; -> 이 구문은 보이지 않게 실행됨.
//   this.title = title;
//   this.price = price;
//   this.showPrice  
// }


// 생성자 함수 : 상품 객체 생성

//  function Item(title, Gsm, Size, Type, price){
//     this.title = title;
//     this.price = price;
//      this.Gsm = Gsm
//      this.Size = Size
//      this.type = Type
//      this.showPrice = function(){
//         console.log(`가격은 ${price}원 입니다.`);

//     }

   //  return this; -> 이 구문은 보이지 않게 실행됨.
// }

//  const item1 = new Item('Mr.Copy',`75g`,`A4`,`2500매`,`12,300`);
//  const item2 = new Item('Mr.Copy',`75g`,`A3`,`2500매`,`31,000`);
//  const item3 = new Item('Mr.Copy',`75g`,`A3`,`1250매`,`16,000`);
//  const item4 = new Item('Mr.Copy',`75g`,`B4`,`2500매`,`23,000`);
//  const item5 = new Item('Mr.Copy',`75g`,`B5`,`2500매`,`11,500`);
//  const item6 = new Item('Mr.Copy',`80g`,`A4`,`2500매`,`13,300`);
//  const item7 = new Item('Mr.Copy',`80g`,`A3`,`2500매`,`33,000`);

//  console.log(item1,item2,item3,item4,item5,item6,item7);

// item7.showPrice();


// #3. Computed property

// 3.1 예시
//let a = `age`;

// const user = {
//   name : `Mike`,
//   age : 30 // or [a] : 30  -> 으로 사용해도 됨. 이를 Computed property 라고 함.
// }

// 3.2 예시
// const user = {
//   [1 + 4] : 5,
//  ["안녕"+`하세요`] :`Hello`
// }

//console.log(user)
// user <- {5:5, 안녕하세요 : `Hello`};

// #3.1 Methods

// # 3.1.1 Object.assign()
// # 3.1.2 Object.keys()
// # 3.1.3 Object.values()
// # 3.1.4 Object.entries()
// # 3.1.5 Object.fromEntries()


// #3.1.1 Object.assign(): 객체 복제

 // const user = {
 //  name : `Mike`,
 //   age : 30
 // }
//  const cloneUser = user; 
// cloneUser.name = `Tom`

// console.log(cloneUser)
// console.log(user)
// 이와같이 할 경우 객체 복제가 아닌, 참조값 주소만 두 변수로 접속되는것. 
// -> cloneUser - 변수값 건드릴 시 user 변수값도 변경됨.


// 동일하게 복제하기 위해서는 Object.assign() Method 를 사용해야 함.

// const user = {
// name : `Mike`,
//  age : 30
// }
//const newUser = Object.assign({},user); // 여기서의 빈 객체는 초기값, 두 번째 매개변수부터 들어오는 객체들이 초기값과 병합됨.
//newUser.name = `Tom`

//console.log(user);
//console.log(newUser);

// {} + {name : `Mike` , age : 30 } = 
// {name : `Mike`, age : 30}
// 결과 : user != newUser 

// # 추가 1. Object.assign({},user) 에서 {} 안에 { gender : `male` } 값 추가시 성별값만 있는 객체에 user 객체 안 
// property 가 합산된 객체를 생성함.
// # 추가 2. Object.assign({},user) 에서 {} 안에 값 추가 중 key 가 같은 property가 존재 할 시 덮어쓰게 됨.
// # 추가 3. Object.assign 으로 2개 이상의 객체를 합 할 수 있음. 
// # 추가 3의 예시.

// const user = {
//   name : `Mike`
// }
// const info1 = {
//   age : 30
// }
// const info2 = {
//   gender : `male`
// }
// Object.assign(user, info1,info2);
// console.log(user);
// 결과 : user 값에 info1,info2의 property 붙음.

// # 3.1.2 Object.keys() : 키 배열 반환

// const user = {
//   name : `Mike`,
//   age : 30,
//   gender : `male` 
// }
// console.log(Object.keys(user));
            
// # 3.1.3 Object.values() : 값 배열 반환

// const user1 = {
//   name : `Mike`,
//   age : 30,
//   gender : `male` 
// }
// console.log(Object.values(user1));
            
// # 3.1.4 Object.entries() : 키/값 배열 반환
// const user = {
//   name : `Mike`,
//   age : 30,
//   gender : `male`,
// }
// console.log(Object.entries(user));


// # 3.1.4 Object.fromentries() : 키/값 배열을 객체로
// const arr =
//      [
//        [`name`,`Mike`],
//        [`age`,30],
//        [`gender`,`male`]
//      ];
// console.log(Object.fromEntries(arr));

// let n = "name";
// let a = "age";

// const user =   {
//  [n] : "Mike",
//    [a] : 30,
//    [1 + 4] : 5,
// };
// console.log(user);



// function makeObj(key , val){
//    return{
//        [key] : val
//    };
// }

// const obj = makeObj('나이',33);;

// console.log(obj)   
// 어떤것이 key로 올지 모르는 객체를 만들 때에 유용함.



// const user = {
//     name : "Mike",
//     age : 30,
// };

// const user2 = Object.assign({},user) 
// user2.name = 'Tom';

 
// console.log(user);
// console.log(user2);

// const user = {
//     name : "Mike",
//     age : 30,
// };

// const result = Object.keys(user);
// const result2 = Object.values(user); 
// const result3 = Object.entries(user);

// console.log(result);
// console.log(result2);
// console.log(result3);

//  let arr =  [
//   ['mon', '월']
//   ['tue','화']
//   ]

// const result4 = Object.fromEntries(arr);

// console.log(result4);


// # 4. symbol(심볼)
// property key : 문자형


