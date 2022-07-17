import classes from "./styles/LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.spinner}></div>;
    </div>
  );
};

export default LoadingSpinner;
