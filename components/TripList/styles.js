const styles = {
  tripsListContainer: {
    alignItems: "center",
    height: "96%",
    marginTop: 20
  },
  tripsList: {
    backgroundColor: "fff",
    borderColor: "#001028",
    borderRadius: 3,
    borderWidth: 4,
    flex: 1,
    height: 300,
    marginHorizontal: "5%",
    width: "90%"
  },
  backgroundImage: {
    flex: 1,
    width: "100%"
  },
  tripCard: {
    backgroundColor: "#efefef",
    flex: 1,
    flexDirection: "row",
    height: 70,
    marginVertical: 5,
    justifyContent: "space-between"
  },
  tripRemoveBtn: {
    borderWidth: 1,
    borderColor: "#001028",
    height: 30,
    marginVertical: 20,
    padding: 5
  },
  tripTextContainer: {
    flex: 1,
    flexDirection: "column"
  },
  tripsName: {
    flex: 1,
    fontFamily: "Futura",
    fontSize: 28,
    paddingLeft: 7,
    paddingVertical: 2
  },
  tripsDate: {
    flex: 1,
    fontFamily: "Avenir",
    fontSize: 18,
    paddingLeft: 7
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
