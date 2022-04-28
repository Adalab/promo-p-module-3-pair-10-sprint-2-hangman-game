import '../../styles/Letters.scss';

const SolutionLetters = (props) => {
  const renderSolutionLetters = () => {
    const wordLetters = props.THEword.split('');
    return wordLetters.map((letter, index) => {
      const exists = props.THEuserLetters.includes(letter.toLocaleLowerCase());
      return (
        <li key={index} className='letter'>
          {exists ? letter : ''}
        </li>
      );
    });
  };
  return (
    <div className='solution'>
      <h2 className='title'>Solución:</h2>
      <ul className='letters'>{renderSolutionLetters()}</ul>
    </div>
  );
};

export default SolutionLetters;