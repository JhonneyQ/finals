import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { BasketContext } from '../../components/basketCont';
import { Link } from 'react-router-dom';
import "./index.scss"

// import { Grid2 } from '@mui/material';

const Home = () => {

    const [cards, setCards] = useState([])
    const { basketAdd, basketDec, basketInc } = useContext(BasketContext);
    const [search, setSearch] = useState("")


    const getAllData = async () => {
        try {
            const res = await axios("http://localhost:3000/")
            setCards(res.data.data)
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getAllData()
    }, [])

    const handleChange = (e) => {
        if (e.target.value === "asc") {
            setCards((prevCards) => [...prevCards].sort((a, b) => a.price - b.price));
        } else if (e.target.value === "desc") {
            setCards((prevCards) => [...prevCards].sort((a, b) => b.price - a.price));
        }
    }

    const filtered = cards.filter((prod)=> prod.title.toLowerCase().includes(search.toLocaleLowerCase()))






    return (
        <main>
            <section className='dynamic'>
                <div className='container'>
                    <div className='par'>
                        <h2>New Arrival</h2>
                    </div>
                    <input onChange={(e)=>setSearch(e.target.value)}/>
                    <select name="" id="" onChange={handleChange}>
                        <option value="asc">ASC</option>
                        <option value="desc">DESC</option>
                        <option value="default">DEFAULT</option>
                    </select>
                    <div className='cards'>
                        {cards && filtered.map((p) => (

                            <div className='in'>
                                <img src='https://preview.colorlib.com/theme/winter/img/arrivel/arrivel_3.png' />
                                <div className='card' key={p._id}>
                                    <h2>{p.title}</h2>
                                    <Link to={`/details/${p._id}`}>{p.description}</Link>
                                    <span>${p.price}</span>
                                    <button onClick={() => basketAdd(p)}>Basket</button>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home