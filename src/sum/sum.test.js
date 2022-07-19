const { sum, sumOf } = require('./sum');

describe('sum 함수 테스트', () => {
    it('cal 1 + 2', () => {
        expect(sum(1, 2)).toBe(3);
    })

    it('cal all numbers', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(sumOf(arr)).toBe(15);
    })
})
