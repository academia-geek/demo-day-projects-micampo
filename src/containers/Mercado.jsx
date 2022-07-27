import React from 'react';
import AnyChart from 'anychart-react';
import anychart from 'anychart';

const Mercado = () => {

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
               data={[20, 2, 5, 6, 7, 39, 9, 58]}
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
