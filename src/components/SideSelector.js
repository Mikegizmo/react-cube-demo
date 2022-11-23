const SideSelector = () => {
  const sideChoice = (e) => {
    console.log(e.target.value);
  }

  return (
    <center>
      <br />
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
    </center>
  )
}

export default SideSelector;