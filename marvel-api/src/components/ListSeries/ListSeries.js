
import { Card,Icon,Image,Dimmer,Loader,Button } from 'semantic-ui-react'
import Containers from '../Containers';

import "./ListSeries.scss";
export default function ListSeries({LastSeriesFetch}) {
    

    const {loading,result}= LastSeriesFetch;


    if(loading || !result){
        return (
       <Dimmer active inverted>
       <Loader  inverted>Loading...</Loader>
       </Dimmer>
       )
    }
        
    const {results}=result.data;
    console.log(results) 
    
        return(
        
                             
                results.map((rest,index)=>(  
                <Containers  >
                <Card.Group itemsPerRow={5}>
                    
               

                <Card key={index} className ="last-event">
                    <Image src={`${rest.thumbnail.path}.${rest.thumbnail.extension}`}  wrapped ui={false}/>
                    <Card.Content>
                        <Card.Meta> 
                            <span>
                                <Icon name="book"/>{rest.id}
                            
                            </span>
                        </Card.Meta>

                        <Card.Description> {rest.description }</Card.Description>

                    </Card.Content>

                    <Card.Content extra>
                        <Button animated fluid as="a" href={rest.urls[0].url} target="_blank" color='black'>

                        <Button.Content visible> Mas informacion</Button.Content>
                        <Button.Content hidden> 
                        <Icon name="arrow right"/>

                        </Button.Content>
                        </Button>
                    </Card.Content>
                </Card>
                </Card.Group>
                </Containers>          
                ) )        
          

          
        )
       
    };
    



