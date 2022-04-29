import '../../styles/Letters.scss';
const ErrorLetters = (props) => {

  const renderErrorLetters = () => {
    const errorLetters = props.THEuserLetters.filter(
      (letter) =>
        props.THEword.toLocaleLowerCase().includes(letter.toLocaleLowerCase()) === false
    );
    return errorLetters.map((letter, index) => {
      return (
        <li key={index} className='letter'>
          {letter}
        </li>
      );
    });
  };


  return (
    <div className='error'>
      <h2 className='title'>Letras falladas:</h2>
      <ul className='letters'>{renderErrorLetters()}</ul>
    </div>
  );
};

export default ErrorLetters;
