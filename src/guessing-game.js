class GuessingGame {
  min;
  max;
  res;

  setRange(min, max) {
    this.min = min;
    this.max = max;
    this.updateRes();
    return this;
  }

  guess() {
    return this.res;
  }

  lower() {
    this.max = this.res;
    this.updateRes();
    return this;
  }

  greater() {
    this.min = this.res;
    this.updateRes();
    return this;
  }

  updateRes() {
    this.res = Math.ceil((this.max - this.min) / 2 + this.min);
    return this;
  }

  log() {
    console.log('res =', this.res);
    return this;
  }
}

module.exports = GuessingGame;
