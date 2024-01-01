import {
  CREATE_NEWS,
  DELETE_NEWS,
  FETCH_NEWS,
  UPDATE_NEWS,
} from "../constants/index.js";

const news = (news = [], action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return action.payload;

    case CREATE_NEWS:
      return [...news, action.payload];

    case UPDATE_NEWS:
      return news.map((new1) =>
        new1._id === action.payload._id ? action.payload : new1
      );

    case DELETE_NEWS:
      return news.filter((new1) => new1._id !== action.payload);
    default:
      return news;
  }
};

export default news;
