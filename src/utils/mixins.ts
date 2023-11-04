import { Dimensions, PixelRatio } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('screen').width;
const WINDOW_HEIGHT = Dimensions.get('screen').height;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// use this for vertical, top, bottom values
export const scaleHeight = (size: number) => {
  const scaledHeight = (WINDOW_HEIGHT / guidelineBaseHeight) * size;
  return scaledHeight;
};

// Use this for left, right or horizontal values
export const scaleWidth = (size: number) => {
  return (WINDOW_WIDTH / guidelineBaseWidth) * size;
};

// use this when both vertical and horizontal values
export const scaleModerate = (size: number, factor = 0.5): number =>
  size + (scaleWidth(size) - size) * factor;

// use this for fonts
export const scaleFont = (size: number) => {
  const scale = (WINDOW_WIDTH / guidelineBaseWidth);
  return PixelRatio.roundToNearestPixel(size * scale);
  // return Math.floor(size * PixelRatio.getFontScale())
};

export { WINDOW_HEIGHT, WINDOW_WIDTH };
