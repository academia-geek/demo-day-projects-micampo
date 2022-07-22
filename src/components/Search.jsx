import React, { useState } from 'react'
import { Card } from 'antd';
import { Bar } from '../Styles/Home';

const tabListNoTitle = [
  {
    key: 'Comprar',
    tab: 'Comprar',
  },
  {
    key: 'Agroinsumos',
    tab: 'Agroinsumos',
  },
  {
    key: 'Aliados',
    tab: 'Aliados',
  },
];
const contentListNoTitle = {
  Comprar: <Bar type="text" placeholder='Escribe aqui...' /> ,
  Agroinsumos: <Bar type="text" placeholder='Escribe aqui...' />,
  Aliados: <Bar type="text" placeholder='Escribe aqui...' />,
};
const Search1 = () => {
    const [activeTabKey2, setActiveTabKey2] = useState('Comprar');
    const onTab2Change = (key) => {
      setActiveTabKey2(key);
    };
  return (
    <Card
    style={{
      width: '38%',
      height:'70%',
      background: '#FFFFFF',
      boxShadow:' 0px 4px 40px rgba(0, 193, 148, 0.1)',
      borderRadius: '8px',
    }}
    tabList={tabListNoTitle}
    activeTabKey={activeTabKey2}
    onTabChange={(key) => {
      onTab2Change(key);
    }}
  >
    {contentListNoTitle[activeTabKey2]}
  </Card>
  )
}

export default Search1