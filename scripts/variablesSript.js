function printVariables() {
  console.log("callElevatorButtonClicked:");
  console.log(getCallElevatorButtonClickedValue());
  console.log("firstElevatorFree:");
  console.log(getFirstElevatorFreeValue());
  console.log("secondElevatorFree:");
  console.log(getSecondElevatorFreeValue());
  console.log("firstElevatorFloor:");
  console.log(getFirstElevatorFloorValue());
  console.log("secondElevatorFloor:");
  console.log(getSecondElevatorFloorValue());
  console.log("elevatorCountdownTime:");
  console.log(getElevatorCountdownTimeValue());
  console.log("firstElevatorCalled:");
  console.log(getFirstElevatorCalledValue());
  console.log("secondElevatorCalled:");
  console.log(getSecondElevatorCalledValue());
  console.log("currentFloor:");
  console.log(getCurrentFloorValue());
}

function getExecute() {
  return sessionStorage.getItem("executeStorage");
}

function setExecute(val) {
  sessionStorage.setItem("executeStorage", val);
}

function getCallElevatorButtonClickedValue() {
  return sessionStorage.getItem("callElevatorButtonClikedStorage");
}

function setCallElevatorButtonClickedValue(val) {
  sessionStorage.setItem("callElevatorButtonClikedStorage", val);
}

function getFirstElevatorFreeValue() {
  return sessionStorage.getItem("firstElevatorFreeStorage");
}

function setFirstElevatorFreeValue(val) {
  sessionStorage.setItem("firstElevatorFreeStorage", val);
}

function getSecondElevatorFreeValue() {
  return sessionStorage.getItem("secondElevatorFreeStorage");
}

function setSecondElevatorFreeValue(val) {
  sessionStorage.setItem("secondElevatorFreeStorage", val);
}

function getFirstElevatorFloorValue() {
  return sessionStorage.getItem("firstElevatorFloorStorage");
}

function setFirstElevatorFloorValue(val) {
  sessionStorage.setItem("firstElevatorFloorStorage", val);
}

function getSecondElevatorFloorValue() {
  return sessionStorage.getItem("secondElevatorFloorStorage");
}

function setSecondElevatorFloorValue(val) {
  sessionStorage.setItem("secondElevatorFloorStorage", val);
}

function getElevatorCountdownTimeValue() {
  return sessionStorage.getItem("elevatorCountdownTimeStorage");
}

function setElevatorCountdownTimeValue(val) {
  sessionStorage.setItem("elevatorCountdownTimeStorage", val);
}

function getFirstElevatorCalledValue() {
  return sessionStorage.getItem("firstElevatorCalledStorage");
}

function setFirstElevatorCalledValue(val) {
  sessionStorage.setItem("firstElevatorCalledStorage", val);
}

function getSecondElevatorCalledValue() {
  return sessionStorage.getItem("secondElevatorCalledStorage");
}

function setSecondElevatorCalledValue(val) {
  sessionStorage.setItem("secondElevatorCalledStorage", val);
}

function getCurrentFloorValue() {
  return sessionStorage.getItem("currentFloorStorage");
}

function setCurrentFloorValue(val) {
  sessionStorage.setItem("currentFloorStorage", val);
}
