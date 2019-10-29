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
    justifyContent: "flexStart",
    paddingLeft: 5
  },
  tripsDate: {
    flex: 1,
    fontSize: 12,
    justifyContent: "flexStart",
    paddingLeft: 5
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
