import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
 export  default function Index(){
    return(
        <div className='container'>
            <div className='row text-center'>
                <div className="col-lg-12">
                    <h1 >REGISTRATION FORM</h1>
                    
                </div>
                
            </div>
            <div className='row text-center'>
                <div className='col-lg-3'>

                </div>
                <div className='col-lg-2'>
                    <div>
                        <label> first-name</label>
                    </div>

                </div>
                
                <div className='col-lg-4'>
                      <input type="text" value="" />
                </div>
                <div className='col-lg-3'></div>

            </div>
            <div className='row text-center'>
                <div className='col-lg-3'>

                </div>
                <div className='col-lg-2'>
                    <div>
                        <label> last-name</label>
                    </div>

                </div>
                
                <div className='col-lg-4'>
                      <input type="text" value="" />
                </div>
                <div className='col-lg-3'></div>

            </div>
            <div className='row text-center'>
                <div className='col-lg-3'>

                </div>
                <div className='col-lg-2'>
                    <div>
                        <label> email</label>
                    </div>

                </div>
                
                <div className='col-lg-4'>
                      <input type="text" value="" />
                </div>
                <div className='col-lg-3'></div>

            </div>
            <div className='row text-center'>
                <div className='col-lg-3'>

                </div>
                <div className='col-lg-2'>
                    <div>
                        <label> phone</label>
                    </div>

                </div>
                
                <div className='col-lg-4'>
                      <input type="Number" value="" />
                </div>
                <div className='col-lg-3'></div>

            </div>
            <div className='row text-center'>
                <div className='col-lg-3'>

                </div>
                <div className='col-lg-2'>
                    <div>
                        <label> password</label>
                    </div>

                </div>
                
                <div className='col-lg-4'>
                      <input type="password" value="" />
                </div>
                <div className='col-lg-3'></div>

            </div>
            
              <div className='row text-center mt-4'>
              <div className='col-lg-12'>
              <button className='but' > submit</button> 
              </div>
              </div>
                
              
                
                

         

        </div>
        
    )
 }