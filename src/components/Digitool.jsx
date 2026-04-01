import React, { use} from 'react';
import Card from './Card';

const Digitool = ({digitoolPromise,carts,setCarts}) => {
    const dataPromisse = use(digitoolPromise); 

        

    return (
        <div className='' > 
           <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto ' >
             {
                dataPromisse.map((item) => (<Card key={item.id}  item={item}  carts={carts}
      setCarts={setCarts}>  </Card> ) )
            }
           </div>
        </div>
    );
};
 
export default  Digitool;