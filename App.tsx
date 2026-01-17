import React, { useState, useEffect } from 'react';
import Widget from './components/Widget';
import { getYearProgress } from './utils/dateCalculations';

const App: React.FC = () => {
  const [data, setData] = useState(getYearProgress());

  useEffect(() => {
    const timer = setInterval(() => {
      setData(getYearProgress());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white overflow-hidden">
      <Widget 
        percentage={data.percentage} 
        daysLeft={data.daysLeft} 
      />
    </div>
  );
};

export default App;