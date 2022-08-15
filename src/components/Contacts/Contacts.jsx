import Contact from 'components/Contact/Contact';
import css from './Contacts.module.css';

const Contacts = ({ props, deleteItem }) => {
  return (
    <div className={css.list}>
      <h2 className={css.head}>Phone book</h2>
      <p className={css.disclaimer}>use it on your own risk</p>
      {props.map(el => (
        <Contact props={el} key={el.id} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default Contacts;
