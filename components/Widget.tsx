import React from 'react';

interface WidgetProps {
  percentage: number;
  daysLeft: number;
}

const Widget: React.FC<WidgetProps> = ({ percentage, daysLeft }) => {
  return (
    <div className="flex items-center justify-center p-4">
      {/* 
        표준 소형 위젯 사이즈(170px)
        배경색을 요청하신 #F3CE48로 변경하고 둥근 모서리 적용
      */}
      <div className="w-[170px] h-[170px] bg-[#F3CE48] rounded-[2.5rem] flex items-center justify-center select-none shadow-lg">
        
        {/* 모든 텍스트를 왼쪽 정렬하고 적절한 좌측 패딩 부여 */}
        <div className="flex flex-col items-start text-left px-6 w-full">
          
          {/* 첫 번째 줄: % passed (2열과 충분한 여백 유지) */}
          <div className="mb-4">
            <span className="text-black font-bold text-[1.05rem] tracking-tight leading-none">
              {percentage}% passed
            </span>
          </div>

          {/* 두 번째 줄: 메인 숫자 (가장 강조되는 요소) */}
          <div className="mb-0">
            <span className="text-[4.8rem] font-black text-black leading-[0.85] tracking-tighter">
              {daysLeft}
            </span>
          </div>

          {/* 세 번째 줄: days left (이전 버전보다 미세하게 여백을 띄움) */}
          <div className="mt-1">
            <span className="text-black/45 font-bold text-[1.1rem] tracking-tight leading-none">
              days left
            </span>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Widget;