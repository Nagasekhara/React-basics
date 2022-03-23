import React from 'react';
import { render } from 'react-dom';
const Hello = ({ name }) =>
  <h1>
    Hello world {name}!
  </h1>;

function withName(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <WrappedComponent name="Smashing Magazine" {...this.props} />;
    }
  };
}
const NewComponent = withName(Hello);


const HOC = () => {
return (
	<div>
        <NewComponent/>
	</div>
);
};

export default HOC;

