export class Section {
    constructor ({ items, renderer }, selector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }
    addItem(element) { 
        this._container.prepend(element);
    }
    
    renderItems() {
        this._items.forEach(item => {
            const element = this._renderer(item);
            this.addItem(element);
          });
    }
}