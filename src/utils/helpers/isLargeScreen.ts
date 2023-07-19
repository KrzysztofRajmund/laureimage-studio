import { ScreenSize } from "../enums";
import { isBrowser } from "./isBrowser";
//TODO: Adjust function - read comment in Contact component
export const isLargeScreen = () =>
  isBrowser() && window.innerWidth >= ScreenSize.MD;
