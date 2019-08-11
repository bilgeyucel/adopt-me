import React from "react";

class Carousel extends React.Component {
  state = { photos: [], active: 0 };
  static getDerivedStateFromProps({ media }) {
    // Takes some props. filter it some kinda way and passes it to the component
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }
  handleIndexClick = event => {
    this.setState({ active: +event.target.dataset.index });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt={"animal thumbnail"}
            />
          ))}
        </div>
      </div>
    );
  }
}
export { Carousel };
