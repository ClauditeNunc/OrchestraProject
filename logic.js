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

