import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

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

  handleSubmit = () => {
    const { navigation } = this.props;
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
          placeholder="item name"
          style={styles.input}
          onChangeText={text => this.setState({ itemName: text })}
          value={this.state.itemName}
          name="itemName"
        />
        <Text style={styles.label}>Item description:</Text>
        <TextInput
          placeholder="description"
          style={styles.input}
          onChangeText={text => this.setState({ description: text })}
          value={this.state.description}
          name="description"
        />
        <TouchableOpacity style={styles.updateBtn} onPress={this.handleSubmit}>
          <Text style={styles.updateBtnText}>Update</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Gear;