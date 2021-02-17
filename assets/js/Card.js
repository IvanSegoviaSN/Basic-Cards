class Card {
    constructor(title, description, category, background) {
        this._title = title;
        this._description = description;
        this._category = category;
        this._background = background;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get background() {
        return this._background;
    }

    set background(value) {
        this._background = value;
    }
}