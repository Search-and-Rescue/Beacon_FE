import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";

export class TripList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tripCards = this.props.trips.map(trip => {
      return (
        <View key={trip.id} style={styles.tripCard}>
          <Text
            style={styles.tripRemoveBtn}
          >REMOVE</Text>
          <Text style={styles.tripsName}>{trip.name}
          </Text>
          <Text style={styles.tripsName}>{trip.startDate}</Text>
        </View>
      );
    });

    return (
      <View>
        <View style={styles.tripsListContainer}>
          <ScrollView style={styles.tripsList}>
            {tripCards}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export const mapStateToProps = ({ trips }) => ({
  trips
});

export default connect(mapStateToProps)(TripList);