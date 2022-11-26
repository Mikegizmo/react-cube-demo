import { dogs } from '../app/assets/dogs/dogs';

const Images = () => {
  return (
    <div>
      {dogs.map((dog) => {
        return(
          <img src={dog.url} alt='' />
        )
      })}
    </div>
  )
}
      
export default Images