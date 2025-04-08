import { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("New interval started:", interval); // Logs every interval
      setTime(new Date()); // Updates the time
    }, 1000);
  }, []); // ❌ No cleanup, causing multiple intervals

  return (
    <div>
      <h2>Time: {time.toLocaleTimeString()}</h2>
      <p>Check the console to see multiple intervals running!</p>
    </div>
  );
};

export default App;
