import css from './Searcher.module.css';

const Searcher = ({ searchItem }) => {
  return (
    <>
      <h2 className={css.head}>Phone book</h2>
      <p className={css.disclaimer}>use it on your own risk</p>
      <input
        className={css.input}
        type="text"
        placeholder="search"
        onInput={e => searchItem(e.target.value)}
      />
    </>
  );
};

export default Searcher;
