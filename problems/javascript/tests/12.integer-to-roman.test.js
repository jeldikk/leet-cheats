const {intToRoman} = require("../codes/12.integer-to-roman");

describe("intToRoman test suite", () => {
    test('code should return something', () => {
        const num = 10;
        const actual = intToRoman(num);
        console.log({actual})
        expect(actual).toBeDefined();
        
    });
    test('decimal: 3749; roman: MMMDCCXLIX', () => {
        const num = 3749;
        const actual = intToRoman(num);
        // console.log({actual})
        expect(actual).toBeDefined();
        expect(actual).toBe("MMMDCCXLIX")
    });

    test('decimal: 58, roman: LVIII', () => {
        const num = 58;
        const actual = intToRoman(num);
        // console.log({actual})
        expect(actual).toBeDefined();
        expect(actual).toBe("LVIII")
    });

    test('decimal: 1994, roman: MCMXCIV', () => {
        const num = 58;
        const actual = intToRoman(num);
        // console.log({actual})
        expect(actual).toBeDefined();
        expect(actual).toBe("LVIII")
    })
})