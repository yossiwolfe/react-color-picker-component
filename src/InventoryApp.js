import React from 'react';
import './App.css';

var InventoryApp = React.createClass({
  getInitialState() {
    return {
      items: [],
      categories: ['ingredient', 'product', 'bundle', 'supply']
    };
  },
  nextId() {
    this._uniqueId = this._uniqueId || 0;
    return this._uniqueId++;
  },
  addItem(e) {
    e.preventDefault();
    var name = this.refs.name.value.trim();
    var category = this.refs.category.value;
    var vendor = this.refs.vendor.value.trim();
    var quantity = parseInt(this.refs.quantity.value, 10) || 0;
    if (!name) { return; }
    var item = {
      id: this.nextId(),
      name: name,
      category: category,
      vendor: vendor,
      quantity: quantity
    };
    this.setState({ items: this.state.items.concat([item]) });
    this.refs.addForm.reset();
  },
  updateQuantity(id, qty) {
    var quantity = parseInt(qty, 10) || 0;
    var items = this.state.items.map(function(it) {
      if (it.id === id) {
        return Object.assign({}, it, { quantity: quantity });
      }
      return it;
    });
    this.setState({ items: items });
  },
  renderItem(item) {
    var self = this;
    return (
      <li key={item.id} className="Inventory-item">
        {item.name} ({item.category}) - vendor: {item.vendor}
        <input
          type="number"
          defaultValue={item.quantity}
          onChange={function(e) { self.updateQuantity(item.id, e.target.value); }}
        />
      </li>
    );
  },
  render() {
    var self = this;
    return (
      <div className="InventoryApp">
        <h2>Inventory Manager</h2>
        <form ref="addForm" onSubmit={this.addItem} className="Add-item-form">
          <input ref="name" placeholder="Item name" />
          <select ref="category">
            {this.state.categories.map(function(c) {
              return <option key={c} value={c}>{c}</option>;
            })}
          </select>
          <input ref="vendor" placeholder="Vendor" />
          <input ref="quantity" type="number" defaultValue="0" />
          <button type="submit">Add Item</button>
        </form>
        <ul className="Inventory-list">
          {this.state.items.map(function(it) { return self.renderItem(it); })}
        </ul>
      </div>
    );
  }
});

export default InventoryApp;
