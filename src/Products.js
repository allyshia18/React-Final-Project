import Card from 'react-bootstrap/Card'
import { useParams } from "react-router-dom";
import desserts from './dessert-data.js'
import PopsicleContext from './PopsicleContext.js';

function DessertProduct(props) {

  let params = useParams()
  let id = parseInt(params.dessertId);

  return (
    <PopsicleContext.Consumer>
    {
        function({getDesserts}){
            let dessert = getDesserts(id);
            return(
                <div>
            <Card className="align-self-start w-25">
                <Card.Img variant="top" src={imgUrl} />
                    <Card.Body>
                        <Card.Title>{dessert.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{dessert.dairyFree}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{dessert.description}</Card.Subtitle>
                        <Card.Text>
                        <strong>Price:</strong> <span>{dessert.price}</span>
                        </Card.Text>
             </Card.Body>
         </Card>
         </div> )
    }
}
  </PopsicleContext.Consumer>
  )
}

export default DessertProduct