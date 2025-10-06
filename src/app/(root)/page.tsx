import TradingViewWidget from "@/components/TradingViewWidget"
import { Button } from "@/components/ui/button"
import { MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from "@/lib/constants"
import { Homemade_Apple } from "next/font/google"

type Props = {}

const scriptURL = "https://s3.tradingview.com/external-embedding/embed-widget-";

const page = (props: Props) => {
  return (
    <div className="flex min-h-screen home-wrapper">

      <section className="grid w-full gap-8 home-wrapper">


        <div className="md:col-span-1 xl:col-span-1">

            <TradingViewWidget title = "Market Overview" scriptURL = {`${scriptURL}market-overview.js`} config={MARKET_OVERVIEW_WIDGET_CONFIG} height = {600} className="custom-chart" />
        </div>

        <div className="md:col-span xl:col-span-2">

            <TradingViewWidget title = "Stock Heatmap" scriptURL ={ `${scriptURL}stock-heatmap.js`} config={TOP_STORIES_WIDGET_CONFIG} height = {600} className="custom-chart" />
        </div>

      </section>


       <section className="grid w-full gap-8 home-section">


        <div className="h-full md:col-span-1 xl:col-span-1">

            <TradingViewWidget title = "Top Stories" scriptURL = {`${scriptURL}market-overview.js`} config={TOP_STORIES_WIDGET_CONFIG} height = {600} className="custom-chart" />
        </div>

        <div className="h-full md:col-span-1 xl:col-span-2">

            <TradingViewWidget title = "Stock Heatmap" scriptURL ={ `${scriptURL}timeline.js`} config={MARKET_OVERVIEW_WIDGET_CONFIG} height = {600} className="custom-chart" />
        </div>

      </section>


      
    </div>
  )
}

export default page;