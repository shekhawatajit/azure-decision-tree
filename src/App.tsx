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
  name: 'LEGO Web',
  details: 'Communication site',
  owner: 'Allan Bau Madsen',
  ownerimageurl: './Groot.png',
  sitelogurl: './Groot.png',
  ChildCount: 5,
  children: [
    {
      name: 'Handbooks',
      details: '',
      owner: 'Allan Bau Madsen',
      ownerimageurl: './Groot.png',
      sitelogurl: './Groot.png',
      ChildCount: 3,
      children: [
        { name: 'DK HR Handbook', details: 'Communication site', owner: 'dk2SpoM1', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
        { name: 'Employee Handbooks', details: 'Communication site', owner: 'dk2SpoM1', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
        { name: 'Facilities Handbook', details: 'Communication site', owner: 'Shalini Verma', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
      ]
    },
    {
      name: 'Privacy, Governance, Security',
      details: '',
      owner: 'Allan Bau Madsen',
      ownerimageurl: './Groot.png',
      sitelogurl: './Groot.png',
      ChildCount: 4,
      children: [
        { name: 'Confidentiality in the LEGO Group', details: 'Communication site', owner: 'Marianne Blom', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
        { name: 'Data Governance Portal', details: 'Communication site', owner: 'Martin Franck', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
        { name: 'Data Privacy', details: 'Communication site', owner: 'Frank Andersen', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
        { name: 'Digital Security (Cyber Security)', details: 'Communication site', owner: 'Ajit Shekhawat', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
      ]
    },
    {
      name: 'Support , Service and Tools',
      details: '',
      owner: 'Allan Bau Madsen',
      ownerimageurl: './Groot.png',
      sitelogurl: './Groot.png',
      ChildCount: 5,
      children: [
        { name: 'Česká republika Services', details: 'Communication site', owner: 'Martin Vang Sandgaard Jensen', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
        { name: 'Coupa Information and Support', details: 'Communication site', owner: 'Marie-Louise Christensen', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
        { name: 'Denmark Services', details: 'Communication site', owner: 'dk2SpoM1', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
        { name: 'DP Capability Center', details: 'Communication site', owner: 'dk2SpoM1', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
        { name: 'EasyBuy Request', details: 'Communication site', owner: 'Ritha Jennifer Chrost', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
      ]
    },
    {
      name: 'Learnings and awareness',
      details: '',
      owner: 'Allan Bau Madsen',
      ownerimageurl: './Groot.png',
      sitelogurl: './Groot.png',
      ChildCount: 6,
      children: [
        { name: 'Best (IT) practice working from home', details: 'Communication site', owner: 'Anne Abell', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
        { name: 'Corporate Quality & EHS', details: 'Communication site', owner: 'Dorte Dalsgaard', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
        { name: 'COVID-19 Hub', details: 'Communication site', owner: 'Ajit Shekhawat', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
        { name: 'Futurify', details: 'Communication site', owner: 'Anna M. Kristensen', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
        { name: 'LCR Knowledge Portal', details: 'Communication site', owner: 'Shalini Verma', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
        { name: 'Learn about Microsoft 365', details: 'Communication site', owner: 'Alok Kumar', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
      ]
    },
    {
      name: 'Internal Communication',
      details: '',
      owner: 'Allan Bau Madsen',
      ownerimageurl: './Groot.png',
      sitelogurl: './Groot.png',
      ChildCount: 4,
      children: [
        { name: '#OnTheGo', details: 'Communication site', owner: 'Ajit Shekhawat', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
        { name: 'About Us', details: 'Communication site', owner: 'dk2SpoM1', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
        { name: 'Anniversaries', details: 'Communication site', owner: 'Allan Bau Madsen', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
        { name: 'Brand Portal', details: 'Communication site', owner: 'dk2SpoM1', ownerimageurl: './Groot.png', sitelogurl: './Groot.png', ChildCount: 0, children: [] },
      ]
    }
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
