import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <section>
            <div className='container'>
                <div className='all'>
                    <h2>Winter</h2>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">
                                    home
                                </Link>
                            </li>
                            <li>
                                <Link to="/basket">
                                    basket
                                </Link>
                            </li>
                            <li>
                                <Link to="/add">
                                    add
                                </Link>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    </header>
  )
}

export default Header