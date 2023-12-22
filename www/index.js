const MELODIES = {
  twinkletwinkle: {
    notes: [
      { pitch: 60, startTime: 0.0, endTime: 0.5 },
      { pitch: 60, startTime: 0.5, endTime: 1.0 },
      { pitch: 67, startTime: 1.0, endTime: 1.5 },
      { pitch: 67, startTime: 1.5, endTime: 2.0 },
      { pitch: 69, startTime: 2.0, endTime: 2.5 },
      { pitch: 69, startTime: 2.5, endTime: 3.0 },
      { pitch: 67, startTime: 3.0, endTime: 4.0 },
      { pitch: 65, startTime: 4.0, endTime: 4.5 },
      { pitch: 65, startTime: 4.5, endTime: 5.0 },
      { pitch: 64, startTime: 5.0, endTime: 5.5 },
      { pitch: 64, startTime: 5.5, endTime: 6.0 },
      { pitch: 62, startTime: 6.0, endTime: 6.5 },
      { pitch: 62, startTime: 6.5, endTime: 7.0 },
      { pitch: 60, startTime: 7.0, endTime: 8.0 },
    ],
    totalTime: 8,
  },

  testMelody: {
    notes: [
      { pitch: toMidi("A3"), quantizedStartStep: 0, quantizedEndStep: 4 },
      { pitch: toMidi("D4"), quantizedStartStep: 4, quantizedEndStep: 6 },
      { pitch: toMidi("E4"), quantizedStartStep: 6, quantizedEndStep: 8 },
      { pitch: toMidi("F4"), quantizedStartStep: 8, quantizedEndStep: 10 },
      { pitch: toMidi("D4"), quantizedStartStep: 10, quantizedEndStep: 12 },
      { pitch: toMidi("E4"), quantizedStartStep: 12, quantizedEndStep: 16 },
      { pitch: toMidi("C4"), quantizedStartStep: 16, quantizedEndStep: 20 },
      { pitch: toMidi("D4"), quantizedStartStep: 20, quantizedEndStep: 26 },
      { pitch: toMidi("A3"), quantizedStartStep: 26, quantizedEndStep: 28 },
      { pitch: toMidi("A3"), quantizedStartStep: 28, quantizedEndStep: 32 },
    ],
  },
};

const PERCUSSIONS = {
  drums: {
    notes: [
      { pitch: 36, quantizedStartStep: 0, quantizedEndStep: 1, isDrum: true },
      { pitch: 38, quantizedStartStep: 0, quantizedEndStep: 1, isDrum: true },
      { pitch: 42, quantizedStartStep: 0, quantizedEndStep: 1, isDrum: true },
      { pitch: 46, quantizedStartStep: 0, quantizedEndStep: 1, isDrum: true },
      { pitch: 42, quantizedStartStep: 2, quantizedEndStep: 3, isDrum: true },
      { pitch: 42, quantizedStartStep: 3, quantizedEndStep: 4, isDrum: true },
      { pitch: 42, quantizedStartStep: 4, quantizedEndStep: 5, isDrum: true },
      { pitch: 50, quantizedStartStep: 4, quantizedEndStep: 5, isDrum: true },
      { pitch: 36, quantizedStartStep: 6, quantizedEndStep: 7, isDrum: true },
      { pitch: 38, quantizedStartStep: 6, quantizedEndStep: 7, isDrum: true },
      { pitch: 42, quantizedStartStep: 6, quantizedEndStep: 7, isDrum: true },
      { pitch: 45, quantizedStartStep: 6, quantizedEndStep: 7, isDrum: true },
      { pitch: 36, quantizedStartStep: 8, quantizedEndStep: 9, isDrum: true },
      { pitch: 42, quantizedStartStep: 8, quantizedEndStep: 9, isDrum: true },
      { pitch: 46, quantizedStartStep: 8, quantizedEndStep: 9, isDrum: true },
      { pitch: 42, quantizedStartStep: 10, quantizedEndStep: 11, isDrum: true },
      { pitch: 48, quantizedStartStep: 10, quantizedEndStep: 11, isDrum: true },
      { pitch: 50, quantizedStartStep: 10, quantizedEndStep: 11, isDrum: true },
    ],
    quantizationInfo: { stepsPerQuarter: 4 },
    tempos: [{ time: 0, qpm: 120 }],
    totalQuantizedSteps: 11,
  },
};

// generates an array where indices correspond to midi notes
var everyNote = "C,C#,D,D#,E,F,F#,G,G#,A,A#,B,"
  .repeat(20)
  .split(",")
  .map(function (x, i) {
    return x + "" + Math.floor(i / 12);
  });

//returns the midi pitch value for the given note.
//returns -1 if not found
function toMidi(note) {
  return everyNote.indexOf(note);
}

//The checkpoint url that contains the training data
var modelCheckPoint = "https://storage.googleapis.com/download.magenta.tensorflow.org/models/music_vae/dljs/mel_small";

const initializeAudio = () => {
  var MusicVAE = new musicvae.MusicVAE(modelCheckPoint);
  MusicVAE.initialize().then(function (MusicVAE) {
    console.log("initialized!");

    var numInterpolations = 3;
    var interpolatedMelodies = MusicVAE.interpolate([MELODIES.twinkletwinkle, MELODIES.testMelody], numInterpolations);

    interpolatedMelodies.forEach(function (melody, index) {
      displayMelodies(melody.notes, index);
    });
  });
};

initializeAudio();

// takes the given array of notes and index. updates the output <spans>
function displayMelodies(notes, index) {
  var output = "Melody " + index + " <br>";
  output += JSON.stringify(notes, null, "  ") + "<br><br>";
  document.querySelector(".output" + index).innerHTML = output;
}
