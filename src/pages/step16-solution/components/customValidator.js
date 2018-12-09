export default {
  pattern(exp) {
    return value => exp.test(value);
  },
  sfeirmail() {
    var exp = /^\w+\.\w@sfeir\.com$/;
    return this.pattern(exp);
  }
};
