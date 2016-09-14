  export function newListItem(text) {
    return {
      type: 'NEW_ITEM',
      item: {text, complete:false}
    }
  }

  export function completeListItem(index) {
    return {
      type: 'COMPLETE_ITEM',
      index:
    }
  }

  export function removeListItem(index) {
    return {
      type: 'REMOVE_ITEM',
      index:
    }
  }
