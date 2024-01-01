import {
  FETCH_NGODATA,
  CREATE_NGODATA,
  DELETE_NGODATA,
  UPDATE_NGODATA,
} from "../constants/index";

const ngodatas = (ngodatas = [], action) => {
  switch (action.type) {
    case FETCH_NGODATA:
      return action.payload;

    case CREATE_NGODATA:
      return [...ngodatas, action.payload];

    case UPDATE_NGODATA:
      return ngodatas.map((ngo) =>
        ngo._id === action.payload._id ? action.payload : ngo
      );
    case DELETE_NGODATA:
      return ngodatas.filter((ngo) => ngo._id !== action.payload);
    default:
      return ngodatas;
  }
};

export default ngodatas;
