export default function Header(){
    return(
        <header>
           <div  className="offer" style={{
                backgroundColor: 'rgb(255, 255, 255)',
                fontSize: '0.9rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '2.5rem',
                color: 'rgb(0, 0, 0)'
                }}>

                <p style={{
                    fontWeight: '800%',
                }}
                >FREE AND EASAY RETURNS</p>

                <a style={{
                    fontWeight: '800%',
                    color: 'rgb(0, 0, 0)',
                    marginLeft: '1.25rem',              
                }}
                >SEE DETAILS</a>
          </div>  
{/* --------------------------------------------- */}
          <div className="navbar" style={{
                    backgroundColor: 'rgb(0,0,0)',
                    color:'rgb(255, 255, 255)',
                    height: '5rem',
                    display: 'flex',
                    alignItems: 'center'
                }}> 
                <div className="logo" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',                   
                    height:'70px ',
                    width: '100px',
                    backgroundImage: 'url("/logo.png")',
                    backgroundSize: 'cover'
                }}>
                </div>                       
                 <div className="opt" style={{
                    width: '600px',
                    fontSize: '1.2rem',
                    fontWeight: '800%',
                    color: 'rgb(255, 255, 255)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly'
                 }}>
                  <a href="#" style={{color: 'white', textDecoration: 'none'}}>Gift Items</a>
                  <a href="#" style={{color: 'white', textDecoration: 'none'}}>Women</a>
                  <a href="#" style={{color: 'white', textDecoration: 'none'}}>Men</a>
                  <a href="#" style={{color: 'white', textDecoration: 'none'}}>Kids</a>
                  <a href="#" style={{color: 'white', textDecoration: 'none'}}>Sale</a>         
                </div>

                <div className="search" style={{
                     marginLeft: '500px',
                     border: '1px solid white',
                     height: '40px',
                     width: '150px',
                     display: 'flex',
                     alignItems: 'center'  ,                  
                     fontSize: '1.2rem',
                     fontWeight: '800%'
                }}>
                <i className="fa-solid fa-magnifying-glass" style={{ paddingLeft: '10px'}}></i>
                <p style={{ paddingLeft: '20px'}}>SEARCH</p>

                <div className="icons" style={{
                    marginLeft: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    height: '40px',
                    width: '100px',
                    fontSize: '1.2rem',
                    fontWeight: '800%'
                 }}>
                     <a href="#" style={{ color: 'white', textDecoration: 'none'}}><i className="fa-regular fa-heart"></i></a>
                     <a href="#" style={{ color: 'white', textDecoration: 'none'}}><i className="fa-solid fa-cart-shopping"></i></a>
                </div>
            
            
        </div>
          </div>     
                
                
                  
            
             
        </header>
    )
}