import chai from 'chai';
import StringStats from '../lib/stringstats.min.js';

describe('String stats', function () {

  it('Frequencies of string - ascii', () => {
    let teststr = '\x45\x20\x25\x23\x32\x50 hello world\x20';
    let stringstats = new StringStats(teststr);
    let freqs = {};

    freqs = stringstats.freqs;
    chai.expect(freqs['\x45']).to.deep.equal(1);
    chai.expect(freqs['\x25']).to.deep.equal(1);
    chai.expect(freqs['\x23']).to.deep.equal(1);
    chai.expect(freqs['\x32']).to.deep.equal(1);
    chai.expect(freqs['\x50']).to.deep.equal(1);
    chai.expect(freqs['\x20']).to.deep.equal(4);
    chai.expect(freqs['h']).to.deep.equal(1);
    chai.expect(freqs['e']).to.deep.equal(1);
    chai.expect(freqs['l']).to.deep.equal(3);
    chai.expect(freqs['o']).to.deep.equal(2);
    chai.expect(freqs['w']).to.deep.equal(1);
    chai.expect(freqs['r']).to.deep.equal(1);
    chai.expect(freqs['d']).to.deep.equal(1);
    chai.expect(Object.keys(freqs).length).to.deep.equal(13);

  });

  it('Frequencies of string - alphanumeric', () => {
    let teststr = 'helloworld123';
    let stringstats = new StringStats(teststr);
    let freqs = {};

    freqs = stringstats._getStringFrequencies(teststr);
    chai.expect(freqs['h']).to.deep.equal(1);
    chai.expect(freqs['e']).to.deep.equal(1);
    chai.expect(freqs['l']).to.deep.equal(3);
    chai.expect(freqs['o']).to.deep.equal(2);
    chai.expect(freqs['w']).to.deep.equal(1);
    chai.expect(freqs['r']).to.deep.equal(1);
    chai.expect(freqs['d']).to.deep.equal(1);
    chai.expect(freqs['1']).to.deep.equal(1);
    chai.expect(freqs['2']).to.deep.equal(1);
    chai.expect(freqs['3']).to.deep.equal(1);

    chai.expect(Object.keys(freqs).length).to.deep.equal(10);

  });
});
