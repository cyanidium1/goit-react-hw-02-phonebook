import { Component } from 'react';

class Adder extends Component {
  handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    let book = form.name.value;
    let author = form.athor.value;
    console.log(book, author);
    this.props.onSubmit({ book, author });
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="book" />
        <input type="text" name="author" />
        <button type="submit">Add</button>
      </form>
    );
  }
}

console.dir(Adder);

export default Adder;
