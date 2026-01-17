import React, { useState, useEffect } from 'react';
import Widget from './components/Widget';
import { getYearProgress } from './utils/dateCalculations';

const App: React.FC = () => {
  const [data, setData] = useState(getYearProgress());

  useEffect(() => {
    // 실시간 업데이트를 위해 1분마다 갱신
    const timer = setInterval(() => {
      setData(getYearProgress());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      {/* 다른 문구 없이 위젯 본체만 렌더링 */}
      <Widget 
        percentage={data.percentage} 
        daysLeft={data.daysLeft} 
      />
    </div>
  );
};

export default App;