import { Component } from 'react';
import css from './Adder.module.css';

class Adder extends Component {
  render() {
    return (
      <form
        className={css.form}
        onSubmit={e => {
          e.preventDefault();
          const form = e.currentTarget;
          const name = form.name.value;
          const tel = form.tel.value;
          this.props.addItem(name, tel);
          form.reset();
        }}
      >
        <input
          className={css.item}
          type="text"
          name="name"
          placeholder="name"
        />
        <input className={css.item} type="text" name="tel" placeholder="tel" />
        <button className={css.btn} type="submit">
          Sumbit
        </button>
      </form>
    );
  }
}

export default Adder;
