import { Fragment } from "react";

// To pass props use frgament, empty <> , wont do it

const Temp = () => {
  return (
    <Fragment>
      <div>Hi</div>
      <div>Hello</div>
    </Fragment>
  );
};

function Fragment() {
  return (
    <div>
      <Temp />
    </div>
  );
}

export default Fragment;
