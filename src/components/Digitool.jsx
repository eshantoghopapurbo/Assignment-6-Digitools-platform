import React, { use} from 'react';
import Card from './Card';

const Digitool = ({digitoolPromise,carts,setCarts}) => {
    const dataPromisse = use(digitoolPromise); 

        

    return (
        <div className='' > 
            <div className='text-center'>
                <h2 className= 'text-5xl font-bold mb-5' >Premium Digital Tools</h2>
                <p className='text-[#627382] mb-3' >Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            </div>
            
           <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto ' >
             {
                dataPromisse.map((item) => (<Card key={item.id}  item={item}> carts={carts}
      setCarts={setCarts} </Card> ) )
            }
           </div>
        </div>
    );
};
 
export default  Digitool;