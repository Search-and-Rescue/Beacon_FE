import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { addGearItem, getGear } from '../../util/apiCalls';
import { connect } from "react-redux";
import styles from "./styles";
import { setGear } from '../../actions';
import { bindActionCreators } from 'redux';

export class Gear extends Component {
  constructor(props) {
    super(props);
    if (this.props.navigation.state.params === undefined) {
      this.props.navigation.state.params = { gear: {} }
    }
    const { gear } = this.props.navigation.state.params;
    this.state = {
      itemName: gear.itemName || "",
      description: gear.description || ""
    };
  }

  handleSubmit = async () => {
    const { navigation, user } = this.props;
    const newGearItem = {
      ...this.state,
      userId: parseInt(user.id)
    }
    await addGearItem(newGearItem);
    const userInfoGear = await getGear();
    this.props.setGear(userInfoGear.user.gear);
    navigation.navigate("GearList");
    this.setState({
      itemName: "",
      description: ""
    });
  };

  render() {
    return (
      <View style={styles.gearContainer}>
        <Text style={styles.label}>Item name:</Text>
        <TextInput
          placeholder="Red down sleeping bag"
          style={styles.input}
          onChangeText={text => this.setState({ itemName: text })}
          value={this.state.itemName}
          name="itemName"
        />
        <Text style={styles.label}>Item description:</Text>
        <TextInput
          placeholder="Mummy bag, 0 degree"
          style={styles.input}
          onChangeText={text => this.setState({ description: text })}
          value={this.state.description}
          name="description"
        />
        <TouchableOpacity style={styles.updateBtn} onPress={this.handleSubmit}>
          <Text style={styles.updateBtnText}>ADD</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export const mapStateToProps = ({ user }) => ({
  user
});

export const mapDispatchToProps = dispatch => bindActionCreators({ setGear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Gear);