import { Card, Icon, Image, Dimmer, Loader, Button } from "semantic-ui-react";
import "./LastEvent.scss";

export default function LastEvents({ LastEventsFetch }) {
  const { loading, result } = LastEventsFetch;

  if (loading || !result) {
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading...</Loader>
      </Dimmer>
    );
  }

  const { results } = result.data;
  console.log(results);

  return results.map((event, index) => (
    <Card key={index} className="last-event">
      <Image
        src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header  className="title">{event.title} </Card.Header>
        <Card.Meta>
          <span>
            <Icon name="book" />
            {event.stories.available} Comics
          </span>
        </Card.Meta>

        <Card.Description> {event.description}</Card.Description>
      </Card.Content>

      <Card.Content extra>
        <Button
          animated
          fluid
          as="a"
          href={event.urls[0].url}
          target="_blank"
          color="black"
        >
          <Button.Content visible> ver Evento</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Card.Content>
    </Card>
  ));
}
