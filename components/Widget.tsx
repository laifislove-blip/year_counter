import React from 'react';

interface WidgetProps {
  percentage: number;
  daysLeft: number;
}

const Widget: React.FC<WidgetProps> = ({ percentage, daysLeft }) => {
  return (
    <div className="flex items-center justify-center p-4">
      {/* 
        요청하신 220px x 220px 사이즈로 조정
        배경색: 오렌지(#FF9F0A)
        모서리 곡률: 3rem
      */}
      <div className="w-[220px] h-[220px] bg-[#FF9F0A] rounded-[3rem] flex items-center justify-center select-none shadow-xl">
        
        {/* 내부 컨텐츠가 220px 배경에 꽉 차도록 패딩 및 간격 재조정 */}
        <div className="flex flex-col items-start text-left px-7 w-full">
          
          {/* 첫 번째 줄: % passed (1.5rem) */}
          <div className="mb-3">
            <span className="text-black font-bold text-[1.5rem] tracking-tight leading-none">
              {percentage}% passed
            </span>
          </div>

          {/* 두 번째 줄: 메인 숫자 (7.2rem으로 배경을 가득 채움) */}
          <div className="mb-0">
            <span className="text-[7.2rem] font-black text-black leading-[0.75] tracking-tighter">
              {daysLeft}
            </span>
          </div>

          {/* 세 번째 줄: days left (1.5rem) */}
          <div className="mt-2">
            <span className="text-black/50 font-bold text-[1.5rem] tracking-tight leading-none">
              days left
            </span>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Widget;