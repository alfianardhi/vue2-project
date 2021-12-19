/**
    * Generate unique ID
    */
function uniqueID() {
  return new Date().getUTCMilliseconds();
}

export default { uniqueID };
