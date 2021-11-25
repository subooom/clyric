import { getFirestore, collection, addDoc } from "firebase/firestore";

const create = async (collectionName, item) => {
  try {
    const db = getFirestore();
    const docRef = await addDoc(collection(db, collectionName), item);
    return {
      status: "success",
      message: `The item #${docRef.id} has been added.`,
    };
  } catch (e) {
    return {
      status: "error",
      error: e,
    };
  }
};

export { create };
