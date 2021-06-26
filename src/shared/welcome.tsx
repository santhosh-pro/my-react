interface Para {
  name: string;
}

function Welcome(props: Para) {
  return <h1>Hello, {props.name}</h1>;
}
export default Welcome;
