import { Component } from 'react';
import css from './Adder.module.css';

class Adder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'default',
      tel: 'default',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    console.log(form.name.value);
    console.log(form.tel.value);

    this.setState({ name: form.name.value, tel: form.tel.value });
  }

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <input className={css.item} type="text" name="name" />
        <input className={css.item} type="text" name="tel" />
        <button className={css.item} type="submit">
          Sumbit
        </button>
      </form>
    );
  }
}

// console.dir(Adder);

export default Adder;
