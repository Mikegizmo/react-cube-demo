import '../Cube/Cube.css'
import Cube from 'react-3d-cube';
import SideSelector from "./SideSelector";
import { dogs } from '../app/assets/dogs/dogs';
import { stars } from '../app/assets/stars/stars';
import { cats } from '../app/assets/cats/cats';
import { fruits } from '../app/assets/fruits/fruits';
import { vegetables } from '../app/assets/vegetables/vegetables';
import { birds } from '../app/assets/birds/birds';
import { reptiles } from '../app/assets/reptiles/reptiles';
import { waterfalls } from '../app/assets/waterfalls/waterfalls';

const arrayObjects = [ dogs, cats, fruits, stars, vegetables, birds, reptiles, waterfalls ];
const array = Math.floor(Math.random() * arrayObjects.length);
let arrayImg = arrayObjects[array];

const newArrayObjects = arrayObjects.filter((item) => {
  return item !== arrayImg
});
const array2 = Math.floor(Math.random() * newArrayObjects.length);
console.log(array2);
const arrayItem = Math.floor(Math.random() * 6);
const newArray = newArrayObjects[array2];
console.log(newArray);
const randomItem = newArray[arrayItem];
console.log(randomItem);
arrayImg.splice(arrayItem, 1, randomItem);
console.log(arrayImg);

 const ImageCube = () => {
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
        <SideSelector randomImg={arrayItem}/>
        </div>
      </div>
    </center>
    );
}

export { randomItem };
export default ImageCube;
