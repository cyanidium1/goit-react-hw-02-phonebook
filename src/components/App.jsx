import { Component } from 'react';
import Adder from './Adder/Adder';
import Contacts from './Contacts/Contacts';

export class App extends Component {
  state = {
    book: [
      { name: 'Kek', tel: '+380777', id: 0 },
      { name: 'Ajax', tel: '+102', id: 1 },
      { name: 'Bob', tel: '787898', id: 2 },
      { name: 'Johny', tel: 'они на деревьях', id: 3 },
      { name: 'Kenny', tel: 'dead', id: 4 },
    ],
  };

  deleteItem = id => {
    this.setState(({ book }) => {
      return {
        book: book.filter(el => el.id !== id),
      };
    });
    return this.state.book;
  };

  addItem = (name, tel) => {
    if (name && tel) {
      const contact = {
        name: name,
        tel: tel,
        id:
          this.state.book.length === 0
            ? 0
            : this.state.book[this.state.book.length - 1].id + 1,
        key:
          this.state.book.length === 0
            ? 0
            : this.state.book[this.state.book.length - 1].id + 1,
      };
      this.setState(state => {
        const newSt = [...state.book, contact];
        console.log(newSt);
        return { book: newSt };
      });
    } else {
      alert('Input valid data');
    }
  };

  render() {
    return (
      <>
        <Contacts deleteItem={this.deleteItem} props={this.state.book} />
        <Adder kek="kek" addItem={this.addItem} />
      </>
    );
  }
}
