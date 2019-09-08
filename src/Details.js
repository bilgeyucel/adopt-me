import React from "react";
import pet from "@frontendmasters/pet";
import { Carousel } from "./Carousel";
import { ErrorBoundary } from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     // Object.assign(oldState, newState);
  //     this.state = { loading: true };
  //   }
  state = { loading: true };

  componentDidMount() {
    pet
      .animal(this.props.id) // api'ya id veriyoruz.
      .then(({ animal }) => {
        // gelen sonuc animal oluyor ve state'i ona gore updateliyoruz.
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        });
      })
      .catch(err => this.setState({ error: err })); // herhangi bir hata oldugunda erro ver.
  }
  render() {
    if (this.state.loading) {
      return <h1>{"loading..."}</h1>;
    }

    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
