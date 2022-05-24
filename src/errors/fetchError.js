class FetchError extends Error {
  constructor(message = "Cannot fetch data") {
    super(message);
    this.name = "FetchError";
  }
}

export default FetchError;
