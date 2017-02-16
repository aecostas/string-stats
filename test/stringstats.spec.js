import chai from 'chai';
import StringStats from '../lib/stringstats.min.js';

describe('String stats', function () {

  it('Frequencies of string - ascii', () => {
    let teststr = '\x45\x20\x25\x23\x32\x50 hello world\x20';
    let stringstats = new StringStats(teststr);
    let stats = {};

    stats = stringstats.stats;

    chai.expect(stats['\x45'].counter).to.deep.equal(1);
    chai.expect(stats['\x25'].counter).to.deep.equal(1);
    chai.expect(stats['\x23'].counter).to.deep.equal(1);
    chai.expect(stats['\x32'].counter).to.deep.equal(1);
    chai.expect(stats['\x50'].counter).to.deep.equal(1);
    chai.expect(stats['\x20'].counter).to.deep.equal(4);
    chai.expect(stats['h'].counter).to.deep.equal(1);
    chai.expect(stats['e'].counter).to.deep.equal(1);
    chai.expect(stats['l'].counter).to.deep.equal(3);
    chai.expect(stats['o'].counter).to.deep.equal(2);
    chai.expect(stats['w'].counter).to.deep.equal(1);
    chai.expect(stats['r'].counter).to.deep.equal(1);
    chai.expect(stats['d'].counter).to.deep.equal(1);
    chai.expect(Object.keys(stats).length).to.deep.equal(13);

  });

  it('Frequencies of string - alphanumeric', () => {
    let teststr = 'helloworld123';
    let stringstats = new StringStats(teststr);
    let stats = stringstats.stats;

    chai.expect(stats['h'].counter).to.deep.equal(1);
    chai.expect(stats['e'].counter).to.deep.equal(1);
    chai.expect(stats['l'].counter).to.deep.equal(3);
    chai.expect(stats['o'].counter).to.deep.equal(2);
    chai.expect(stats['w'].counter).to.deep.equal(1);
    chai.expect(stats['r'].counter).to.deep.equal(1);
    chai.expect(stats['d'].counter).to.deep.equal(1);
    chai.expect(stats['1'].counter).to.deep.equal(1);
    chai.expect(stats['2'].counter).to.deep.equal(1);
    chai.expect(stats['3'].counter).to.deep.equal(1);

    chai.expect(Object.keys(stats).length).to.deep.equal(10);

  });

  it('Probabilities of string - uniform', () => {
    let stringstats = new StringStats('abcd');
    let stats = stringstats.stats;

    chai.expect(stats['a'].probability).to.deep.equal(0.25);
    chai.expect(stats['b'].probability).to.deep.equal(0.25);
    chai.expect(stats['c'].probability).to.deep.equal(0.25);
    chai.expect(stats['d'].probability).to.deep.equal(0.25);

  });

  it('Probabilities of string - only one character', () => {
    let stringstats = new StringStats('aaaa');
    let stats = stringstats.stats;

    chai.expect(stats['a'].probability).to.deep.equal(1);

  });

});
