import { useState, useEffect } from 'react';

const SideSelector = () => {
  const [ choice, setChoice ] = useState('');
  const [ isTextShown, setTextShown ] = useState(true);
  const [ show, toggleShow ] = useState(true);
  const [ bgColor, setBgColor ] = useState('dodgerblue');
  
  const sideChoice = (event) => {
    event.preventDefault();
    console.log('You have selected side: ' + event.target.value);
    setChoice(event.target.value);
    setTextShown(false);
    toggleShow(false);
  };

  const bgColorChange = (bgColor) => {
    setBgColor(bgColor)
  };

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor])

  const checkChoice = () => {
      bgColorChange('forestgreen');
  }; 
  
  return (
    <center>
      <br />
      <br />
      <br />
      <br />
      <h3 className="radio-group" onChange={sideChoice}>
        <label>
          <input type="radio" name='cube' value='1' /> 1&nbsp;&nbsp;&nbsp;
        </label>
        <label>
          <input type="radio" name='cube' value='2' /> 2&nbsp;&nbsp;&nbsp;
        </label>
        <label>
          <input type="radio" name='cube' value='3' /> 3&nbsp;&nbsp;&nbsp;
        </label>
        <label>
          <input type="radio" name='cube' value='4' /> 4&nbsp;&nbsp;&nbsp;
        </label>
        <label>
          <input type="radio" name='cube' value='5' /> 5&nbsp;&nbsp;&nbsp;
        </label>
        <label>
          <input type="radio" name='cube' value='6' /> 6
        </label>
      </h3>
      <div>
        {!isTextShown ? 
          <h4>You have selected side {choice}, is this correct?<br />
          If not, please choose another side.</h4>
          : null}
      </div>
      {!show ? <button onClick={checkChoice}>Confirm Choice</button> : null}
    </center>
  )
}

export default SideSelector;