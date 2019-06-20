

module.exports ={
  repair,
  succeed,
  fail,
  get
}

function repair(item) {
  item = {...item, durability: 100};

  return item;
}


function succeed (item) {
if(item.enhancement <20) {
    const newItem ={
      name: item.name,
        durability: 100,
        enhancement: item.enhancement +1
        
    };
    return newItem
}else {
  return item;
}

}

function fail(item) {
if(item.enhancement <15) {
  const newItem={
    name: item.name, 
    enhancement: item.enhancement,
    durability: item.durability - 5,
   

  };
  return newItem;
}else if(item.enhancement > 16) {
  const newItem={
    name: item.name,
    enhancement: item.enhancement -1,
    durability: item.enhancement -10,

   
  };
return newItem;
}else if(item.enhancement >=15 ) {
  const newItem={
    name: item.name,
    enhancement: item.enhancement,
    durability: item.durability -10,
 
  };
  
  return newItem;
}

  return item;
}

function get(item) {
  item = {...item, durability: 100};

  return item;
}