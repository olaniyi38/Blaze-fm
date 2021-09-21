import {useEffect} from 'react'
import { Button, makeStyles } from "@material-ui/core"
import {Phone,YouTube,Twitter} from '@material-ui/icons'
import bg1 from '../media/bg1.jpg'
import bg2 from '../media/bg2.jpg'
import arrow from '../media/arrow.png'
import logo from '../media/logo.png'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import introMp3 from '../media/blaze-fm.mp3'

gsap.registerPlugin(ScrollTrigger)


const useStyles = makeStyles({
 intro:{
    paddingTop:'55px',
    textAlign:'center',
    '& h1,p':{
        marginBottom:'10px'
    },'& .section1':{
        background:`url(${bg1}) center no-repeat`,
        backgroundSize: 'cover',
        height:'70vh'
    },'& .section4.featured-shows':{
        background:`url(${bg2}) center no-repeat`,
        backgroundSize: 'cover'
    }
 }
})

const Intro =() =>{
    const classes = useStyles()
    let tl=gsap.timeline()

    
    
    useEffect(()=>{
       function playAudio(){
           let audio = document.querySelector('#audio')
           audio.play()
       }
      
       document.addEventListener('DOMContentLoaded',playAudio())
      
    tl.to('.bg-dark .left',{
        xPercent:-100,
        duration:1,
        delay:1
    })
    .to('.bg-dark .right',{
        xPercent:100,
        duration:1
    },'-=1')
    .to('.bg-dark',{display:'none'})
    .from('#main .section1 .logo',{
        y:30,
        duration:1,
        opacity:0,
       
    },'-=.7')
    // .call(()=>{audio.play(); console.log('hello')},'-=.4')
    .from('.section1 p',{
        y:30,
        duration:1,
        opacity:0,
        rotate:'10deg'
    },'-=.5').from('.section1 button',{
        y:30,
        duration:1,
        opacity:0,
        rotate:'10deg'
    },'-=.5')
    
    gsap.from('.section2 div',{
        y:30,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:'.section2', 
            start:'top 300px'
        },
        stagger:.5,
        ease:'Power.in()'

    })
    gsap.from('.schedule .container > div',{
        y:30,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:'.schedule',
            start:'top 200px'
        },
        stagger:.3

    })
    gsap.fromTo('.featured-shows .container > div',{opacity:0} ,{
        y:30,
        duration:1,
        opacity:1,
        scrollTrigger:{
            trigger:'.featured-shows',
            start:'top 200px'
        },
        stagger:.3  
    })
   },[])

return(
    <>
    <main className={classes.intro} id="main">
        <audio  id='audio' >
            <source src={introMp3} type='audio/mp3' />
        </audio>
        <div className="bg-dark">
            <div className="left"></div>
            <div className="right"></div>
        </div>
         <div className='section1'>
         <div>
          <img src={logo} alt="" className="logo" />
          <p style={{fontWeight:'bold'}}>Best Source, Best time...</p>
          <Button variant='contained'>Tune in live on 89.9</Button>
         </div>
         </div>
         <div className='section2'>
             <div>
             <h2 className='coco'>Who we Are</h2>
             <p>
             BLAZE FM is a proposed radio station aim ed to kickstart in 2021
             with a staff of 15 members on a plot area within the Unilorin Metropolis. The target audience
             are primarily students, residents of ilorin and the adults (16-59 years)
                 </p>
             </div>
             <div>
             <h2 className='coco'>What we do</h2>
             <p>
                 The focus of the establishment is to satisfy the urge of the audience in getting information
                 , education and entertainment. Also, exciting programs which promises to fufill all of the primary (core) functions of Mass Communication along with  the sundry.
             </p>
             </div>
         </div>
         <div className='section3 schedule' id='shows'>
             <p className='coco'>Proposed Schedule</p>
             <img src={arrow} alt="" />
         <div className="container">   
            <div>
                <h2>Morning</h2>
                <table>
                  <tr>
                      <th>Name</th>
                      <th>Duration</th>
                  </tr>
                  <tr>
                      <td>Campus news </td>
                      <td>6:00am - 6:30am</td>
                  </tr>
                  <tr>
                      <td>Local news </td>
                      <td>6:30am - 7:00am</td>
                  </tr>
                  <tr>
                      <td>State news</td>
                      <td>7:00am - 7:30am</td>
                  </tr>
                  <tr>
                      <td>Commercials </td>
                      <td>8:00am - 8:15am</td>
                  </tr>
                  <tr>
                      <td>Sport news</td>
                      <td>8:15am - 8:45am</td>
                  </tr>
                  <tr>
                      <td>Business news</td>
                      <td>8:45am - 9:15am</td>
                  </tr>
                  <tr>
                      <td>Entertainment news</td>
                      <td>9:15am - 9:45am</td>
                  </tr>
                  <tr>
                      <td>Commercials </td>
                      <td>9:45am - 10:00am</td>
                  </tr>
                  <tr>
                      <td>Commercials </td>
                      <td>9:45am - 10:00am</td>
                  </tr>
                  <tr>
                      <td>Do you know? </td>
                      <td>10:00am - 10:15am</td>
                  </tr>
                  <tr>
                      <td>Musicals</td>
                      <td>10:15am - 10:30am</td>
                  </tr>
                  <tr>
                      <td>Global news</td>
                      <td>10:30am - 11:00am</td>
                  </tr>
                  <tr>
                      <td>Commercials</td>
                      <td>11:00am - 11:15am</td>
                  </tr>
                  
                </table>
            </div>
            <div>
                <h2>Afternoon</h2>
                <table>
                  <tr>
                      <th>Name</th>
                      <th>Duration</th>
                  </tr>
                  <tr>
                      <td> Health corner </td>
                      <td>11:15pm - 12:15pm</td>
                  </tr>
                  <tr>
                      <td> Music Countdown </td>
                      <td>12:15pm - 12:45pm</td>
                  </tr>
                  <tr>
                      <td>Talk show  </td>
                      <td>12:45pm - 1:15pm</td>
                  </tr>
                  <tr>
                      <td>Politics today </td>
                      <td>1:15pm - 2:00pm</td>
                  </tr>
                  <tr>
                      <td>Farmers are fathers </td>
                      <td>2:00pm - 3:00pm</td>
                  </tr>
                  
                </table>
            </div>

            <div>
                <h2>Evening</h2>
                <table>
                  <tr>
                      <th>Name</th>
                      <th>Duration</th>
                  </tr>
                  <tr>
                      <td> Bridging the gaps </td>
                      <td>4:00pm - 5:00pm</td>
                  </tr>
                  <tr>
                      <td>Heritage </td>
                      <td>5:00pm - 5:30pm</td>
                  </tr>
                  <tr>
                      <td>Keys to eternity  </td>
                      <td>5:30pm - 6:00pm</td>
                  </tr>
                  <tr>
                      <td>As e dey hot </td>
                      <td>6:00pm - 7:00pm</td>
                  </tr>
                  <tr>
                      <td>The jungle </td>
                      <td>7:00pm - 7:30pm</td>
                  </tr>
                  <tr>
                      <td>Story time</td>
                      <td>8:00pm - 9:00pm</td>
                  </tr>
                  
                </table>
            </div>
        </div>
         </div>
         <div className='featured-shows section4'>
           <div className="container">
             <h2 className='coco'>Featured shows</h2>
               <div>
                   <div className="header">
                   <span className="title">Bridging the gaps</span>
                   <span className='time'>Saturdays from 12:00pm</span>
                   </div>
                   <p className="description">
                   this program as the name implies is solely for the purpose of bridging the gap between the rich and the poor. The program will have a lot of opportunities in jobs creation, connecting and networking the people and supporting businesses with bright future. Also organizing workshops to reduce the rate of unemployment.
                    </p>
               </div>
               <div>
                   <div className="header">
                   <span className="title">Thank God is friday</span>
                   <span className='time'>Fridays from 4:00pm</span>
                   </div>
                   <p className="description">

                   </p>
               </div>
               <div>
                   <div className="header">
                   <span className="title">The Adventure</span>
                   <span className='time'>Tuesdays from 4:00pm</span>
                   </div>
                   <p className="description">

                   </p>
               </div>
               <div>
                   <div className="header">
                   <span className="title">Quiz competition</span>
                   <span className='time'>Wednesdays from 12:00pm</span>
                   </div>
                   <p className="description">

                   </p>
               </div>
               <div>
                   <div className="header">
                   <span className="title">Share your thoughts</span>
                   <span className='time'>Thursdays from 12:00pm</span>
                   </div>
                   <p className="description">

                   </p>
               </div>
               <div>
                   <div className="header">
                   <span className="title">Al Mustaqeem</span>
                   <span className='time'>Saturdays from 4:00pm</span>
                   </div>
                   <p className="description">

                   </p>
               </div>
               <div>
                   <div className="header">
                   <span className="title">The Chronicles</span>
                   <span className='time'>Sundays from 4:00pm</span>
                   </div>
                   <p className="descriptio
                   n"></p>
               </div>
           </div>
         </div>
         <div className='contact section5' id='contact'>
            <h2>Contact for enquiries and ADVERTS</h2>
            <div>
            <ul>
                <li><Phone/> +2340854467898</li>
                <li><Phone/> +2340854467898</li>
                <li><Phone/> +2340854467898</li>
            </ul>
            <ul>
            <li >Catch us live on <a href="#" ><YouTube style={{color:'rgb(241, 28, 28)'}}/> Youtube</a></li>
            <li ><a href="#"><Twitter style={{color:'rgb(65, 105, 236)'}}/> Twitter</a></li>
            <li>FaceBook</li>
            </ul>
            </div>
            
         </div>
      </main>
         
      </>
)
}

export default Intro