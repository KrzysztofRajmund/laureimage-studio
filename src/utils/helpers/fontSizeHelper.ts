import { ScreenSize } from '../enums/screenSize';

const base = 16;

export const fontSizeHelper = () => {
  const width =
    document.body.clientWidth || document.documentElement.clientWidth;

  let fontSize;

  if (width <= ScreenSize.XS) {
    fontSize = base * 0.7;
  } else if (width <= ScreenSize.SM) {
    fontSize = base * 0.8;
  } else if (width <= ScreenSize.MD) {
    fontSize = base * 0.8;
  } else if (width <= ScreenSize.LG) {
    fontSize = base * 1;
  } else {
    fontSize = base * 1.2;
  }

  return fontSize;
};
