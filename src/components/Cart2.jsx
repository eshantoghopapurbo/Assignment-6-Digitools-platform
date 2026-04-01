import React from 'react';

const Cart2 = ({carts,setCarts}) => {
   const totalPrice = carts.reduce((sum,item) => 
    sum + item.price, 0);
   
      const handlePayment =() =>{
        setCarts ([])
      };

      const handleDelete =(item) => {
        const filteredArray = carts.filter(c => c.id !== item.id)
       setCarts(filteredArray)
      }
    
     return (
        <div className='p-10 container mx-auto  z-50'>
            <h2 className='text-2xl font-bold' >Your Cart</h2>
            {
                carts.length === 0 ? <p className='text-center text-3xl p-5'>Cart is empty</p>:
                <>
                
           <div className='space-y-5 mt-4'> 
              {
                carts.map(item => <div className='flex justify-between shadow-lg border border-blue-500 p-3' key={item.id}>
                   <div className='flex gap-2 '>
                     <div>
                        <img className='h-20 w-20 object-contain' src={item.icon} alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>{item.name}</h1>
                         <p className='text-[#627382]' >${item.price}</p>
                    </div>
                   </div>
                    <div>
                        <button onClick={ () => handleDelete (item)} className='text-red-500 btn'>Remove</button>
                        </div>
                </div>)
             }
           </div>
          <div className='flex justify-between bg-blue-500  text-white p-5 mt-5 rounded-lg text-xl'>
             <div>Total:</div>
           <div>${totalPrice}</div>
          </div>
      <button onClick={handlePayment} className='btn w-full mt-5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white text-xl'>Proceed to Checkout</button>
                </>
            }
        </div>
    );
};

export default Cart2;