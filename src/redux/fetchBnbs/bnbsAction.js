import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";

export const addBnb = (bnbData) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "bnbs"), bnbData);
    dispatch({ type: "ADD_BNB_SUCCESS", payload: docRef.id });
  } catch (error) {
    dispatch({ type: "ADD_BNB_FAILURE", payload: error.message });
  }
};

export const removeBnb = (bnbId) => async (dispatch) => {
  try {
    const docRef = doc(db, "bnbs", bnbId);
    await deleteDoc(docRef);
    dispatch({ type: "REMOVE_BNB_SUCCESS", payload: bnbId });
  } catch (error) {
    dispatch({ type: "REMOVE_BNB_FAILURE", payload: error.message });
  }
};

export const fetchBnbs = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "bnbs"));
    const dataArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch({ type: "FETCH_BNBS_SUCCESS", payload: dataArray });
  } catch (error) {
    dispatch({ type: "FETCH_BNBS_FAILURE", payload: error.message });
  }
};
