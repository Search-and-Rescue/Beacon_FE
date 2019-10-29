import "react-native";
import React from "react";
import { shallow } from "enzyme";
import { TripList } from "./TripList";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock("react-native-gesture-handler", () => "TouchableOpacity");npm 

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

  beforeEach(() => {
    wrapper = shallow(<TripList
      trips={tripsMock} />)
  });

  it("should match the snapshot with all of the data passed through", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
