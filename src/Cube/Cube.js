import * as React from 'react';
import './Cube.css'
import Cube from 'react-3d-cube';
import image1 from '../app/assets/eagle-nebula.jpg';
import image2 from '../app/assets/earth.jpg';
import image3 from '../app/assets/milky-way.jpg';
import image4 from '../app/assets/pelican-nebula.jpg';
import image5 from '../app/assets/star-cluster.jpg';
import image6 from '../app/assets/wings-of-orion.jpg';

 
class LogoCube extends React.Component {
  render() {
    return (
    <center>
      <div>
        <div
          style={{
              width: 300,
              height: 300
          }}
        >
        <Cube size={300} index="front">
          <div style={{backgroundColor: 'black'}}>
              1<img style={{width: '280px', height: '300px'}} src={image1} alt=''></img>
          </div>
          <div style={{backgroundColor: 'black'}}>
              2<img style={{width: '280px', height: '300px'}} src={image2} alt=''></img>
          </div>
          <div style={{backgroundColor: 'black'}}>
              3<img style={{width: '280px', height: '300px'}} src={image3} alt=''></img>
          </div>
          <div style={{backgroundColor: 'black'}}>
            4<img style={{width: '280px', height: '300px'}} src={image4} alt=''></img>
          </div>
          <div style={{backgroundColor: 'black'}}>
            5<img style={{width: '280px', height: '300px'}} src={image5} alt=''></img>
          </div>
          <div style={{backgroundColor: 'black'}}>
            6<img style={{width: '280px', height: '300px'}} src={image6} alt=''></img>
          </div>
        </Cube>
        </div>
      </div>
    </center>
    );
  }
}


export default LogoCube
