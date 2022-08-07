import Image from 'next/image'

export default function Products(props){
    console.log(props.products);
    return (
        <section className="products-list py-5">
            <div className='d-flex products-list-details py-3'>
                <div className='d-inline-flex align-items-center'>
                    <p>Women</p>
                    <span></span>
                    <p>All Products</p>
                </div>
                <div className='d-inline-flex align-items-center ms-auto'>
                    <p>{props.pagination.total_records} Products</p>
                </div>
            </div>
            <div className="row g-5">
                {
                    props.products
                    .map(product => 
                        <div className="col-md-3" key={product.id}>
                            <div className="card product mb-2">
                                <img src={product.plpimaage} className="card-img-top product-img"/>
                                <a className='product-bookmark'><Image src='/images/icons/bookmark.svg' height={34} width={26} alt="bookmark" /></a>
                                <div className="card-body">
                                    <h5 className="card-title product-title">{product.name}</h5>
                                    <a href="#" className="stretched-link"></a>
                                    <div className="d-flex">
                                        <div className="p-2 w-100">
                                            <h4 className='product-price me-2'>₹ {product.special_price} <small className='text-decoration-line-through me-2'>{product.price}</small> <span className='me-1'>( {Math.floor((product.price - product.special_price) * 100 / product.price)} % Off )</span>
                                            </h4>
                                        </div>
                                        <div className="p-2 flex-shrink-1">
                                            <a><Image src='/images/icons/add-to-cart.svg' height={40} width={26} alt={product.name} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                }
            </div>
        </section>
    );
}