import'./Nav.css'
import Button from 'react-bootstrap/Button';
const Nav = () =>{

    return(
        <div className='main '>
            <div className='subdiv'>
                <img src="/logo.png" className='logo' />

            </div>

            <div className='subdiv'>
                <h1 className='name'>
                    SHABNA FLOUR MILL
                </h1>

            </div>
            <div className='subdiv'>
            <Button variant="secondary" className='hbotton' href='/'>HOME
            
            </Button>{' '}
            <Button variant="secondary" className='h-botton' href='/login'>LOGIN
            
            </Button>{' '}


            </div>

        </div>
    )
}
export default Nav;