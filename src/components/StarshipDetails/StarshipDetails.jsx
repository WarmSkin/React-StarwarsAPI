import { useLocation } from "react-router-dom"
import { getStartshipsDetails } from "../../services/sw-api"

const StarshipDetails = () => {
  const location = useLocation()
  const {starship} = location.state

  return (
   <>
      <h3>{starship.name}</h3>
      <h3>{starship.model}</h3>
      <h4>Manufacturer: {starship.manufacturer}</h4>
      <h4>Length: {starship.length}</h4>
      <h4>max_atmosphering_speed: {starship.max_atmosphering_speed}</h4>
      <h4>crew:{starship.crew}</h4>
      <h4>passengers: {starship.passengers}</h4>
      <h4>url: {starship.url}</h4>
    </>
  )
}

export default StarshipDetails