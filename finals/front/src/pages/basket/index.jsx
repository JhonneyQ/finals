import React, { useContext } from 'react'
import { BasketContext } from '../../components/basketCont';
import { Link } from 'react-router-dom';


const Basket = () => {

     const {  basketDec, basketInc, basket } = useContext(BasketContext);
    return (
        <main>
            <section>
                <div className='container'>
                    <div className='par'>
                        <h2>New Arrival</h2>
                    </div>
                    <div className='cards'>
                        {basket && basket.map((p) => (

                            <div className='in'>
                                <img src='https://preview.colorlib.com/theme/winter/img/arrivel/arrivel_3.png'/>
                                <div className='card' key={p._id}>
                                    <h2>{p.title}</h2>
                                    <Link to={`/details/${p._id}`}>{p.description}</Link>
                                    <span>${p.price}</span>
                                    <button onClick={() => basketDec(p)}>-</button>
                                    <button onClick={() => basketInc(p)}>+</button>
                                    <p>{p.quantity}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Basket