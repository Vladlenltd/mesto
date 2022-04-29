export default class Section {
    constructor ({ items, renderer }, containerSelector) {
        this._renderedItems = items; //массив данных
        this._renderer = renderer;  //отрисовка данных
        this._container = document.querySelector('containerSelector')
    }

    rendererItems() { //метод отрисовки данных
        this._renderedItems.forEach(item => this._renderer(item));
    }
    
    addItem(element) { // метод принятия и передачи DOM-Element
        this._container.append(element);
    }
}