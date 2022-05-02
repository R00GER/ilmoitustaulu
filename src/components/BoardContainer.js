import { Children, cloneElement } from 'react';

function BoardContainer({ children, classes, ...props }) {
  const childrenWithProps = Children.map(children, child =>
    cloneElement(child, { ...props }),
  );

  return <div className={classes}>{childrenWithProps}</div>;
}

export default BoardContainer;
