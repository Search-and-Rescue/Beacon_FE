const styles = {
  contactsListContainer: {
    alignItems: "center",
    height: "96%",
    marginTop: 20
  },
  contactsList: {
    backgroundColor: "fff",
    borderColor: "#001028",
    borderRadius: 3,
    borderWidth: 4,
    flex: 1,
    height: 300,
    width: "90%"
  },
  contactCard: {
    backgroundColor: "#efefef",
    flex: 1,
    flexDirection: "row",
    height: 50,
    marginVertical: 5,
    justifyContent: "space-between"
  },
  contactRemoveBtn: {
    borderWidth: 1,
    borderColor: "black",
    height: 30,
    marginVertical: 10,
    padding: 5
  },
  contactsName: {
    flex: 1,
    fontFamily: "Futura",
    fontSize: 28,
    paddingLeft: 7,
    paddingVertical: 2
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