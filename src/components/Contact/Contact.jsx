import css from './Contact.module.css';
import im from './1.png';
import del from './del.png';
import { Component } from 'react';

class Contact extends Component {
  state = {
    backgroundColor: '#b2faa2',
    fontWeight: 400,
  };

  render() {
    return (
      <li className={css.item}>
        <p className={css.name} style={this.state}>
          {this.props.props.name}
        </p>
        <p className={css.tel} style={this.state}>
          {this.props.props.tel}
        </p>
        <button
          onClick={e => {
            this.props.deleteItem(this.props.props.id);
          }}
          className={css.btn}
        >
          <img src={del} width="15px" alt="notadickpic" />
        </button>
        <button
          onClick={() => {
            if (this.state.fontWeight === 400) {
              this.setState({
                backgroundColor: 'red',
                fontWeight: 700,
                color: 'white',
              });
            } else {
              this.setState({
                backgroundColor: '#b2faa2',
                fontWeight: 400,
                color: 'black',
              });
            }
          }}
          className={css.btn}
        >
          <img src={im} width="15px" alt="notadickpic" />
        </button>
      </li>
    );
  }
}

export default Contact;
