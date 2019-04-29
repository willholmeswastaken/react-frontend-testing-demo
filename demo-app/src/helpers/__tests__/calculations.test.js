import addNumbers from "../calculations";

// Its a good idea to do at least 2 calculation tests here.
// If the logic was accidently made to return only 3, then it would pass if we did just the one.
// But it is actually incorrect, so adding a 4 in caters for this.
describe('calculations.js', () => {
    it('adds two numbers together correctly', () => {
        expect(addNumbers(1, 2)).toBe(3);
        expect(addNumbers(1, 3)).toBe(4);
    })
})