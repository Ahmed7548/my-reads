import Classes from "./FetchingError.module.css";

const FetchingError = (props) => {
  return (
    <div>
      <div className={Classes.error}>
        <h2>{props.title}</h2>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default FetchingError;
