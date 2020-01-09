/* eslint-disable import/prefer-default-export */

import { Dimensions } from 'react-native';
import UTIL from 'mroads-js-utils';

const { width, height } = Dimensions.get('screen');


export function createViewPortConfig(baseDeviceWidth = 1280, baseDeviceHeight = 800) {
  return {
    vw: UTIL.round(width / baseDeviceWidth),
    vh: UTIL.round(height / baseDeviceHeight),
  };
}
