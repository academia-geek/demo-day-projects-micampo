import React from 'react';
import AnyChart from 'anychart-react';
import anychart from 'anychart';

const Mercado = () => {
   const data = [
      {
         name: 'Mercado 1',
         value: 100,
      },
      {
         name: 'Mercado 2',
         value: 200,
      },
   ];

   return (
      <div style={{ display: 'flex', width: '100vw', height: '85vh' }}>
         <AnyChart
            width={500}
            title='productos-a-la-venta'
            id='productos a la venta'
            type='pie'
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            />

         <AnyChart
            width={700}
            title='productos vendidos'
            id='productos-vendidos'
            type='column'
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
         />
      </div>
   );
};

export default Mercado;
