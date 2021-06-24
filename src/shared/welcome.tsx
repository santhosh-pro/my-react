interface Para {
  title: string;
}

function Hello(props: Para) {
  return <h1>Hello, {props.title}</h1>;
}
export default Hello;
