const ConditionalWrapper = ({ condition, wrapper, children }) => {
  console.log(condition);
  return condition ? wrapper(children) : children;
};

export default ConditionalWrapper;
