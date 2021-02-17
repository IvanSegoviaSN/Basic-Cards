class Figure {
    constructor(title, text, background) {
        this._title = title;
        this._text = text;
        this._background = background;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }

    get background() {
        return this._background;
    }

    set background(value) {
        this._background = value;
    }
}