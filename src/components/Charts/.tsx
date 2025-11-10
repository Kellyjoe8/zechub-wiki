import { useState } from 'react';
import { HalvingMeter } from '@/components/HalvingMeter/halving-meter';
import { TabsTrigger } from '@/components/Charts/Tabs';

export default function ChartPage() {
  const [showHalvingMeter, setShowHalvingMeter] = useState(false);

  return (
    <div>
      {/* Your existing chart tabs */}
      <Tabs defaultValue="price">
        <TabsList>
          <TabsTrigger value="price">Price</TabsTrigger>
          <TabsTrigger value="volume">Volume</TabsTrigger>
          {/* Add Halving Meter tab */}
          <TabsTrigger 
            value="halving-meter"
            onClick={() => setShowHalvingMeter(!showHalvingMeter)}
          >
            Halving Meter
          </TabsTrigger>
        </TabsList>

        {/* Your existing tab content */}
        
        {/* Show HalvingMeter when active */}
        {showHalvingMeter && (
          <div className="mt-4">
            <HalvingMeter />
          </div>
        )}
      </Tabs>
    </div>
  );
}
