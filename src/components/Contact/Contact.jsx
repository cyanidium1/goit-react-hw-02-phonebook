import css from './Contact.module.css';
import im from './1.png';
import del from './del.png';
import { Component } from 'react';

class Contact extends Component {
  state = {
    backgroundColor: '#b2faa2',
    fontWeight: 400,
  };

  changeIt() {}

  // return <div style={style}> Have a good and productive day! </div>;
  render() {
    return (
      <li className={css.item}>
        <p className={css.name} style={this.state}>
          {this.props.props.name}
        </p>
        <p className={css.tel} style={this.state}>
          {this.props.props.tel}
        </p>
        <button onClick={this.props.deleteItem} className={css.btn}>
          <img src={del} width="15px" />
        </button>
        <button
          onClick={() => {
            if (this.state.fontWeight == '400') {
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
          <img src={im} width="15px" />
        </button>
      </li>
    );
  }
}

export default Contact;
