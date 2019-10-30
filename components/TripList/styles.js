const styles = {
  tripsListContainer: {
    alignItems: "center",
    height: "96%",
    marginTop: 20
  },
  tripsList: {
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    height: 300,
    width: "90%"
  },
  tripCard: {
    backgroundColor: "#efefef",
    flex: 1,
    flexDirection: "row",
    height: 50,
    marginVertical: 5,
    justifyContent: "space-between"
  },
  tripRemoveBtn: {
    borderWidth: 1,
    borderColor: "black",
    height: 35,
    margin: 4,
    padding: 5
  },
  tripTextContainer: {
    flex: 1,
    flexDirection: "column"
  },
  tripsName: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 5
  },
  tripsDate: {
    flex: 1,
    fontSize: 12,
    paddingLeft: 5
  },
  pickerView: {
    backgroundColor: "#efefef",
    margin: 5,
    padding: 20,
    position: "absolute",
    bottom: 30,
    left: 10,
    right: 10
  },
  modalHeading: {
    fontWeight: "bold",
    marginBottom: 5
  },
  theButton: {
    alignItems: "center",
    backgroundColor: "red",
    paddingVertical: 100
  },
  theButtonText: {
    fontSize: 68
  },
  remainActiveButton: {
    alignItems: "center",
    backgroundColor: "darkgrey",
    marginVertical: 10,
    paddingVertical: 20
  },
  addItemBtn: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "100%"
  },
  addBtnText: {
    fontSize: 21,
    textAlign: "center"
  }
};

export default styles;
