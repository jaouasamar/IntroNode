

const findUser = (arr,name) => {
    arr.filter(elt=>elt.name===name).length
    ?
    console.log(arr.find(elt=>elt.name===name))
    :console.log("user doesn't exist");
};
const getAverage=(arr)=>{
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
const length= arr.length;
console.log((arr.map(elt=>elt.age).reduce(reducer))/length);
};
module.exports=findUser
module.exports=getAverage
