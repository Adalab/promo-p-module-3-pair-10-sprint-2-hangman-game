import { useEffect, useState } from 'react';
// import { Route, Switch } from 'react-router-dom';

// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';
import '../styles/Dummy.scss';
// import '../styles/Letters.scss';
import '../styles/Form.scss';
import '../styles/Header.scss';

// Aquí importamos el componente Header
import Header from './header/Header';
import Dummy from './main/Dummy';
import ErrorLetters from './main/ErrorLetters';
import Form from './main/Form';
import SolutionLetters from './main/SolutionLetters';



function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [numberOfErrors, setNumberOfErrors] = useState(0);
  const maxNumberOfErrors = 13;

  useEffect(() => {
    // setLoading(true);
    getWordFromApi().then((word) => {
      setWord(word);
      // setLoading(false);
    });
  }, []);

  // events

  /* const handleWord = value => {
    setWord(value);
    setUserLetters([]);
    setLastLetter('');
  }; */

  const handleChangeInput = (valueInput) => {
    let re = /[a-zA-Z]/; //add regular pattern - lesson 3.3 exercise 2
    if (re.test(valueInput)) {
      handleLastLetter(valueInput);
    }
  };

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

/*
  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      const exists = userLetters.includes(letter.toLocaleLowerCase());
      return (
        <li key={index} className='letter'>
          {exists ? letter : ''}
        </li>
      );
    });
  };
*/
 

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);
    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  // Si no funciona con el anterior, sería:
  /* const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    userLetters.push(value);
    setUserLetters([...userLetters]);
  }; */
  // pero, en principio, hacen lo mismo

  return (
    <div className='page'>
      <Header />

      <main className='main'>
        <section>
          <SolutionLetters 
          THEword={word} 
          THEuserLetters={userLetters}/>
          <ErrorLetters 
          THEuserLetters={userLetters} THEword={word}
          />
          <Form handleChange={handleChangeInput}/>
        </section>
        <Dummy THElastLetter={lastLetter} numberOfErrors={getNumberOfErrors} />
      </main>
    </div>
  );
}

export default App;
