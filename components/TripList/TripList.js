import React, { Component } from "react";
import { Button, ImageBackground, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { deleteTrip, deactivateTrip, getTrips } from "../../util/apiCalls";
import { setTrips, removeCurrentTrip } from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import styles from "./styles";
import background from "../../assets/background.png";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";

export class TripList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button_modal: false
    }
  }
  
  deactivateTripStatus = async id => {
    try {
      await deactivateTrip(id);
      this.props.removeCurrentTrip();
      this.toggleButtonModal();
    } catch ({ message }) {
      console.log(message);
    }
  } 

  removeTrip = async (id) => {
    if (id === this.props.currentTrip.id) {
      await deactivateTrip(id);
      this.props.removeCurrentTrip();
    }
    
    try {
      await deleteTrip(id);
      const userInfoTrips = await getTrips();
      this.props.setTrips(userInfoTrips.user.trips);
    } catch ({ message }) {
      console.log(message)
    }
  }

  toggleButtonModal = () => {
    this.setState({ button_modal: !this.state.button_modal });
  };

  render() {
    const tripCards = this.props.trips.map(trip => {
      return (
        <View key={trip.id} style={styles.tripCard}>
          <FontAwesomeIcon
            icon={faMinusSquare}
            onPress={() => this.removeTrip(trip.id)}
            size={36}
            style={styles.tripRemoveBtn}
          />
          <View style={styles.tripTextContainer}>
            <Text style={styles.tripsName}>{trip.name}</Text>
            <Text style={styles.tripsDate}>
              {trip.startDate} to {trip.endDate}
            </Text>
            <Text style={styles.tripsDate}>
              Notifications: {trip.notificationTime.substring(11, 16)} on{" "}
              {trip.notificationDate}
            </Text>
          </View>
        </View>
      );
    });
    return (
      <View>
        {this.props.currentTrip.id && (
        <TouchableOpacity
          style={styles.modalToggleButton}
          onPress={() => this.toggleButtonModal()}
        >
          <Text style={styles.modalToggleText}>UPDATE TRIP STATUS</Text>
        </TouchableOpacity>
        )}
        {this.props.currentTrip.id && (
        <Modal
          animationType={"slide"}
          visible={this.state.button_modal}
          transparent={true}
          onRequestClose={() => console.log("close requested")}
        >
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => this.deactivateTripStatus(this.props.currentTrip.id)}
            >
              <View style={styles.theButton}>
                <Text style={styles.theButtonText}>DEACTIVATE</Text>
                <Text style={styles.theButtonText}>{this.props.currentTrip.name}</Text>
                <Text style={styles.theButtonSubtext}>Emergency notifications</Text>
                <Text style={styles.theButtonSubtext}>will not be sent.</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.toggleButtonModal()}>
              <View style={styles.remainActiveButton}>
                <Text style={styles.remainActiveButtonText}>Remain Active</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
        <View style={styles.tripsListContainer}>
          <ImageBackground
            source={background}
            style={styles.backgroundImage}
            imageStyle={{ opacity: 0.2 }}
          >
            <ScrollView style={styles.tripsList}>{tripCards}</ScrollView>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export const mapStateToProps = ({ trips, currentTrip }) => ({
  trips, 
  currentTrip
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ setTrips, removeCurrentTrip }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TripList);
