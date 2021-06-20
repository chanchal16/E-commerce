import React,{useState} from 'react'
import './Sidebar.css'
// import productsData from '../../Products.json'
import {productsData} from '../../Datastore/products'
import ProductCard from '../productCard/ProductCard';

export default function Sidebar() {
    const [products,setProducts] = useState(productsData);
    const [size,setSize] =useState([]);
    const [gender,setGender] = useState([]);
    const [brand,setBrand] = useState([]);

    const highToLow = ()=> {
        setProducts([...products].sort((a,b)=>b.price-a.price));
    }

    const lowToHigh = ()=> {
        setProducts([...products].sort((a,b)=>a.price-b.price));
    }

    const filterSize = (e)=>{
        setSize([...size,e.target.value])
        if(e.target.checked){
            setProducts([...products].filter((cb)=>cb.size.includes(e.target.value)))
        }
    }

    const filterGender = (e)=>{
        setGender([...gender],e.target.value)
        if(e.target.checked === true){
            setProducts([...products].filter((cb)=>cb.gender.includes(e.target.value)))
            console.log(products)
        }
    }

    const filterBrand = (e)=>{
        setSize([...brand,e.target.value])
        if(e.target.checked){
            setProducts([...products].filter((cb)=>cb.brand.includes(e.target.value)))
        }
    }

    return (
        <div className='container'>
            <div className='left-container'>
                <div className='radios'>
                    <h3>Price</h3>
                    <label className="lcontainer">High to low
                        <input type="radio" name='radiobtn' onClick={highToLow} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="lcontainer">Low to high
                        <input type="radio" name='radiobtn' onClick={lowToHigh} />
                        <span className="checkmark"></span>
                    </label>
                </div>

                <div className='size-sec'>
                    <h3>Size</h3>
                    <label className="lcontainer">S
                        <input type="checkbox" name='checkboxbtn' value='S' onClick={filterSize} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="lcontainer">M
                        <input type="checkbox" name='checkboxbtn' value='M' onClick={filterSize} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="lcontainer">L
                        <input type="checkbox" name='checkboxbtn' value='L' onClick={filterSize} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="lcontainer">XL
                        <input type="checkbox" name='checkboxbtn' value='XL' onClick={filterSize} />
                        <span className="checkmark"></span>
                    </label>
                </div>

                <div className='gender-sec'>
                    <h3>Gender</h3>
                    <input type='checkbox' name='gender' value='male' onClick={filterGender} />
                    <label className='fg'>male</label>

                    <input type='checkbox' name='gender' value='female' onClick={filterGender} />
                    <label className='fg'>Female</label>
                </div>

                <div className='brand-sec'>
                    <h3>Brand</h3>
                    <label className="lcontainer">Tokyo Talkies
                        <input type="checkbox" name='checkboxbtn' value='Tokyo Talkies' onClick={filterBrand} />
                        <span className="checkmark"></span>
                    </label>

                    <label className="lcontainer">Harpa
                        <input type="checkbox" name='checkboxbtn' value='Harpa' onClick={filterBrand} />
                        <span className="checkmark"></span>
                    </label>

                    <label className="lcontainer">Raymond
                        <input type="checkbox" name='checkboxbtn' value='Raymond' onClick={filterBrand} />
                        <span className="checkmark"></span>
                    </label>

                    <label className="lcontainer">HighLander
                        <input type="checkbox" name='checkboxbtn' value='HighLander' onClick={filterBrand} />
                        <span className="checkmark"></span>
                    </label>

                    
                </div>
            </div>

            <div className ='right-container'>
              <div className='grid-container'>
                  {products.map((product)=>{
                    //   {console.log('p',product)}
                    return(
                        //  <span className="">{product.id}</span>
                        <ProductCard key={product.id} product={product}  />
                    );
                  })}
              </div>
            </div>
            
        </div>
    )
}
