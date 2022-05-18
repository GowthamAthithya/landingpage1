import React from 'react'
import './homepage.css'
import turtle from './images/turtle-icons1.png'

function Homepagee() {
  return (
    <div>
        <div class="banner">
        <div class="banner-page">
            <h1>Turttle book landing page</h1>
           <img id="turtle" src={turtle} alt='' />
            <p class="bold">I want to be your favourite ``Turtle``</p>
            <button class="button">Subsscribe to me and enjoy the breeze</button>
        </div>  

        <div>
            <span class="bold" id="turtleName">Turttle's</span>
            <form action="">
                <input type="text" />
                <input type="submit" value="submit" />
            </form>
            <div>
                <ul>
                    <li>
                        <span>Hey, It's Turttle again</span>
                    </li>
                    <li>
                        <span>I haven't eaten any fish since yesterday</span>
                    </li>
                    <li>
                        <span>burp</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Homepagee;
