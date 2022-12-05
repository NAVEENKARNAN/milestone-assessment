import 'bootstrap/dist/css/bootstrap.min.css';
import{useEffcet,useState}from"react";

function App() {
      const[Products,setProducts]=useState([])

      useEffcet(()=>{
         fetch(" https://fakestoreapi.com/products?limit=20 ;")
        .then(res=>res.json())
         .then(json=>setProducts(json))
      },[]);

  return (
        <div className='container'>
          <div className='table table-border'>
            <table>
              <tr>
                <thead>
                  <h3>product image</h3>
                  <h3>product name</h3>
                  <h3>product description</h3>
                  <h3>product rating</h3>
                  <h3>product catagory</h3>
                  <h3>product count</h3>
                </thead>
              </tr>
              <tbody>
                {
                  Products.map((value,index)=>(
                    <tr>
                      <td>{value.image}</td>
                    <td>{value.name}</td>
                    <td>{value.description}</td>
                    <td>{value.rating}</td>
                    <td>{value.catagory}</td>
                    <td>{value.count}</td>
                    </tr>
                  ))
                  

                    
                  }</tbody>

            </table>

          </div>
        </div>
    
  );
}

export default App;
