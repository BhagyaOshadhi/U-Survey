import {multiply, makeLowerCase} from "./HelperFunctions";

test("multiply",()=>{
    expect(multiply(2,10)).toBe(20);
    expect(multiply(2,10)).toBe(20);

});
test("makeLowerCase",()=>{
    expect(makeLowerCase("Bhagya")).toBe("bBagya");
    expect(makeLowerCase("Hiru")).toBe("hiru");


});
