import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: "center",
    backgroundColor: "#FFB98B",
    flex: 1, 
    justifyContent: "center",
    marginTop: 20
  }, 
  loginButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#FF6700',
    borderRadius: 3,
    borderWidth: 2,
    height: 65,
    marginVertical: 5,
    width: 350
  },
  buttonText: {
    color: 'black',
    fontSize: 38,
    padding: 10
  }
});

export default styles;