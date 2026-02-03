import React from 'react';

interface WidgetProps {
  percentage: number;
  daysLeft: number;
}

const Widget: React.FC<WidgetProps> = ({ percentage, daysLeft }) => {
  return (
    <div className="flex items-center justify-center p-8">
      {/* 
        전체적인 사이즈를 기존보다 100% 더 키움 (440px x 440px)
        배경색: 선명한 오렌지(#FF9F0A)
        모서리 곡률을 크기에 맞춰 6rem으로 대폭 확대
      */}
      <div className="w-[440px] h-[440px] bg-[#FF9F0A] rounded-[6rem] flex items-center justify-center select-none shadow-2xl">
        
        {/* 내부 컨텐츠가 거대한 배경을 가득 채우도록 패딩과 간격 조정 */}
        <div className="flex flex-col items-start text-left px-12 w-full">
          
          {/* 첫 번째 줄: % passed (스케일에 맞춰 3rem으로 확대) */}
          <div className="mb-6">
            <span className="text-black font-bold text-[3rem] tracking-tight leading-none">
              {percentage}% passed
            </span>
          </div>

          {/* 두 번째 줄: 메인 숫자 (배경을 압도하도록 14rem 이상으로 확대) */}
          <div className="mb-0">
            <span className="text-[14.5rem] font-black text-black leading-[0.75] tracking-[ -0.05em]">
              {daysLeft}
            </span>
          </div>

          {/* 세 번째 줄: days left (비율에 맞춰 3rem으로 확대 및 간격 조정) */}
          <div className="mt-4">
            <span className="text-black/50 font-bold text-[3rem] tracking-tight leading-none">
              days left
            </span>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Widget;