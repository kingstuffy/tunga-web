import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Map.scss";
import _ from "lodash";

class Map extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.initMap();
    }

    componentDidUpdate(prevProps, prevState,) {
        if (!_.isEqual(prevProps.user, this.props.user)) {
            this.initMap();
        }
    }

    initMap() {
        const { user } = this.props;

        let mapTimer = null;

        function createMap() {
            try {
                if (google && google.maps) {
                    let geocoder = new google.maps.Geocoder();

                    geocoder.geocode({
                        'address': user.profile.location
                    }, function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {

                            let latLng = results[0].geometry.location,
                                map = new google.maps.Map(document.getElementById('map-container'), {
                                    zoom: 12,
                                    center: latLng
                                }),
                                marker = new google.maps.Marker({
                                    position: latLng,
                                    map: map
                                });

                            if (mapTimer) {
                                clearTimeout(mapTimer);
                            }
                        } else {
                            console.log('Geocode error: ', status);
                        }
                    });
                } else {
                    mapTimer = setTimeout(createMap, 500);
                }
            } catch (e) {
                mapTimer = setTimeout(createMap, 500);
            }
        }

        if (user.profile.location) {
            createMap();
        }
    }


    render() {
        return (
            <div className="Map">
                <div id="map-container" className="Map__container">
                    <div></div>
                </div>
            </div>
        );
    }
}

Map.propTypes = {};

export default Map;
