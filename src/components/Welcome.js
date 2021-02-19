import React from "react";
import styles from '../styles/Welcome.module.css';
// import { useSelector, useDispatch } from "react-redux";
// import { receiveUser } from "../redux/actions/userActions";


export const Welcome = props => {
  // const dispatch = useDispatch()
  // const users = useSelector(state => state.users)
  // const usersArray = Object.values(users);

  return (
    <h1 className={styles.title}>
      riki.tone
    </h1>
  //   <div>
  //     <ul>
  //       {usersArray.map((user) => (
  //         <li>{user.name}</li>
  //       ))}
  //     </ul>
  //     <button onClick={() => dispatch(receiveUser({ name: "Danny Devito", id: 3 }))}>
  //       Add Danny Devito
  //     </button>
  //   </div>
  );
};

export default Welcome;
