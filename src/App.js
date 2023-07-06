import './App.css';
import React from "react";

function App() {

  var [date, setDate] = React.useState(new Date());
  const [count, setCount] = React.useState(0);
  var [apocalipseDate, setApocalipseDate] = React.useState(new Date(0, 0, 1, 0, 0, 0));

  React.useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    }
  });

  function ClockComponent() {
    return (
        <div className='clock-div'>
          <p>Current Time: {date.getHours()}: {date.getMinutes()}: {date.getSeconds()}</p>
        </div>
      );
  }

  function Counter() {
    return (
      <div className='counter-div'>
        <span>Time to the APOCALYPSE: {apocalipseDate.getDate()} days, {apocalipseDate.getHours()} hours, {apocalipseDate.getMinutes()} minutes and {apocalipseDate.getSeconds()} seconds</span>
        <br></br>
        <button onClick={() => {
          setCount(count + 1);
          setApocalipseDate(new Date(0, 0, 1, 0, 0, count));
        }}>Clique aqui</button>
      </div>
    );
  }

  return (
    <div className="App">
      <div className='vignette'></div>
      <ClockComponent/>
      <Counter/>
    </div>
  );
}

export default App;
