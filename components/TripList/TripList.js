import React, { Component } from "react";
import { Button, Modal, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getTrips, deactivateTrip } from "../../util/apiCalls";
import { setTrips, removeCurrentTrip } from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./styles";

export class TripList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      button_modal: false
    }
  }
  
  deactivateTripStatus = async id => {
    try {
      await deactivateTrip(id);
      // const userInfoTrips = getTrips();
      // setTrips(userInfoTrips);
      this.props.removeCurrentTrip();
      this.toggleButtonModal();
    } catch ({ message }) {
      console.log(message)
    }
  } 

  toggleButtonModal = () => {
    this.setState({ button_modal: !this.state.button_modal });
  };

  render() {
    console.log('trips', this.props.trips)
    const tripCards = this.props.trips.map(trip => {
      return (
        <View key={trip.id} style={styles.tripCard}>
          <Text style={styles.tripRemoveBtn}>REMOVE</Text>
          <Text style={styles.tripsName}>{trip.name}</Text>
          <Text style={styles.tripsName}>{trip.startDate}</Text>
        </View>
      );
    });
    return (
      <View>
        {this.state.active && (
          <Button
            onPress={() => this.toggleButtonModal()}
            title={"Update trip status"}
          ></Button>
        )}
        {this.state.active && (
          <Modal
            animationType={"slide"}
            visible={this.state.button_modal}
            transparent={true}
            onRequestClose={() => console.log("close requested")}
          >
            <View style={styles.pickerView}>
              <Text style={styles.modalHeading}>Update trip status:</Text>
              <TouchableOpacity
                onPress={()=> this.deactivateTripStatus(this.props.currentTrip)}
              >
                <View style={styles.theButton}>
                  <Text style={styles.theButtonText}>I'M BACK</Text>
                  <Text>Stop all emergency notifications</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.toggleButtonModal()}
              >
                <View style={styles.remainActiveButton}>
                  <Text style={styles.remainActiveButtonText}>Remain Active</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        )}
        <View style={styles.tripsListContainer}>
          <ScrollView style={styles.tripsList}>{tripCards}</ScrollView>
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