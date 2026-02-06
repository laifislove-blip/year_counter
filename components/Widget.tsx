import React from 'react';

interface WidgetProps {
  percentage: number;
  daysLeft: number;
}

const Widget: React.FC<WidgetProps> = ({ percentage, daysLeft }) => {
  return (
    <div className="flex items-center justify-center p-2">
      {/* 
        전체 위젯 사이즈: 150px x 150px
        배경색: iOS 스타일의 선명한 오렌지(#FF9F0A)
        모서리 곡률: 표준 위젯 느낌의 2.25rem
      */}
      <div className="w-[150px] h-[150px] bg-[#FF9F0A] rounded-[2.25rem] flex items-center justify-center select-none shadow-md overflow-hidden">
        
        {/* 
          내부 컨텐츠 컨테이너: 
          좌우 패딩을 px-4(16px)로 설정하여 150px 너비 안에서 숫자가 잘릴 위험을 최소화합니다.
        */}
        <div className="flex flex-col items-start text-left px-4 w-full">
          
          {/* 상단: 연간 진행률 */}
          <div className="mb-0">
            <span className="text-black font-bold text-[0.9rem] tracking-tight leading-tight">
              {percentage}% passed
            </span>
          </div>

          {/* 
            중앙: 남은 일수 숫자
            4.3rem 크기는 3자리 숫자(예: 328, 388)가 150px 박스 안에서 안전하게 표시되도록 계산된 크기입니다.
            leading-none과 block 속성을 사용하여 위아래 잘림을 방지합니다.
          */}
          <div className="my-0.5 w-full overflow-visible">
            <span className="text-[4.3rem] font-black text-black leading-none tracking-[-0.05em] block">
              {daysLeft}
            </span>
          </div>

          {/* 하단: 'days left' 텍스트 */}
          <div className="mt-[-2px]">
            <span className="text-black/60 font-bold text-[0.9rem] tracking-tight leading-tight">
              days left
            </span>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Widget;