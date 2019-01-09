/*
CODECADEMY CLASS PROJECTS

Parent class : Media
Subclasses : Book, Movie, CD

- Book
Properties:
    author := string
    title := string
    pages := number
    isCheckedOut := boolean, initially false
    ratings := array, initially empty
Getters:
    all have getter
Methods:
    .getAverageRating()
    .toggleCheckOutStatus()
    .addRating()

- Movie
Properties:
    director := string
    title := string
    runtime := number
    isCheckedOut := boolean, initially false
    ratings := array, initially empty
Getters:
    all have getter
Methods:
    .getAverageRating()
    .toggleCheckOutStatus()
    .addRating()

- CD
Properties:
    artist := string
    title := string
    isCheckedOut := boolean, initially false
    ratings := array, initially empty
    songs := array, initially empty
Getters:
    all have getter
Methods:
    .getAverageRating()
    .toggleCheckOutStatus()
    .addRating()
*/

class Media {
    constructor(title) {
        // Title is the only assignment that has no default value
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    // title doesn't have setter
    // because the value of title can't be rewritten
    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    set isCheckedOut(checked) {
        this._isCheckedOut = checked;
    }

    get ratings() {
        return this._ratings;
    }

    toggleCheckOutStatus() {
        // if false, assign true. Else assign false
        this._isCheckedOut = (this._isCheckedOut) ? false : true;
    }

    getAverageRating() {
        // create local for clarity
        let rating = this._ratings;
        let total_rating = rating.reduce((x, y) => {
            return x + y;
        }, 0);
        let avg_rating = total_rating / rating.length;

        return avg_rating;
    }

    addRating(rating) {
        this._ratings.push(rating);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        // title shared with Media class
        super(title);
        this._author = author;
        this._pages = pages;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    // title, isCheckedOut, ratings getter setter is shared with Media class
    // Books doesn't have author and pages setter,
    // because the value are as is (can't be rewritten)

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }

    // all methods also shared with Media class
}

class Movie extends Media {
    constructor(director, title, runtime) {
        // title shared with Media class
        super(title);
        this._director = director;
        this._runtime = runtime;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    // title, isCheckedOut, ratings getter setter is shared with Media class
    // Movie doesn't have director and runtime setter,
    // because the value are as is (can't be rewritten)

    get director() {
        return this._director;
    }

    get runtime() {
        return this._runtime;
    }

    // all methods also shared with Media class
}

class CD extends Media {
    constructor(artist, title) {
        // title shared with Media class
        super(title);
        this._artist = artist;
        this._isCheckedOut = false;
        this._ratings = [];
        this._songs = [];
    }

    // title, isCheckedOut, ratings getter setter is shared with Media class
    // Books doesn't have artist setter,
    // because the value are as is (can't be rewritten)

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }

    // Methods of isCheckedOut and ratings are shared with Media class

    addSongs(song) {
        this._songs.push(song);
    }
}

// Book test
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();
console.log(historyOfEverything.getAverageRating());


// Movie test
const speed = new Movie('Jan de Bont', 'Speed', '116');

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();
console.log(speed.getAverageRating());
