import React from 'react';

interface WidgetProps {
  percentage: number;
  daysLeft: number;
}

const Widget: React.FC<WidgetProps> = ({ percentage, daysLeft }) => {
  return (
    <div className="flex items-center justify-center">
      {/* Notion 임베드 시 음영 문제를 방지하기 위해 모든 외부 shadow 및 glow 제거 */}
      <div className="w-64 h-64 bg-[#facc15] rounded-[2.5rem] p-10 flex flex-col justify-center">
        
        {/* 첫 번째 줄: 진행률 % */}
        <div className="mb-1">
          <span className="text-black font-bold text-2xl tracking-tight opacity-80">
            {percentage}% passed
          </span>
        </div>

        {/* 두 번째 줄: 남은 일수 강조 */}
        <div className="flex flex-col">
          <span className="text-[6.8rem] font-bold text-black leading-[0.9] -ml-1 tracking-tighter">
            {daysLeft}
          </span>
          <span className="text-black/50 font-bold text-xl tracking-tight uppercase">
            days left
          </span>
        </div>
      </div>
    </div>
  );
};

export default Widget;