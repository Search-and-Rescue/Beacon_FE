import "react-native";
import React from "react";
import { shallow } from "enzyme";
import { ProfileViewer } from "./ProfileViewer";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let mockUser, wrapper;

beforeEach(() => {
  mockUser = {
    address: "123 Main St.",
    allergies: "Juniper Berries",
    birthDate: "1985-05-01",
    city: "Leadville",
    cosarCard: true,
    email: "ohhello@email.com",
    experienceLevel: 3,
    gender: "F",
    hairColor: "silver",
    height: "509",
    name: "Ms. Hunter Dickinson",
    phone: "(710)123-4567",
    skinColor: "olive",
    state: "CO",
    weight: "150",
    zip: "80202"
  };

  wrapper = shallow(<ProfileViewer user={mockUser} />);
})

describe("ProfileViewer", () => {
  it("should match the snapshot with all of the data passed through", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
