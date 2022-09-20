import { Header,Grid, Image,Button, GridColumn} from "semantic-ui-react"
import Containers from "../Containers"
import marvelImage from '../../img/marvel.png';
import './BestCharacter.scss';

export default function BestCharacters(props) {


    return(

        <Containers>
            <div className="best-Characters">
                <Grid columns={2}  divided="vertically">
                    <Grid.Column>
                        <Header as="h1">
                            Los mejores personajes de las sagas de Marvel 
                        </Header>
                        <Header as="h3">
                            Disfruta del mejor contenido.
                        </Header>
                        <Button>
                            Ver todos los personajes
                        </Button>
                    </Grid.Column>
                    <GridColumn  className="image-container">
                       <Image  src={marvelImage} alt="image"/>  
                    </GridColumn>
                </Grid>
            </div>
        </Containers>
        
    )
    
};
