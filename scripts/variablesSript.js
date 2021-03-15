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
  return localStorage.getItem("executeStorage");
}

function setExecute(val) {
  localStorage.setItem("executeStorage", val);
}

function getCallElevatorButtonClickedValue() {
  return localStorage.getItem("callElevatorButtonClikedStorage");
}

function setCallElevatorButtonClickedValue(val) {
  localStorage.setItem("callElevatorButtonClikedStorage", val);
}

function getFirstElevatorFreeValue() {
  return localStorage.getItem("firstElevatorFreeStorage");
}

function setFirstElevatorFreeValue(val) {
  localStorage.setItem("firstElevatorFreeStorage", val);
}

function getSecondElevatorFreeValue() {
  return localStorage.getItem("secondElevatorFreeStorage");
}

function setSecondElevatorFreeValue(val) {
  localStorage.setItem("secondElevatorFreeStorage", val);
}

function getFirstElevatorFloorValue() {
  return localStorage.getItem("firstElevatorFloorStorage");
}

function setFirstElevatorFloorValue(val) {
  localStorage.setItem("firstElevatorFloorStorage", val);
}

function getSecondElevatorFloorValue() {
  return localStorage.getItem("secondElevatorFloorStorage");
}

function setSecondElevatorFloorValue(val) {
  localStorage.setItem("secondElevatorFloorStorage", val);
}

function getElevatorCountdownTimeValue() {
  return localStorage.getItem("elevatorCountdownTimeStorage");
}

function setElevatorCountdownTimeValue(val) {
  localStorage.setItem("elevatorCountdownTimeStorage", val);
}

function getFirstElevatorCalledValue() {
  return localStorage.getItem("firstElevatorCalledStorage");
}

function setFirstElevatorCalledValue(val) {
  localStorage.setItem("firstElevatorCalledStorage", val);
}

function getSecondElevatorCalledValue() {
  return localStorage.getItem("secondElevatorCalledStorage");
}

function setSecondElevatorCalledValue(val) {
  localStorage.setItem("secondElevatorCalledStorage", val);
}

function getCurrentFloorValue() {
  return sessionStorage.getItem("currentFloorStorage");
}

function setCurrentFloorValue(val) {
  sessionStorage.setItem("currentFloorStorage", val);
}
