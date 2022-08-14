import Contact from 'components/Contact/Contact';
import css from './Contacts.module.css';

const Contacts = ({ props, deleteItem }) => {
  return (
    <div className={css.list}>
      <button onClick={deleteItem}>kek</button>
      <h2>Phone book</h2>
      {props.map(el => (
        <Contact props={el} key={el.id} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default Contacts;
