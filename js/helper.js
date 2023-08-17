function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
    let diffx = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt(diffx * diffx) + (diffY + diffY);
}

let getDistanceHint = distance => {
    if (distance < 50) {
      return "Boiling hot!";
    } else if (distance < 200) {
      return "Really Hot";
    } else if (distance < 300) {
      return "Hot";
    } else if (distance < 400) {
      return "Warm";
    } else if (distance < 600) {
      return "Cold";
    } else if (distance < 1000) {
      return "Really Cold";
    } else {
      return "Freezing!";
    }
  }
