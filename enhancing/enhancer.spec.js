const {repair, succeed, fail, get}= require('./enhancer.js');


//if enhancer.repair should make durability of 100

describe('enhancer.js', () => {

    describe('repair()', () => {
        const item = {
        
            durability: 10,
          
          };
          //arrange
          const expected = {
     
            durability: 100,
       
          };
    const repairedItem= repair(item);
   
    expect(repairedItem).toEqual(expected);
    });
       
    it.todo('should have a max of 100 for durability');
    });
    
 
  
  
    describe('succeed()', () => {
    it('The enhancement increases by 1. If the item enhancement level is  20, the enhancement level is not changed.', () => {
    const item = {
 name: "name",
 durability: 10,

  
     enhancement:3,
 };
    const expected ={
        name: "name",
        durability: 100,
                enhancement: 4
    }

    const enhancedItem = succeed(item);
    // expect(enhancer.repair(item).durability).toBe(100);
    expect(enhancedItem).toEqual(expected);
    // expect(enhancer.success.enhancement(20)).toEqual(20);
    // expect(enhancer.success.enhancement(4)).toEqual(5);
    // expect(enhancer.success.enhancement(19)).toEqual(20);
  
    });
    it.todo('The enhancement increases by 1, If the item enhancement level is less 20. remains same if equals 20.');
    });
    
    describe('fail()', () => {
    it('If the item enhancement is less than 15, the durability of the item is decreased by 5.', () => {
    const item = {
        name: "name",
        enhancement: 13,
           durability: 50,
    
     
 };
    const expected ={
        name: "name",
        enhancement: 13,
        durability: 45,
     
     
    }

    const failedItem = fail(item);
    // expect(enhancer.repair(item).durability).toBe(100);
    expect(failedItem).toEqual(expected);
    // expect(enhancer.success.enhancement(20)).toEqual(20);
    // expect(enhancer.success.enhancement(4)).toEqual(5);
    // expect(enhancer.success.enhancement(19)).toEqual(20);
  
    });
    it.todo('If the item enhancement is less than 15, the durability of the item is decreased by 5.If the item enhancement is 15 or more, the durability of the item is decreased by 10.If the item enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17.');
    });
    

    


    //test one feature of repair at a time