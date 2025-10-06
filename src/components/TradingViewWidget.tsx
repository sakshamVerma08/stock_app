// TradingViewWidget.jsx
'use client';
import useTradingViewWidget from '@/app/hooks/useTradingViewWidget';
import { MARKET_OVERVIEW_WIDGET_CONFIG } from '@/lib/constants';
import React, { useEffect, useRef, memo } from 'react';

type TradingViewWidgetProps = {

  title?: string,
  scriptURL: string,
  config: Record<string,unknown>,
  className?: string,
  height?: number,
}


function TradingViewWidget({title,scriptURL,config,height=600,className}: TradingViewWidgetProps) {
  

  const containerRef = useTradingViewWidget(scriptURL, config,height);

  return (


    <div className='w-full'>

      {title && <h3 className='text-2xl font-medium text-gray-100 mb-5'>{title}</h3>}


    <div className={`tradingview-widget-container ${className}`} ref={containerRef} >
      <div className="tradingview-widget-container__widget" style={{ height, width: "100%" }}/>
      
    </div>

    </div>
  );
}

export default memo(TradingViewWidget);
