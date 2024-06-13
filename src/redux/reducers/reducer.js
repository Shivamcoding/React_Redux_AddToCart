const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "RMV_CART":
      const data = state.carts.filter(
        (element) => element.id !== action.payload.id
      );
      return {
        ...state,
        carts: data,
      };

    case "RMV_ITEM":
      const itemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.carts[itemIndex_dec].qnty >= 1) {
        const dltItem = (state.carts[itemIndex_dec].qnty -= 1);
        console.log([...state.carts, dltItem]);

        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemIndex_dec].qnty === 1) {
        const data = state.carts.filter(
          (element) => element.id !== action.payload.id
        );
        return {
          ...state,
          carts: data,
        };
      }

    default:
      return state;
  }
};
