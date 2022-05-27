export class Section {
    constructor ({ renderer }, selector) {
        // this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }
    addItem(element, place) {
      // debugger;
        if (place === 'append') {
          this._container.append(element);
        } else {
          this._container.prepend(element);
        }
      }
      renderItems(data) {
        data.forEach((item) => {
          this._renderer(item);
        });
      }
    // addItem(element) { 
    //     this._container.prepend(element);
    // }
    
    // renderItems() {
    //     this._items.forEach(item => {
    //         this._renderer(item);
    //       });
    // }
}