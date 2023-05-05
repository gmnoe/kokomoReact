import React from 'react';
import { Media } from 'reactstrap';


function About(props) {
    return (
        <div className="container-fluid body">
            <div class="row">
                <div class="col">
                    <br/>
                    <h1 class="text-center">Welcome to Kokomo</h1>
                    <hr />
                </div>
            </div>
            <div class="row">
    <Media>
        <Media body className="mr-5 ml-5">
            <p id="about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit dolor sit amet ante volutpat vehicula. Nunc at lorem ipsum. 
            Donec porttitor magna eu pulvinar consectetur. Curabitur luctus ipsum in metus bibendum laoreet. Quisque sit amet arcu a 
            mauris maximus ornare. Vestibulum urna mauris, hendrerit vitae nisl ac, consequat aliquam turpis. Nullam elementum neque justo, 
            et pulvinar purus malesuada sit amet. Pellentesque pellentesque, sem id gravida pulvinar, nunc ante congue tellus, id facilisis ante 
            felis vel diam. Fusce fermentum mauris a urna lacinia, sit amet rutrum est eleifend. Vivamus quis ligula tincidunt, elementum nibh eu, 
            interdum ex. Nullam dignissim interdum lobortis. Nulla sed posuere augue, eget scelerisque magna. Phasellus commodo, dolor at vehicula 
            feugiat, sapien odio feugiat leo, quis laoreet dolor nibh et augue. Ut tempus dui at purus tristique pellentesque. Suspendisse felis 
            tellus, suscipit nec interdum eu, aliquam in lacus.
            Morbi vehicula ultricies est, ut dictum quam maximus nec. Donec eget arcu mattis, auctor velit sed, convallis nunc. Suspendisse sed aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit dolor sit amet ante volutpat vehicula. Nunc at lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit dolor sit amet ante volutpat vehicula. Nunc at lorem ipsum. 
         </p>
        </Media>
        <Media right>
            <Media className="d-none d-xl-block" src="../assets/images/juanrojas.jpg" alt="A Beach" id="aboutpic" />
        </Media>
    </Media>
    </div>
</div>
    );
}

export default About;  