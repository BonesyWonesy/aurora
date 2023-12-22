export const isAudioSupported = () => {
  return !/(edge|trident|SM-G920|SM-G925)/i.test(navigator.userAgent);
};
