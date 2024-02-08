import React from 'react';
import '../style/About.css';

const About = () => {
    let images = [
        "https://i.pinimg.com/736x/6d/7d/b3/6d7db3a1037c8ac5b41b0ebfec293ca4.jpg",
        "https://i.pinimg.com/550x/52/10/e4/5210e4858e732f40ef13e5010d52b1f4.jpg",
        "https://i.pinimg.com/736x/44/08/9e/44089e56f4c65b00fffb914361f10cf4.jpg"
    ];
    let slide = document.getElementById("slider");
    const slider = () => {
        let i = 0;
        setInterval(function () {
            i = i < images.length - 1 ? ++i : 0;
            slide.src = images[i];
        }, 2000);
    };
    slide.addEventListener("load", slider());
    return (
        <div>
            <div className="camp">
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/78235/tent-clipart-md.png" alt="Image" id="tent" />
                <img src="https://i.gifer.com/I5Wi.gif" alt="Image" id="fire" />
            </div>
            <div className="info">
                <h1>ABOUT TRAVEL TO</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                    nostrum excepturi unde eveniet delectus? Porro esse laudantium hic
                    ipsam sed inventore, aliquid quidem tempora rem harum quasi quia
                    corrupti dignissimos?
                </p>
            </div>
            <div className="lower">
                <div className="info" id="lower-info">
                    <h1>ABOUT OUR TEAM</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                        nostrum excepturi unde eveniet delectus? Porro esse laudantium hic
                        ipsam sed inventore, aliquid quidem tempora rem harum quasi quia
                        corrupti dignissimos?
                    </p>
                </div>
                <div className="slider" id="lower-img">
                    <img src="https://i.pinimg.com/736x/6d/7d/b3/6d7db3a1037c8ac5b41b0ebfec293ca4.jpg" alt="Image" id="slider" />
                </div>
            </div>
        </div>
    );
}

export default About;
