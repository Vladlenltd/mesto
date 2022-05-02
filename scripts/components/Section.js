export class Section {
    constructor ({ items, renderer }, containerSelector) {
        this._renderedItems = items; //массив данных
        this._renderer = renderer;  //отрисовка данных
        this._container = document.querySelector(containerSelector);
    }

    setItem(element) { // метод принятия и передачи DOM-Element
        const renderedItem = this._renderer(element);
        this._container.append(renderedItem);
    }
    
    renderItems() {
        this._renderedItems.forEach((item) => {
          this.setItem(item);
        });
    }
}