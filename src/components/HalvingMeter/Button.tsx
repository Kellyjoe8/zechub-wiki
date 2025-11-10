import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { HalvingMeter } from '@/components/HalvingMeter/halving-meter';

export default function ChartOptionsBar() {
  const [showHalvingMeter, setShowHalvingMeter] = useState(false);

  return (
    <div className="flex space-x-2 items-center">
      <Button>1D</Button>
      <Button>1W</Button>
      <Button>1M</Button>
      <Button onClick={() => setShowHalvingMeter(!showHalvingMeter)}>
        Halving Meter
      </Button>

      {showHalvingMeter && (
        <div className="mt-4 w-full">
          <HalvingMeter />
        </div>
      )}
    </div>
  );
}
