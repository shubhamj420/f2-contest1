/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  arr.map(function (a) {
    if(a.profession === "developer"){
      console.log(a);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(function (a) {
    if(a.profession === "developer"){
      console.log(a);
    }
   });
}

function addData() {
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
 console.log(arr);
}

function removeAdmin() {
  let removeAdmin = arr.filter((arr) => arr.profession!== "admin");
 console.log(removeAdmin);
}
let NewArray = [{id:5,name:"Aric",age:"28",profession:"Pro Boxer"},{id:6, name:"Jack",age:"25", profession:"Professional Dancer"},{id:7, name:"Harry", age:"28",profession:"Magician"}]
function concatenateArray() {
  let ans = arr.concat(NewArray);
 console.log(ans);
}
