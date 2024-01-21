import "./style.scss";
import Lottie from "lottie-react";
import Fire from "../../assets/animation/Fire.json";
import { getRandomKey } from "../../utils/getRandomKey";

export default function Field() {
  const items = [
    {
      id: getRandomKey(),
      type: "0",
      itsOpened: false,
    },
    {
      id: getRandomKey(),
      type: "0",
      itsOpened: false,
    },
    {
      id: getRandomKey(),
      type: "0",
      itsOpened: false,
    },
    {
      id: getRandomKey(),
      type: "0",
      itsOpened: false,
    },
    {
      id: getRandomKey(),
      type: "0",
      itsOpened: false,
    },
    {
      id: getRandomKey(),
      type: "0",
      itsOpened: false,
    },
    {
      id: getRandomKey(),
      type: "0",
      itsOpened: false,
    },
    {
      id: getRandomKey(),
      type: "0",
      itsOpened: false,
    },
    {
      id: getRandomKey(),
      type: "0",
      itsOpened: false,
    },
  ];
  const open = (item) => {};
  return (
    // <Lottie animationData={Fire} />
    <ul className="field">
      {items.map((item) => (
        <li className="field__item" key={item.id}>
          <div className="card-front"></div>
          <div className="card-back"></div>
        </li>
      ))}
    </ul>
  );
}
