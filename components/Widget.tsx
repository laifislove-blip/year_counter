import React from 'react';

interface WidgetProps {
  percentage: number;
  daysLeft: number;
}

const Widget: React.FC<WidgetProps> = ({ percentage, daysLeft }) => {
  return (
    <div className="flex items-center justify-center p-2">
      {/* 
        사이즈: 150px x 150px
        배경색: 선명한 오렌지(#FF9F0A)
        모서리 곡률: 150px에 적합한 2rem (약 32px)
      */}
      <div className="w-[150px] h-[150px] bg-[#FF9F0A] rounded-[2rem] flex items-center justify-center select-none shadow-lg overflow-hidden relative">
        
        {/* 
          내부 컨텐츠 컨테이너
          숫자가 잘리는 현상을 방지하기 위해 패딩(px-4)을 적용하고 
          글자 크기를 150px 너비에 맞춰 조정했습니다.
        */}
        <div className="flex flex-col items-start text-left px-4 w-full">
          
          {/* 첫 번째 줄: % passed */}
          <div className="mb-1">
            <span className="text-black font-bold text-[1rem] tracking-tight leading-none">
              {percentage}% passed
            </span>
          </div>

          {/* 두 번째 줄: 메인 숫자 (3자리 숫자가 잘리지 않도록 크기 최적화) */}
          <div className="mb-0">
            <span className="text-[5rem] font-black text-black leading-[0.8] tracking-[-0.05em]">
              {daysLeft}
            </span>
          </div>

          {/* 세 번째 줄: days left */}
          <div className="mt-1">
            <span className="text-black/50 font-bold text-[1rem] tracking-tight leading-none">
              days left
            </span>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Widget;