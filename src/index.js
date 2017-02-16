export default class StringStats {
  constructor(str) {
    this.str = str;
    this.length = str.length;
    this._stats = this._calculateFrequencies(this.str);
    this._calculateProbabilities(this._stats, this.length);
  };

  get stats() {
    return this._stats;
  }

  _calculateFrequencies(str) {
    let freqs = {};

    for (let ch of str) {
      if (freqs[ch] !== undefined) {
        freqs[ch].counter++;
      } else {
        freqs[ch] = {};
        freqs[ch].counter = 1;
      }
    }

    return freqs;
  };

  _calculateProbabilities(frequencies, total) {
    Object.keys(frequencies).forEach(function (key) {
      frequencies[key].probability = frequencies[key].counter / total;
    });

  };

}
