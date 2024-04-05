import React, { useState } from 'react'

export default function About() {

    const toggleStyle = () => {
        if (myStyle.backgroundColor === 'white') {
            setMyStyle({
                backgroundColor: 'black',
                color: 'white',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
        else {
            setMyStyle({
                backgroundColor: 'white',
                color: 'black'
            })
            setBtnText("Enable Dark Mode")
        }
    }
    const [myStyle, setMyStyle] = useState({ backgroundColor: 'white', color: 'black' })
    const [btnText, setBtnText] = useState('Enable Dark Mode')
    return (
        <div className='container' style={ myStyle }>
            <h1 className='my-3'>About Us </h1>
            <div classnamename="accordion container" id="accordionExample" >
                <div classname="accordion-item">
                    <h2 classname="accordion-header">
                        <button classname="accordion-button" style={ myStyle } type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" classname="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div classname="accordion-body" style={ myStyle } >
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classnamees that we use to style each element. These classnamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div classname="accordion-item">
                    <h2 classname="accordion-header">
                        <button classname="accordion-button collapsed" style={ myStyle } type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" classname="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div classname="accordion-body" style={ myStyle } >
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classnamees that we use to style each element. These classnamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div classname="accordion-item">
                    <h2 classname="accordion-header">
                        <button classname="accordion-button collapsed" style={ myStyle } type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" classname="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div classname="accordion-body" style={ myStyle } >
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classnamees that we use to style each element. These classnamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <button type="button" class="btn btn-primary" onClick={ toggleStyle }>{ btnText }</button>
            </div>

        </div >

    )
}
