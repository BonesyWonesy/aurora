//we can't support edge or IE :( or Samsung S6
export const isAudioSupported = !/(edge|trident|SM-G920|SM-G925)/i.test(navigator.userAgent);

export const everyNote = "C,C#,D,D#,E,F,F#,G,G#,A,A#,B,"
  .repeat(20)
  .split(",")
  .map(function (x, i) {
    return x + "" + Math.floor(i / 12);
  });

export const convertNoteToMidi = (note) => {
  return everyNote.indexOf(note);
};
