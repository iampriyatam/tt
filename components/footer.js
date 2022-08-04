import Link from 'next/link'

export default function Footer(props){
    if(props.display){
        return(
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">&copy; 2022 Tann Trim, Inc</p>
    
                <Link href="/">
                <a className="col-md-4 navbar-brand d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto">
                Tann Trim
                </a>
                </Link>
    
                <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Bags</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Travel</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Accesories</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Gifting</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Jwellery</a></li>
                </ul>
            </footer>
        );
    }
}