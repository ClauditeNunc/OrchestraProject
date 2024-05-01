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

    play() {
        return `Tune ${this.name}`;
    }
}

class WindInstrument extends Instrument {
    constructor(name) {
        super(name);
    }

    play() {
        return `Blow into ${this.name}`;
    }
}

class PercussionInstrument extends Instrument {
    constructor(name) {
        super(name);
    }

    play() {
        return `Strike ${this.name}`;
    }
}

class KeyboardInstrument extends Instrument {
    constructor(name) {
        super(name);
    }

    play() {
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
    const audio = new Audio(`audio/${instrument.name}.mp3`);
    audio.preload = "auto"; 
    
    instrumentCard.addEventListener("click", () => {
        audio.currentTime = 0;
        audio.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    });
    
    //Change it so that we don't need a specific if else statement
    const actionPhrase = instrument.play();

    const instrumentAction = document.createElement("p");
    instrumentAction.textContent = actionPhrase;

    //Add the instruments to the div
    instrumentCard.appendChild(instrumentName);
    instrumentCard.appendChild(instrumentAction);

    return instrumentCard;
}

// Show them on the page
const instrumentsContainer = document.getElementById("instruments-container");
instruments.forEach(instrument => {
    const instrumentCard = createInstrumentCard(instrument);
    instrumentsContainer.appendChild(instrumentCard);
});
