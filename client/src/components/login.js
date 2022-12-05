import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Router,Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Login(){
    return(
        <div className='container'>
            <div className='row text-center'>
                <div className='col-lg-12'>
                    <h1>LOGIN</h1>
                </div>

            </div>
            <div className='row'>
                <div className='col-lg-3'>
                </div>
                <div className='col-lg-4'>
                    <h1>username</h1>
                </div>
                <div className='col-lg-3'>
                    <input type="text" value="" placeholder='fill it' ></input>

                </div>

            </div>
            <div className='row'>
                <div className='col-lg-3'>
                </div>
                <div className='col-lg-4'>
                    <h1>password</h1>
                </div>
                <div className='col-lg-3'>
                    <input type="passord" value="" placeholder='fill it' ></input>

                </div>

            </div>
            <div className='row text-center'>
                <div className='col-lg-12'>
                  

                  <button className='submit'> DONE   </button>
                </div>

            </div>


        </div>
    )
}