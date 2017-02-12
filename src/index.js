export default class StringStats {
  constructor(str) {
    this.str = str;
    this.freqs = this._getStringFrequencies(this.str);
//    this.probabilities = this._calculateProbabilities();
  };

  _getStringFrequencies(str) {
    let freqs = {};

    for (let ch of str) {
      freqs[ch] ? freqs[ch]++ : freqs[ch] = 1;
    }
    return freqs;
  };

/**
 * Translate an array containing the frequencies
 * of the symbols in the alphabet to a new array
 * with the probabilities of each one
 *
 * @param {Array.<Object>} Array of {s: <string>, p: <counter> }
 * @return {Array.<Object>} Array of { s: <string>, p: <probability> }
 * @private
 */
  _calculateProbabilities(frequencies) {
    let total = 0;
    let alphabet = {};

    frequencies.map((item) => total += item.f);

    alphabet = frequencies.map(function (item) {
      let n = {};

      n.s = item.s;
      n.p = (item.f) / total;
      return n;
    });

    return alphabet;
  };

}
