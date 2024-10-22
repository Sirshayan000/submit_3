export default function Footer(){
    return(
        <footer>
            <div className="footer" style={{    
                    height: '400px',
                    backgroundColor: 'rgb(0,0,0)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1.2rem',
                    justifyContent: 'space-evenly'
                  
            }}>
                <ul className="list_1">
                    <h3>Support</h3>
                    <li>Contact Us</li>                    
                    <li>Shipping and Delivery</li>
                    <li>Return Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Service Discount</li>
                </ul>

                <ul className="list_2">                 
                    <li>FAQ</li>
                    <li>Shipping and Delivery</li>
                    <li>Return Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Student Discount</li>
                    <li>Refer a Friend</li>
                </ul>

                <ul className="list_3">
                    <h3>About</h3>
                    <li>Company</li>
                    <li>Corporate News</li>
                    <li>Press Center</li>
                    <li>#REFORM</li>
                    <li>Investors</li>
                    
                </ul>

                <ul className="list_4">
                    <h3>STAY UP TO DATE</h3>
                    <li>Sign Up For Email</li>
                   
                </ul>


            
   
            </div>
        </footer>
    )
}