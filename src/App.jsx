const App = () => {

  const name= 'Damilola';
  const x = 10;
  const y = 20;
  const names = ['Brad', 'Mary', 'Joe', 'Sara']
  const loggedIn = true
  const styles = {
    color: 'red',
    fontSize: '55px'
  }


  return (
    <>
      <div className="text-5xl">App</div>
      <p style={ styles }>My name is {name}</p>
      <p>
        The Sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
    </>
  )
}

export default App