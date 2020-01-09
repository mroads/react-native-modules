class UTIL {
  static round(number, precision = 2) {
    return Math.round(number * 10 ** precision) / 10 ** precision;
  }
}

export default UTIL;
