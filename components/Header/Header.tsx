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
                 <div >
                  <a href="#">Gift Items</a>
                  <a href="#">Women</a>
                  <a href="#">Men</a>
                  <a href="#">Kids</a>
                  <a href="#">Sale</a>         
                </div>
          </div>     
                
                
                  
            
             
        </header>
    )
}