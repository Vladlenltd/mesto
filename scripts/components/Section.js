export class Section {
    constructor ({ items, renderer }, selector) {
        this._items = items; //массив данных
        this._renderer = renderer;  //отрисовка данных
        this._container = document.querySelector(selector);
    }

    setItem(element) { // метод принятия и передачи DOM-Element
        const renderedItem = this._renderer(element);
        this._container.append(renderedItem);
    }
    
    renderItems() {
        this._items.forEach((item) => {
          this.setItem(item);
        });
    }
}