import { Component } from 'react';
import Adder from './Adder/Adder';
import Contacts from './Contacts/Contacts';

export class App extends Component {
  state = {
    book: [
      { name: 'Kek', tel: '+380777', id: 1 },
      { name: 'Ajax', tel: '+102', id: 2 },
    ],
    click: null,
  };

  deleteItem = id => {
    console.log(this);
  };

  render() {
    return (
      <>
        <Contacts deleteItem={this.deleteItem} props={this.state.book} />
        {/* <Adder /> */}
      </>
    );
  }
}
