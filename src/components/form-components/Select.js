import classes from "./Select.module.css";
import { FaCheck } from "react-icons/fa";
import { Fragment, useState, useEffect } from "react";
import Option from "./Option";
import PropTypes from "prop-types";
const Select = (props) => {
  const [drpDownActive, setDrpDownActive] = useState(false);

  useEffect(() => {
    const hideDpDownlist =e=> {
      if (drpDownActive) {
        setDrpDownActive(false)
      }
    }

    // adding event listener
    document.addEventListener("mouseup", hideDpDownlist)
    //clean up event listener
    return ()=>{ document.removeEventListener("mouseup",hideDpDownlist)}
  },[drpDownActive])

  
  //show drop down list
  const drpDownClickHandle = () => {
    setDrpDownActive(true);
  };
  //chain selected value up
  const optionClickHandle = (value) => {
    props.onChose(value);
    setDrpDownActive(false);
  };

  const drpDownClassName = drpDownActive
    ? `${classes.dropDown} ${classes.active}`
    : classes.dropDown;
  return (
    <Fragment>
      <div
        onClick={drpDownClickHandle}
        className={classes["book-shelf-changer"]}
      >
      </div>

      <div className={drpDownClassName} >
        <Option value="currentlyReading" onClick={optionClickHandle}>
          {props.bookShelf==="currentlyReading" &&<FaCheck />}  Currently Reading
        </Option>
        <Option value="wantToRead" onClick={optionClickHandle}>
        {props.bookShelf==="wantToRead" &&<FaCheck />} Want to Read
        </Option>
        <Option value="read" onClick={optionClickHandle}>
        {props.bookShelf==="read" &&<FaCheck />} Read
        </Option>
        <Option value="none" onClick={optionClickHandle}>
        {props.bookShelf==="none" &&<FaCheck />} None
        </Option>
      </div>
    </Fragment>
  );
};

Select.propTypes = {
  onChose: PropTypes.func.isRequired,
};

export default Select;
