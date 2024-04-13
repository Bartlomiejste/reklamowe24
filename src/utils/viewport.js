const SMALL_MOBILE = 320;
const MOBILE = 600;
const TABLET = 900;
const SMALL_LAPTOP = 1024;
const LAPTOP = 1440;
const DESKTOP = 1920;

const getUpViewport = (size) => `(min-width: ${size}px)`;

const getDownViewport = (size) => `(max-width: ${size - 1}px)`;

export const mUp = (width) => width >= MOBILE;
export const tUp = (width) => width >= TABLET;
export const tDown = (width) => width < TABLET;
export const lDown = (width) => width < SMALL_LAPTOP;
export const lUp = (width) => width >= LAPTOP;
export const dUp = (width) => width >= DESKTOP;

export const SM_UP = getUpViewport(SMALL_MOBILE);
export const M_UP = getUpViewport(MOBILE);
export const T_UP = getUpViewport(TABLET);
export const SL_UP = getUpViewport(SMALL_LAPTOP);
export const L_UP = getUpViewport(LAPTOP);
export const D_UP = getUpViewport(DESKTOP);

export const SM_DOWN = getDownViewport(SMALL_MOBILE);
export const M_DOWN = getDownViewport(MOBILE);
export const T_DOWN = getDownViewport(TABLET);
export const SL_DOWN = getUpViewport(SMALL_LAPTOP);
export const L_DOWN = getDownViewport(LAPTOP);
export const D_DOWN = getDownViewport(DESKTOP);
