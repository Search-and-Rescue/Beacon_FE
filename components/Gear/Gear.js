import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

export class Gear extends Component {
  constructor(props) {
    super(props);
    const { gear } = this.props.navigation.state.params;
    this.state = {
      item_name: gear.item_name || "",
      description: gear.description || ""
    };
  }

  handleSubmit = () => {
    const { navigation } = this.props;
    navigation.navigate("GearList");
    this.setState({
      item_name: "",
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
          onChangeText={text => this.setState({ item_name: text })}
          value={this.state.item_name}
          name="item_name"
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