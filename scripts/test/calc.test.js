const addition=require("..calc");
describe("calculator", ()=>{
describe("Addition function", ()=>{
    Test("should return 42 for 20+22", ()=>{
        expect(addition(20,22)).toBe(42);
    })
    })
})