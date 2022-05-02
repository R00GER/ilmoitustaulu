const isEmpty = collection => {
  if (Array.isArray(collection)) {
    return !collection.length;
  }

  return !Object.keys(collection).length;
};

export default isEmpty;
