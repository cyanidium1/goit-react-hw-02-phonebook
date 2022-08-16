import Contact from 'components/Contact/Contact';
import css from './Contacts.module.css';

const Contacts = ({ props, deleteItem, search }) => {
  console.log(search);
  if (search === '') {
    return (
      <div className={css.list}>
        {props.map(el => (
          <Contact props={el} key={el.id} deleteItem={deleteItem} />
        ))}
      </div>
    );
  }
  return (
    <div className={css.list}>
      {props.map(el =>
        el.name.toLowerCase().includes(search.toLowerCase()) ? (
          <Contact props={el} key={el.id} deleteItem={deleteItem} />
        ) : null
      )}
    </div>
  );
};

export default Contacts;
