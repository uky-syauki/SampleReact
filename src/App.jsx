import { Link, Outlet } from 'react-router-dom';
import './App.css';

    function App() {

    return (
        <>
        <div id="sidebar">
            <h1>contact</h1>
            <div>
            <form id="search-form" role="search">
                <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                />
                <div
                id="search-spinner"
                aria-hidden
                hidden={true}
                />
                <div
                className="sr-only"
                aria-live="polite"
                ></div>
            </form>
            <form method="post">
                <button type="submit">New</button>
            </form>
            </div>
            <nav>
            <ul>
            <li>
                <Link to='/'>Beranda</Link>
                </li>
                <li>
                <Link to='/contacts/1'>Your name</Link>
                </li>
                <li>
                <Link to='/latihan'>Latihan page</Link>
                </li>
                <li>
                <Link to='/contacts/2'>Friend name</Link>
                </li>
                <li>
                <Link to='/about'>About</Link>
                </li>
            </ul>
            </nav>
        </div>
        <div id="detail">
        <Outlet/>
        </div>
        </>
    )
    }

    export default App;
