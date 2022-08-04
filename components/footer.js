import Link from 'next/link'

export default function Footer(props){
    if(props.display){
        return(
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p class="col-md-4 mb-0 text-muted">&copy; 2022 Tann Trim, Inc</p>
    
                <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <a className="navbar-brand" href="/">Tann Trim</a>
                </a>
    
                <ul class="nav col-md-4 justify-content-end">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Bags</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Travel</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Accesories</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Gifting</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Jwellery</a></li>
                </ul>
            </footer>
        );
    }
}