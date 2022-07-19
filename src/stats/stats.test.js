const stats = require('./stats');

describe('stats 테스트', () => {
    it('최대값 구하기', () => {
        const arr = [1, 2, 3, 4];
        expect(stats.max(arr)).toBe(4);
    });

    it('최소값 구하기', () => {
        const arr = [-1, 2, 3, -4];
        expect(stats.min(arr)).toBe(-4);
    });

    it('평균값 구하기', () => {
        const arr = [1, 3, 5, 7];
        expect(stats.avg(arr)).toBe(4);
    });

    it('홀수의 개수 구하기', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(stats.getOddCnt(arr)).toBe(3);
    });

    describe('중간값 구하기', () => {
        it('sort가 잘 되는지', () => {
            const arr = [1, 4, 5, 2, 3];
            expect(stats.sort(arr)).toEqual([1, 2, 3, 4, 5]); // 객체나 배열을 비교할 때는 toEqual
        });
        it('그래서 중간값은? (짝수개)', () => {
            const arr = [1, 2, 3, 4, 5, 6];
            expect(stats.median(arr)).toBe(3.5);
        });
        it('그래서 중간값은? (홀수개)', () => {
            const arr = [1, 2, 3, 4, 5, 6, 9];
            expect(stats.median(arr)).toBe(4);
        })
    });
});