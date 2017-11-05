import CartState from "./CartState";

describe ( "Test Cart State Suite", () => {
    beforeEach(()=>{
        CartState.addItem({id:1,price:100});
    });

    it("default test", ()=>{
        expect(CartState.items.length).toBe(1);
    });
    afterEach(()=>{
        CartState.empty();
    });
})