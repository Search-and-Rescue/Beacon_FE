const styles = {
  tripContainer: {
    flex: 1,
    alignItems: "center"
  },
  pickerView: {
    backgroundColor: '#efefef',
    margin: 5,
    padding: 20,
    position: 'absolute',
    bottom: 30,
    left: 10,
    right: 10
  },
  modalHeading: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  modalButton: {
    paddingVertical: 10,
  },
  modalToggleGearContainer: {
    flex: 1, 
    flexDirection: 'row'
  },
  modalToggleGearBtn: {
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 10,
    marginVertical: 5,
    paddingVertical: 3,
    textAlign: 'center',
    width: 75
  },
  modalToggleGearHeading: {
    paddingVertical: 10
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: "80%"
  },
  updateBtn: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%"
  },
  updateBtnText: {
    textAlign: "center"
  }
};

export default styles;
