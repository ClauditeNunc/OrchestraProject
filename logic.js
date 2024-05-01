// The Instrument class itself
class Instrument {
    constructor(name) {
        this.name = name;
    }

    play() {
        return `Play ${this.name}`;
    }
}

// Subclasses of Instrument
class StringInstrument extends Instrument {
    constructor(name) {
        super(name);
    }

    tune() {
        return `Tune ${this.name}`;
    }
}

class WindInstrument extends Instrument {
    constructor(name) {
        super(name);
    }

    blow() {
        return `Blow into ${this.name}`;
    }
}

class PercussionInstrument extends Instrument {
    constructor(name) {
        super(name);
    }

    strike() {
        return `Strike ${this.name}`;
    }
}

class KeyboardInstrument extends Instrument {
    constructor(name) {
        super(name);
    }

    pressKey() {
        return `Press keys on ${this.name}`;
    }
}

// All instruments to be used
const instruments = [
    new StringInstrument("🎸Guitar"),
    new StringInstrument("🎻Violin"),
    new StringInstrument("𓏢Harp"),
    new WindInstrument("🦯Flute"),
    new WindInstrument("🎷Saxophone"),
    new WindInstrument("🎺Trumpet"),
    new PercussionInstrument("🥁Drum"),
    new PercussionInstrument("🎛️Xylophone"),
    new PercussionInstrument("⚙Tambourine"),
    new PercussionInstrument("△Triangle"),
    new KeyboardInstrument("🎹Piano"),
];

function createInstrumentCard(instrument) {
    const instrumentCard = document.createElement("div");
    instrumentCard.classList.add("instrument-card");
    
    const instrumentName = document.createElement("h2");
    instrumentName.textContent = instrument.name;
    
    //Prep the audio format
    const audio = new Audio(`audio/${instrument.name.toLowerCase()}.mp3`);
    audio.preload = "auto"; 
    
    //Play audio depending on name of instrument
    instrumentCard.addEventListener("click", () => {
        audio.currentTime = 0;
        audio.play();
    });

    //Prepare the instruments with an action depending on type
    let instrumentAction;
    if (instrument instanceof StringInstrument) {
        instrumentAction = document.createElement("p");
        instrumentAction.textContent = instrument.tune();
    } else if (instrument instanceof WindInstrument) {
        instrumentAction = document.createElement("p");
        instrumentAction.textContent = instrument.blow();
    } else if (instrument instanceof PercussionInstrument) {
        instrumentAction = document.createElement("p");
        instrumentAction.textContent = instrument.strike();
    } else if (instrument instanceof KeyboardInstrument) {
        instrumentAction = document.createElement("p");
        instrumentAction.textContent = instrument.pressKey();
    }

    //Add the instruments to the div
    instrumentCard.appendChild(instrumentName);
    if (instrumentAction) {
        instrumentCard.appendChild(instrumentAction);
    }

    return instrumentCard;
}

// Show them on the page
const instrumentsContainer = document.getElementById("instruments-container");
instruments.forEach(instrument => {
    const instrumentCard = createInstrumentCard(instrument);
    instrumentsContainer.appendChild(instrumentCard);
});
