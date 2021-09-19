import { AppBar, Button, IconButton} from "@material-ui/core"
import SideMenuButton from './SideMenuButton'
import gsap from "gsap/gsap-core"
import { makeStyles } from "@material-ui/styles"
import { useState } from "react"
import logoPng from '../media/logo.png'


const useStyles = makeStyles({
    header:{
            boxShadow: '0px 4px 10px .2730363d',
            background:'#f5e838',
            height:'55px',
            zIndex:10
        ,
        '&  nav .desktop-nav':{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '.3rem 1rem',
        },
        '&   .navbar-title img':{
         position: 'relative',
         width:'100%',
         height:'100%'
         
        },
        '&   .navbar-title':{
            position:'absolute',
        width:'10rem',
        top:'-52px'
        },
        '&  nav .mobile-nav':{ 
        marginTop: '.5rem',
        height: '0px',
        overflow: 'hidden',
        transition: 'all .5s ease-out'
        
        },
        '&  nav .mobile-nav.active':{
            height: '115px'
            
        },
        '&  nav .mobile-nav .nav-item':{
            display: 'block',
            padding: '.8rem 0.5rem .5rem 1.5rem'
        },
        
        '&  .nav-link':{
            position: 'relative',
            textDecoration: 'none',
            color: 'black'
        },
        '&  .nav-link::before':{
        content: " ",
        position: 'absolute',
        height: '3px',
        width:'0%',
        backgroundColor: 'black',
        bottom: '-.3rem',
        opacity: 0,
        transition: 'all .5s linear'
        },
        '&  .nav-link:hover::before':{
            opacity: 1
        },
        '&  .menu-button':{
            display: 'none',
            position: 'relative'
        },
        '&  .nav-item':{
            display: 'inline-block',
            padding: '0rem 1.3rem',
            textDecoration: 'none',
            fontSize:'1rem'
        },'& .nav-item button':{
            color:'#f5e838',
            background:'black'
        }
    }
})




const Header = () => {
 const classes=useStyles()

const [isActive, setIsActive] = useState(false)

    const toggleMenu=()=>{
    setIsActive(!isActive)
    console.log('clicked')
    }

   

    let navItems = document.querySelectorAll(' .mobile-nav .nav-link')
    navItems.forEach((navitem)=>{
        navitem.addEventListener('click',()=>{
            toggleMenu()
        })
    })

   



return (
<AppBar className={classes.header} position="fixed" color="default"  id="header">
    <nav>

        <div className="desktop-nav">
            <p className="navbar-title"><img src={logoPng} alt="" /></p>
            <p></p>
               <SideMenuButton toggleMenu={toggleMenu} active={isActive}/>
            <ul className="desktop-nav">
                <li className="nav-item">
                    <a href="#shows" className="nav-link">Shows</a>
                </li>
                <li className="nav-item">
                   <a href="#contact" className=" nav-link">Contact Us</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link"><Button variant='contained' color='primary' size='small'>Book an advert</Button></a>
                </li>
            </ul>
        </div>

        <div className={`mobile-nav ${isActive ? 'active' : ''}`}>
            <ul>
            <li className="nav-item">
                    <a href="#shows" className="nav-link">Shows</a>
                </li>
                <li className="nav-item">
                   <a href="#contact" className=" nav-link">Contact Us</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link"><Button variant='contained' color='primary' size='small'>Book an advert</Button></a>
                </li>
            </ul>
        </div>

    </nav>
</AppBar>
)
}




export default Header