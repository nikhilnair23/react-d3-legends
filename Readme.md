# forked from @vx/legend and maintaining it for further usage.

```
npm install --save react-d3-legends
yarn add react-d3-legends
```

Legends associate shapes and colors to data.

```js
// legends for linear scales
import { LegendLinear } from 'react-d3-legends';

// legends for quantile scales
import { LegendQuantile } from 'react-d3-legends';

// legends for ordinal scales
import { LegendOrdinal } from 'react-d3-legends';

// legends for size scales
import { LegendSize } from 'react-d3-legends';

// legends for threshold scales
import { LegendThreshold } from 'react-d3-legends';

// custom legends
import { Legend } from 'react-d3-legends';
```

## API

#### LegendLinear
#### LegendQuantile
#### LegendOrdinal
#### LegendThreshold
#### LegendSize
#### Legend

## supported Shapes: circle, square, rectangle, triangle-up, triangle-down, diamond, cross
## Example

```js
import { LegendThreshold } from '@vx/legend';

function MyChart() {
  return (
    <div>
      <svg>{/** chart stuff */}</svg>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontSize: "14px"
        }}
        onClick={this.legendClick}
      >
        <Legend
          scale={colorScale}
          direction="row"
          labelMargin="0 15px 0 0"
          shape={customPointShape}
        />
      </div>
    </div>
  );
}
```
