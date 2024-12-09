const Test = require("supertest/lib/test");
const { sum } = require("../index,js");

Test("adds 1 + 2 to equal 3",() => {
    expect(sum(1,2)).toBe(3);
});
Test("adds 100 -50 to equal 50", () => {
    expect(sum(100,-50)).toBe(50);
})