import "react-native";
import React from "react";
import { shallow } from "enzyme";
import { TripList, mapStateToProps, mapDispatchToProps } from "./TripList";
import { configure } from "enzyme";
import { setTrips, removeCurrentTrip } from "../../actions";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock("react-native-gesture-handler", () => "TouchableOpacity");

jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: ""
}));

describe("TripList", () => {
  let wrapper;
  const tripsMock = [{
    endDate: "2020-05-03",
    endTime: "2000-01-01 22:00:00 UTC",
    endingPoint: "Coyote Trail Head",
    name: "Spanish Peaks Backpacking Trip",
    notificationDate: "2020-05-04",
    notificationTime: "2000-01-01 15:00:00 UTC",
    startDate: "2020-05-01",
    startTime: "2000-01-01 08:00:00 UTC",
    startingPoint: "Coyote Trail Head",
    travelingCompanions: 0,
  }]
  const currentTripMock = {
    id: 1,
    name: "My trip"
  }
  const mockState = {
    trips: tripsMock,
    currentTrip: currentTripMock
  }

  beforeEach(() => {
    wrapper = shallow(<TripList
      trips={tripsMock}
      currentTrip={currentTripMock} />)
  });

  it("should match the snapshot with all of the data passed through", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('mapStateToProps should grab the props it needs', () => {
    const expected = {
      trips: tripsMock,
      currentTrip: currentTripMock
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });

  it('it calls dispatch with the setTrips action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setTrips(tripsMock);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setTrips(tripsMock);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the removeCurrentTrip action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = removeCurrentTrip();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.removeCurrentTrip();

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
