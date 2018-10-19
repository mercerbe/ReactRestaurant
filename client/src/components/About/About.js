import React from "react";
import { Header, Icon, Container } from "semantic-ui-react";

class About extends React.Component {
  render() {
    return (
      <Header as="h2" icon textAlign="center">
        <Icon name="food" circular />
        <Header.Content>About Our Restaurant:</Header.Content>
        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>
        </Container>
      </Header>
    );
  }
}

export default About;
