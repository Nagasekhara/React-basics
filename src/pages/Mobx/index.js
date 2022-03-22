import React from "react";
import { inject, observer } from "mobx-react";

const Mobx = inject((stores) => ({ counter: stores.counter }))(
  observer(({ counter }) => {
    return (
      <div>
        <div>
          <button onClick={() => counter.increment()}>Increment</button>
          <span>{counter.value}</span>
          <button onClick={() => counter.decrement()}>Decrement</button>
        </div>
      </div>
    );
  })
);
export default Mobx;