import Classes from "./FetchingError.module.css";
import Header from "../Header/Header";

const FetchingError = () => {
  return (
    <div>
      <Header />
      <div className={Classes.error}>
        <h2>error in fetching data</h2>
        <p>please check your internet connection</p>
      </div>
    </div>
  );
};

export default FetchingError;
