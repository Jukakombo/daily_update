import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_ADDRESS,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";
export const createRegistration = (data) => async (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_ADDRESS,
    payload: data,
  });

  localStorage.setItem("registration", JSON.stringify(data));
};
