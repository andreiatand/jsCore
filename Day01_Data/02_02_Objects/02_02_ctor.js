// factory function
function createGuitar () {
    const guitar = {}
    guitar.name = "Jaguar Bass";
    guitar.type="Electric";
    guitar.make="Fender";
    guitar.color="Black";
    guitar.bodyMaterial="Poplar";
    guitar.bodyShape="Jaguar Bass";
    guitar.neck={
        material:"Maple",
        shape:"C",
        frets:"20",
        scaleLength:32
    };
    guitar.electronics={
        configuration:"H",
        controls:["Master Volume","Tone Volume"]
    };
    guitar.strings={
        type:"Nickel Plated Steel",
        numberOf:4,
        used:true,
    };
    guitar.refurbished=true;
    // methods
    guitar.isRefurbished=function () {console.log(`Guitar is refurbished=${this.refurbished}`);};
    guitar.changeStrings = function() {
        this.strings.used = false; 
    }
    return guitar;
}

// best practice is to Capitalize the ctor function
function Guitar() {
    this.name="Jaguar Bass";
    this.type="Electric";
    this.make="Fender";
    this.color="Black";
    this.bodyMaterial="Poplar";
    this.bodyShape="Jaguar Bass";
    this.neck={
        material:"Maple",
        shape:"C",
        frets:"20",
        scaleLength:32
    };
    this.electronics={
        configuration:"H",
        controls:["Master Volume","Tone Volume"]
    };
    this.strings={
        type:"Nickel Plated Steel",
        numberOf:4,
        used:true,
    };
    this.refurbished=true;
    // methods
    this.isRefurbished=function () {console.log(`Guitar is refurbished=${this.refurbished}`);};
    this.changeStrings = function() {
        this.strings.used = false; 
        // call changeStrings with param
    }
}

const guitar = new Guitar();
const newGuitar = new Guitar();
console.log(guitar == newGuitar);
console.log(guitar === newGuitar);

// add params

