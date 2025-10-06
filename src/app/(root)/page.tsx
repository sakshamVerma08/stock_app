import TradingViewWidget from "@/components/TradingViewWidget"
import { Button } from "@/components/ui/button"
import { HEATMAP_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from "@/lib/constants"
import { Homemade_Apple } from "next/font/google"

type Props = {}

const scriptURL = "https://s3.tradingview.com/external-embedding/embed-widget-";

const page = (props: Props) => {
  return (
    <div className="flex min-h-screen home-wrapper">

      <section className="grid md:grid-cols-2 w-full gap-8 home-wrapper">


        <div className="md:col-span-1 xl:col-span-1">

            <TradingViewWidget title = "Market Overview" scriptURL = {`${scriptURL}market-overview.js`} config={MARKET_OVERVIEW_WIDGET_CONFIG} height = {600} className="custom-chart" />
        </div>

        <div className="md:col-span xl:col-span-1">

            <TradingViewWidget className = "custom-chart" title = "Stock Heatmap" scriptURL ={ `${scriptURL}stock-heatmap.js`} config={HEATMAP_WIDGET_CONFIG} height = {600}  />
        </div>

      </section>


       <section className="grid md:grid-cols-2 w-full gap-8 home-section">


        <div className="h-full md:col-span-1 xl:col-span-1">

            <TradingViewWidget  scriptURL = {`${scriptURL}timeline.js`} config={TOP_STORIES_WIDGET_CONFIG} height = {600} className="custom-chart" />
        </div>

        <div className="h-full md:col-span-1 xl:col-span-2">

            <TradingViewWidget title="Market Data" scriptURL ={ `${scriptURL}market-quotes.js`} config={MARKET_OVERVIEW_WIDGET_CONFIG} height = {600}  />
        </div>

      </section>


      
    </div>
  )
}

export default page;