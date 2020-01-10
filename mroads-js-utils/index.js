/**
 * @flow
 */

class UTIL {
  /**
   *
   * @param {number} number
   * @param {number} precision
   */
  static round(number, precision = 2) {
    return Math.round(number * 10 ** precision) / 10 ** precision;
  }

  static generateUniqueId() {
    return Math.random()
      .toString(36)
      .substring(2) + new Date().getTime().toString(36);
  }

  /**
   *
   * @param {string} text
   */
  static formatToPhone(text) {
    const input = text.replace(/\D/g, '').substring(0, 10);
    const zip = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);
    let value = '';
    if (input.length > 6) {
      value = `(${zip}) ${middle}-${last}`;
    } else if (input.length > 3) {
      value = `(${zip}) ${middle}`;
    } else if (input.length > 0) {
      value = `(${zip}`;
    }
    return value;
  }

  /**
   *
   * @param {string} text
   */
  static unFormatToPhone(text) { return text.replace(/\D/g, '').substring(0, 10); }

  /**
   *
   * @param {string} date
   */
  static getTimeFromDate(date) {
    if (!date) {
      return null;
    }
    const today = new Date(`${date}`);
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    const time = today.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
    });
    let hour = time.split(':')[0];
    let min = time.split(':')[1];
    min = `${min}`.length === 1 ? `0${min}` : min;
    hour = hour > 12 ? hour - 12 : hour;
    hour = `${hour}`.length === 1 ? `0${hour}` : hour;
    return `${hour}:${min}`;
  }

  static getTimeOfTheDay() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    let timeOfTheDay = '';
    if (hours < 12) {
      timeOfTheDay = 'Morning';
    } else if (hours < 18) {
      timeOfTheDay = 'Afternoon';
    } else {
      timeOfTheDay = 'Evening';
    }
    return timeOfTheDay;
  }
}

export default UTIL;
