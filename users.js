const uuid=require("uuid")
// console.log(uuid);
const users=[
    {
        id:uuid.v4(),
        name:"Amira",
        age:29
    },
    {
        id:uuid.v4(),
        name:'Med Ali',
        age:29
    },
    {
        id:uuid.v4(),
        name:'Rania',
        age:29
    },
    {
        id:uuid.v4(),
        name:'Samar',
        age:29
    },
    {
        id:uuid.v4(),
        name:'Nada',
        age:29
    },
    {
        id:uuid.v4(),
        name:'Bilel',
        age:29
    },
    {
        id:uuid.v4(),
        name:'Fares',
        age:29
    }

]
// console.log(users);
// const found = users.find(elt=>elt.name=='amar');
// console.log(found);

module.exports=users