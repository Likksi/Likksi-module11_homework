const { expect } = require('chai');
const sinon = require('sinon');

const { getPercents } = require('./Function/Function.js');

describe('getPercents', () => {
    it('должна корректно вычислять проценты', () => {
        expect(getPercents(30, 200)).to.equal(60);
        expect(getPercents(50, 120)).to.equal(60);
    });

    it('должна возвращать NaN при некорректных входных данных', () => {
        const consoleErrorStub = sinon.stub(console, 'error');

        expect(getPercents("30", 200)).to.be.NaN;
        expect(getPercents(30, "200")).to.be.NaN;
        expect(consoleErrorStub.calledOnce).to.be.true;

        consoleErrorStub.restore();
    });

   it('должна корректно обрабатывать дробные значения', () => {
        expect(getPercents(50.5, 200)).to.equal(101);
        expect(getPercents(30, 150.75)).to.equal(45.225);
    });

    it('должна возвращать 0 при одном из аргументов равном 0', () => {
        expect(getPercents(0, 200)).to.equal(0);
        expect(getPercents(30, 0)).to.equal(0);
    });
});
