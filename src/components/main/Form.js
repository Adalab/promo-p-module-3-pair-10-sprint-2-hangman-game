const Form = (props) => {

  const handleKeyDown = (ev) => {
    // Sabrías decir para qué es esta línea
    ev.target.setSelectionRange(0, 1);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleInput = (ev) => {
    const valueInput = ev.target.value;
    props.handleChange(valueInput);
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='title' htmlFor='last-letter'>
        Escribe una letra:
      </label>
      <input
        autoFocus
        autoComplete='off'
        className='form__input'
        maxLength='1'
        type='text'
        name='last-letter'
        id='last-letter'
        value={props.THElastLetter}
        onKeyDown={handleKeyDown}
        onChange={handleInput}
      />
    </form>
  )
}

export default Form;