import * as React from 'react';
import '../Cube/Cube.css'
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
              <img style={{width: '280px', height: '300px'}} src={image1} alt='' />
              <h4 className='text-block'>1</h4>
          </div>
          <div style={{backgroundColor: 'black'}}>
              <img style={{width: '280px', height: '300px'}} src={image2} alt='' />
              <h4 className='text-block'>2</h4>
          </div>
          <div style={{backgroundColor: 'black'}}>
              <img style={{width: '280px', height: '300px'}} src={image3} alt='' />
              <h4 className='text-block'>3</h4>
          </div>
          <div style={{backgroundColor: 'black'}}>
            <img style={{width: '280px', height: '300px'}} src={image4} alt='' />
            <h4 className='text-block'>4</h4>
          </div>
          <div style={{backgroundColor: 'black'}}>
            <img style={{width: '280px', height: '300px'}} src={image5} alt='' />
            <h4 className='text-block'>5</h4>
          </div>
          <div style={{backgroundColor: 'black'}}>
            <img style={{width: '280px', height: '300px'}} src={image6} alt='' />
            <h4 className='text-block'>6</h4>
          </div>
        </Cube>
        </div>
      </div>
    </center>
    );
  }
}


export default LogoCube
