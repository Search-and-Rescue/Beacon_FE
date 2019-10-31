# Beacon

[![Build Status](https://travis-ci.org/Search-and-Rescue/SearchAndRescue-FE.svg?branch=master)](https://travis-ci.org/Search-and-Rescue/SearchAndRescue-FE)

## Table of Contents

- [Introduction](#Introduction)
- [Final Presentation](#Final-Presentation)
- [Tech Stack](#Tech-Stack)
- [Setup](#Setup)
- [Wireframes](#Wireframes)
- [Project Board](#Project-Board)
- [Beacon Development Team](#Beacon-Development-Team)
- [Back-End Repo](#Back-End-Repo)
- [Color Palette](#Color-Palette)

### Introduction

This App serves as the front-end for Beacon, a search and rescue app. Built with React Native for iOS.

Knowing that out in the wilderness people often don't have access to cell phone reception, Beacon seeks to give adventurers the option of going into the unknown a bit more prepared. With this app users can pre-fill information about their trip with as much detail as they desire.

Users can enter personal information, what vehicle they are driving, information about the trip they are going on, and tell the app what gear they are taking along.

The user selects a start and end time for their trip, and then selects a notification date and time in case they don't make it back. If the user doesn't check in with the app before the notification time is up, their emergency contact's associated with the trip will receive an email with helpful information for Search and Rescue.

The email will consist of the user's trip information: where they were planning on starting and ending their adventure, along with the vehicle driven and its details. The email will also list info about the user that would help a search and rescue team know who they are looking for. A user can enter what gear they brought along (such as how much food and water, any medications, an avalanche beacon, a down sleeping bag...) And lastly, the email will have contact info for search and rescue teams nearby to where the user went missing.

A custom Search and Rescue API for the state of Colorado was built for this app.

### Final Presentation

#### Custom Loading Screen
![Splashscreen](https://github.com/Search-and-Rescue/SearchAndRescue-FE/blob/master/assets/screenshots/Splashscreen.png)

#### User Login Form
![Login Form](https://github.com/Search-and-Rescue/SearchAndRescue-FE/blob/master/assets/screenshots/LoginPage.png)

#### Adding Profile Information, Emergency Contacts, Gear Items, and Vehicles
![Add a User Profile](https://github.com/Search-and-Rescue/SearchAndRescue-FE/blob/master/assets/screenshots/AddProfile.png)
![Add an Emergency Contact](https://github.com/Search-and-Rescue/SearchAndRescue-FE/blob/master/assets/screenshots/AddContact.png)
![Add a Gear Item](https://github.com/Search-and-Rescue/SearchAndRescue-FE/blob/master/assets/screenshots/AddGear.png)
![Add a Vehicle](https://github.com/Search-and-Rescue/SearchAndRescue-FE/blob/master/assets/screenshots/AddVehicle.png)

#### Viewing a user's existing Trips, Profile Information, Emergency Contacts, Gear Items, and Vehicles
![User Trip List](https://github.com/Search-and-Rescue/SearchAndRescue-FE/blob/master/assets/screenshots/TripList.png)
![User Profile Viewer](https://github.com/Search-and-Rescue/SearchAndRescue-FE/blob/master/assets/screenshots/ProfileViewer.png)
![User Contacts List](https://github.com/Search-and-Rescue/SearchAndRescue-FE/blob/master/assets/screenshots/ContactsList.png)
![User Gear List](https://github.com/Search-and-Rescue/SearchAndRescue-FE/blob/master/assets/screenshots/GearList.png)
![User Vehicle List](https://github.com/Search-and-Rescue/SearchAndRescue-FE/blob/master/assets/screenshots/VehiclesList.png)

#### Deactivating a Current Trip, the disabled Add Trip button, and the Experience Level Modal
![Deactivate a Current Trip](https://github.com/Search-and-Rescue/SearchAndRescue-FE/blob/master/assets/screenshots/DeactivateCurrentTrip.png)
![Disabled Add Trip Button](https://github.com/Search-and-Rescue/SearchAndRescue-FE/blob/master/assets/screenshots/DisabledAddTripButton.png)
![Pop Up Modal for Experience](https://github.com/Search-and-Rescue/SearchAndRescue-FE/blob/master/assets/screenshots/SelectExperienceModal.png)

### Wireframes

![Wireframing Navigation and Components](https://github.com/Search-and-Rescue/SearchAndRescue-FE/blob/master/assets/screenshots/wireframe.jpeg)

### Tech Stack

- React Native
- React Navigator
- Expo.io Client app and CLI Tool
- Travis CI
- GraphQL
- Xcode Simulator
- Redux
- Jest/Enzyme
- GitHub Organizations/Projects
- Adobe Illustrator

### Setup

To setup locally, run the following commands:

- `git clone https://github.com/Search-and-Rescue/SearchAndRescue-FE.git`
- `cd searchAndRescue-FE`
- `npm install`
- `Make a free account with Expo - https://expo.io/`
- `npm start - opens a new window through Expo`
- `Click run on iOS simulator (you may be prompted to download xCode if you haven't already)`

### Project Board

[Click here to see the Beacon Project Board](https://github.com/orgs/Search-and-Rescue/projects/1)

### Beacon Development Team

- [Tyler Bierwirth](https://github.com/tbierwirth)
- [Jori Peterson](https://github.com/JoriPeterson)
- [Katherine Williams](https://github.com/kawilliams8)
- [Samantha Freeman](https://github.com/SamanthaLFreeman)

### Back-End Repo

[View Beacon's Back-End Repo Here to see more about the API built with Ruby on Rails and GraphQL](https://github.com/Search-and-Rescue/beacon_api)

### Color Palette

- Darkest Purple #001028
- Medium Dark Purple #003878
- Medium Light Purple #225C8C
- Lightest Purple #BAD5F8
- Darker Orange #F4813F
- Lighter Orange #EFB095
- Light Cream #F0F0F0
