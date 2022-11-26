import '../Cube/Cube.css'
import Cube from 'react-3d-cube';
import { dogs } from '../app/assets/dogs/dogs';
import { stars } from '../app/assets/stars/stars';
import { cats } from '../app/assets/cats/cats';
import { fruits } from '../app/assets/fruits/fruits';
import { vegetables } from '../app/assets/vegetables/vegetables';

const arrayObjects = [ dogs, cats, fruits, stars, vegetables ];
const array = Math.floor(Math.random() * arrayObjects.length);
const arrayImg = arrayObjects[array];

 const LogoCube =() => {
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
              <img style={{width: '300px', height: '300px'}} src={(arrayImg[0].url)} alt='' />
              <h4 className='text-block'>1</h4>
          </div>
          <div style={{backgroundColor: 'black'}}>
              <img style={{width: '300px', height: '300px'}} src={(arrayImg[1].url)} alt='' />
              <h4 className='text-block'>2</h4>
          </div>
          <div style={{backgroundColor: 'black'}}>
              <img style={{width: '300px', height: '300px'}} src={arrayImg[2].url} alt='' />
              <h4 className='text-block'>3</h4>
          </div>
          <div style={{backgroundColor: 'black'}}>
            <img style={{width: '300px', height: '300px'}} src={arrayImg[3].url} alt='' />
            <h4 className='text-block'>4</h4>
          </div>
          <div style={{backgroundColor: 'black'}}>
            <img style={{width: '300px', height: '300px'}} src={arrayImg[4].url} alt='' />
            <h4 className='text-block'>5</h4>
          </div>
          <div style={{backgroundColor: 'black'}}>
            <img style={{width: '300px', height: '300px'}} src={arrayImg[5].url} alt='' />
            <h4 className='text-block'>6</h4>
          </div>
        </Cube>
        </div>
      </div>
    </center>
    );
}




export default LogoCube
