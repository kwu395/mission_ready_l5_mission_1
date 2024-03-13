const CarValue = require('./api');

test('Car value calculation for Civic 2014', () => {
    expect(CarValue("Civic", 2014)).toBe(6614);
});

test('Car value calculation for Accord 2021', () => {
    expect(CarValue("Accord", 2021)).toBe(6421);
});

test('Car value calculation for 911 2020', () => {
    expect(CarValue("991", 2020)).toBe(2020);
});

test('Car value calculation for Task-Force -987', () => {
    expect(CarValue("Task-Force", -987)).toBe("there is an error");
});
