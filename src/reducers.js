  function reducer(state = 0, action) {
    switch (action.type) {
    case 'newListItem':
      return state + 1

    case 'completeListItem':
      return state - 1

    case 'removeListItem':
      return state - 1

    default:
      return state
    }
  }
