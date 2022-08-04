import Image from 'next/image'
import Link from 'next/link'

export default function Header(){
    return(
        <header className="app-header">
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
                <div className='container'>
                <Link href="/"><a className="navbar-brand">Tann Trim</a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav mx-auto menu pt-5'>
                        <li className='nav-item'>
                            <a href='#'>Bags</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#'>Travel</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#'>Accesories</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#'>Gifting</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#'>Jwellery</a>
                        </li>
                    </ul>
                    <ul className='navbar-nav ms-auto top-menu'>
                        <li className='nav-item'>
                            <a href='#' title='Search'><Image src="/images/icons/search.svg" height={18} width={18} alt="Search" /></a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' title='Account'><Image src="/images/icons/user-alt.svg" height={18} width={18} alt="user-alt" /></a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' title='Wishlist'><Image src="/images/icons/bookmark.svg" height={18} width={18} alt="bookmark" /></a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' title='Shopping Cart'><Image src="/images/icons/shopping-bag.svg" height={18} width={18} alt="shopping-bag" /></a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
            <div className='mega-menu d-flex justify-content-between pt-5'>
                <div className='card mega-menu-item'>
                    <Image src="/images/icons/duffle-bag-backpack.svg" height={90} width={90} />
                    <a href='#' className='stretched-link'>All Bags</a>
                </div>
                <div className='card mega-menu-item'>
                    <Image src="/images/icons/vanity-pouch.svg" height={90} width={90} />
                    <a href='#' className='stretched-link'>Vanity Pouch</a>
                </div>
                <div className='card mega-menu-item'>
                    <Image src="/images/icons/duffle-bag.svg" height={90} width={90} />
                    <a href='#' className='stretched-link'>Duffle Bag</a>
                </div>
                <div className='card mega-menu-item'>
                    <Image src="/images/icons/laptop-sleeve.svg" height={90} width={90} />
                    <a href='#' className='stretched-link'>Laptop Sleeve</a>
                </div>
                <div className='card mega-menu-item'>
                    <Image src="/images/icons/messenger.svg" height={90} width={90} />
                    <a href='#' className='stretched-link'>Messenger Bags</a>
                </div>
                <div className='card mega-menu-item'>
                    <Image src="/images/icons/sling.svg" height={90} width={90} />
                    <a href='#' className='stretched-link'>Sling Bags</a>
                </div>
                <div className='card mega-menu-item'>
                    <Image src="/images/icons/handbag.svg" height={90} width={90} />
                    <a href='#' className='stretched-link'>Handbags</a>
                </div>
            </div>
        </header>
    );
}