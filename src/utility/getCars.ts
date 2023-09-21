const URL = "https://gist.githubusercontent.com/joaofs/6a4eb62499572a29485ac5924a0c9e64/raw/97ac2191e65fb6d84f6f336dc8867efbc97410a3/cars.json";

const getCars = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log("cars: ", data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default getCars;
