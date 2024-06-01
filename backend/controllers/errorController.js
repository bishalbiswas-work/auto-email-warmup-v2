const throwError = async (req, res) => {
  try {
    console.log("Hello");
    res.status(200).send({ status: true });
  } catch (error) {
    // Catch the error object here
    console.error("throwError: ", error);
    res.status(500).send({
      status: false,
      message: "Internal Server Error. Please try again later.",
    });
  }
};

module.exports = {
  throwError,
};
