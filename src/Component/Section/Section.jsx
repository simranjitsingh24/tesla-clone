/* eslint-disable react/prop-types */
import "./Section.css";

export default function Section(props) {
  return (
    <div
      className="section-img"
      style={{ backgroundImage: `url("${props.backgroundImg}")` }}
    >
      <div className=" model-sec">
        <div className="para">
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <h4>{props.para}</h4>
        </div>
        <div className="btn1">
          <button className="btn2">{props.btnname2}</button>
          <button className="btn3">{props.btnname1}</button>
        </div>
      </div>
    </div>
  );
}
