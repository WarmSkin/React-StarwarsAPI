import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getStarshipsList } from '../../services/sw-api';

const StarshipsList = () => {
  const [starshipsLIst, setStarShipsData] = useState([])

  useEffect(() => {
    const fetchStarshipsData = async () => {
      const shipsData = await getStarshipsList()
      setStarShipsData(shipsData.results)
    }
    fetchStarshipsData()
  }, [])

  return (
    <>
      <h3>Starships List</h3>
      {starshipsLIst.length ?
        <div className='starshipList'>
          {starshipsLIst.map((starship, index) =>
            <div key={index}>
              <Link to='/starship' state={{starship}}><button className='starship'>{starship.name}</button></Link>
            </div>
          )}
        </div>
        :
        <>
          <h4>Loading Star...Ships...</h4>
        </>
      }
    </>
  );
}

export default StarshipsList;