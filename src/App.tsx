import { Tab, TabList } from '@fluentui/react-components';
import { teamsLightTheme } from '@fluentui/react-components';
import React from 'react';
import Tree from 'react-d3-tree';
import './App.css';
const circleRedius = 15;
const canvasHeight = 1020;
const canvasWidth = 900;
const cardHeight = 160;
const cardWidth = 280;
const theme = teamsLightTheme;
const NodeLocationX = - cardHeight / 2 - circleRedius * 4;
const NodeLocationY = -circleRedius - cardWidth / 2;
const nodeSize = { x: cardWidth + 40, y: cardHeight + 40 };
const translate = { x: canvasWidth / 2, y: cardHeight }
const dimensions = { width: canvasWidth, height: cardHeight * 4 }
const primaryBackground = theme.colorNeutralForeground2BrandHover;
const bodyBackground = theme.colorNeutralBackground1;
const textColor = theme.colorNeutralForeground1;
const disabledColor = theme.colorNeutralForegroundDisabled;
const orgChart = {
  name: 'Hello',
  details: 'Hello site',
  ChildCount: 5,
  children: [
  ]
};
const renderRectSvgNode = ({ nodeDatum, toggleNode }): JSX.Element => {
  return (
    <g>
      <rect x={NodeLocationX} y={NodeLocationY} width={cardWidth} height={cardHeight} rx={circleRedius} cursor="grab" ry={circleRedius} fill={primaryBackground} stroke={primaryBackground} />
      <rect x={NodeLocationX + 1} y={9 + NodeLocationY} width={cardWidth - 2} height={cardHeight - 10} cursor="grab" rx="16" ry="16" fill={bodyBackground} stroke={bodyBackground} />
      <circle r={circleRedius} fill={primaryBackground} stroke="none" cursor="pointer" pointer-events="click" onClick={toggleNode} visibility={nodeDatum.ChildCount > 0 ? "visible" : "hidden"} />
      <text stroke-width="1" stroke={bodyBackground} text-anchor="middle" cursor="pointer" onClick={toggleNode} visibility={nodeDatum.ChildCount > 0 ? "visible" : "hidden"} > {nodeDatum.__rd3t.collapsed ? 'V' : 'A'}</text>
      <text stroke-width="0.5" stroke={textColor} cursor="grab" x={NodeLocationX +8} y={NodeLocationY + 32} >{nodeDatum.name}</text>
    </g>
  );
}
function App() {
  return (
    <div className="App">
      <header>
        <TabList>
          <Tab value="tab1">
            Load Balancing
          </Tab>
          <Tab value="tab2">
            Second Tab
          </Tab>
          <Tab value="tab3">
            Third Tab
          </Tab>
          <Tab value="tab4">
            Fourth Tab
          </Tab>
        </TabList>
      </header>
      <div style={{ height: canvasHeight, background: bodyBackground }}>
        {
          <Tree data={orgChart}
            orientation='vertical'
            renderCustomNodeElement={renderRectSvgNode}
            initialDepth={0}
            nodeSize={nodeSize}
            pathFunc='diagonal'
            translate={translate}
            dimensions={dimensions}
            depthFactor={3 * cardHeight}
            shouldCollapseNeighborNodes={true} />
        }
      </div>

    </div>
  );
}

export default App;
