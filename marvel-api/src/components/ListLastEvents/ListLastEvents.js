import { useState } from 'react';
import { Card,Header } from 'semantic-ui-react';
import Containers from '../Containers';
import useFetch from '../Hooks/UseFetch';
import './ListLastEvents.scss';

export default function ListLastEvents(params) {
    
 
    const LastEventsFetch=useFetch(    
        `${process.env.REACT_APP_API_URL_BASE2}/comics?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=title&limit=5`,
       //'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b4dd4282e1b25f7c72aa3cba77ab4ce4&hash=4232dd5bcab38413ba6d13fd93d1ec65&orderBy=title&limit=5'  
     )
    
   console.log(LastEventsFetch);

    return(
        <div className='container-list-last-events'>
               <Header size="large">
                últimos eventos 
               </Header>
            <Containers  bg="light">
                <Card.Group itemsPerRow={5}>

                    <p>los eventos </p>
                    <p>los eventos </p>
                    <p>los eventos </p>
                    <p>los eventos </p>
                    <p>los eventos </p>
                    <p>los eventos </p>
                    <p>los eventos </p>
                </Card.Group>

            </Containers>
        </div>
    )
};
