import { Card, Icon, Image, Dimmer, Loader, Button } from "semantic-ui-react";


import "./ListSeries.scss";
export default function ListSeries({ LastSeriesFetch }) {


  const { loading, result } = LastSeriesFetch;

  if (loading || !result) {
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading...</Loader>
      </Dimmer>
    );
  }

  const { results } = result.data;
  console.log(results);

  return results.map((rest, index) => (
 
        <Card key={index} className="list-series">
          <Image
            src={`${rest.thumbnail.path}.${rest.thumbnail.extension}`}
            wrapped
            ui={false}
            alt={rest.title}
          />
          <Card.Content>
          <Card.Header className="title">{rest.title} </Card.Header>
                

            <Card.Description> {rest.description}</Card.Description>
          </Card.Content>

          <Card.Content extra>
            <Button
              animated
              fluid
              as="a"
              href={rest.urls[0].url}
              target="_blank"
              color="black"
            >
              <Button.Content visible> Mas informacion</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Card.Content>
        </Card>
 
  ));
}
