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
      {
          name: 'Mercado 3',
          value: 300,
      },
      {
          name: 'Mercado 4',
          value: 400,
      },
      {
          name: 'Mercado 5',
          value: 500,
      },
      {
          name: 'Mercado 6',
          value: 600,
      }
   ];

   return (
      <div
         style={{
            display: 'flex',
            width: '100vw',
            height: '85vh',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
         }}>
         <h1
            style={{
              textAlign: 'center',
              fontSize: '2rem',
              fontWeight: '700',
              marginTop: '3rem',
            }}
         >
            Estadisticas del mercado
         </h1>
         <div
            style={{
               display: 'flex',
               width: '100vw',
               height: '85vh',
               justifyContent: 'center',
               alignItems: 'center',
            }}>
            <AnyChart
               width={500}
               height={500}
               title='productos-a-la-venta'
               id='productos a la venta'
               type='pie'
               data={data}
            />

            <AnyChart
               width={700}
               height={500}
               title='productos vendidos'
               id='productos-vendidos'
               type='column'
               data={[20, 2, 5, 6, 7, 39, 9, 58]}
            />
         </div>
      </div>
   );
};

export default Mercado;
