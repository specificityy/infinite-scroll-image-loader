const initialState = {
  message: 'Loading...',
  href: null
};

export default function(state = initialState, action) {
  return action.type === 'setLink'
    ? {
      ...state,
      message: action.link.message,
      href: action.link.href
    }
    : state;
}
