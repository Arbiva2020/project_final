import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

//   <script async defer src="https://maps.googleapis.com/maps/api/place/nearbysearch/
//   json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=
//   AIzaSyAh1XwvKJu6rFe3NEwBaf5DfRSIuNjKgds&callback=initMap"
//   type="text/javascript"></script>
