import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (term = "dolphins") => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=jtggLCGk67KviaGtVHJH5S44hO0yXnOT`
    )
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          gifs: data.data.slice(0, 3),
        })
      );
  };

  submitHandler = (searchTerm) => {
    this.fetchGifs(searchTerm);
  };

  render() {
    return (
      <React.Fragment>
        <GifSearch submitHandler={this.submitHandler} />
        <GifList gifs={this.state.gifs} />
      </React.Fragment>
    );
  }
}

export default GifListContainer;
