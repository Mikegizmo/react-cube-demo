import { dogs } from '../app/assets/dogs/dogs';
import { stars } from '../app/assets/stars/stars';
import { cats } from '../app/assets/cats/cats';
import { fruits } from '../app/assets/fruits/fruits';
import { vegetables } from '../app/assets/vegetables/vegetables';

const arrayObjects = [ dogs, cats, fruits, stars, vegetables ];
const array = Math.floor(Math.random() * arrayObjects.length);
console.log(arrayObjects[array]);

const RandomImage = () => {
  return (
    <div>
      {arrayObjects[array].map((item) => {
        return(
          <img key={item.id} src={item.url} alt='' />
        )
      })}
    </div>
  )
}
      
export default RandomImage