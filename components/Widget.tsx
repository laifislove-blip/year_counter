import React from 'react';

interface WidgetProps {
  percentage: number;
  daysLeft: number;
}

const Widget: React.FC<WidgetProps> = ({ percentage, daysLeft }) => {
  return (
    <div className="flex items-center justify-center p-4">
      {/* Notion 환경에 최적화된 고정 사이즈 카드 */}
      <div className="w-64 h-64 bg-[#facc15] rounded-[3rem] p-8 flex flex-col items-center justify-between text-center select-none">
        
        {/* 상단: 진행률 */}
        <div className="mt-2">
          <span className="text-black font-bold text-xl tracking-tight opacity-70">
            {percentage}% passed
          </span>
        </div>

        {/* 중앙: 남은 일수 (가장 강조) */}
        <div className="flex items-center justify-center h-full">
          <span className="text-[5.8rem] font-bold text-black leading-none tracking-tighter">
            {daysLeft}
          </span>
        </div>

        {/* 하단: 레이블 */}
        <div className="mb-2">
          <span className="text-black font-extrabold text-lg tracking-[0.1em] uppercase opacity-80">
            days left
          </span>
        </div>
      </div>
    </div>
  );
};

export default Widget;