const paypal = async (req, res) => {
  res.send(process.env.REACT_APP_PAY_PAL_CLIENT_ID || "sb");
};

export default paypal;
