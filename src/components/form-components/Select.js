import classes from "./Select.module.css";
import { FaCheck } from "react-icons/fa";
import { Fragment, useState, useEffect } from "react";
import Option from "./Option";
import PropTypes from "prop-types";





const Select = (props) => {
  const [drpDownActive, setDrpDownActive] = useState(false);
  const [drpDownValue, setDrpDownValue]=useState(props.bookShelf)

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
    //removing the dpDown list
    setDrpDownActive(false);
    //setting the value of the drop down
    setDrpDownValue(value)
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
            Currently Reading   {drpDownValue==="currentlyReading" &&<FaCheck />}
        </Option>
        <Option value="wantToRead" onClick={optionClickHandle}>
         Want to Read    {drpDownValue==="wantToRead" &&<FaCheck />}
        </Option>
        <Option value="read" onClick={optionClickHandle}>
         Read   {drpDownValue==="read"&&<FaCheck />}
        </Option>
        <Option value="none" onClick={optionClickHandle}>
          None    {!drpDownValue&&<FaCheck/>}
        </Option>
      </div>
    </Fragment>
  );
};

Select.propTypes = {
  onChose: PropTypes.func.isRequired,
  bookShelf:PropTypes.string
};

export default Select;
