import * as firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  const firebaseConfig = {
    // databaseURL: 'https://project-id.firebaseio.com',

    apiKey: "AIzaSyANK645RzalOHErdgXLEYTQYE-0k6Khtkk",
    authDomain: "cooking-request.firebaseapp.com",
    projectId: "cooking-request",
    storageBucket: "cooking-request.appspot.com",
    messagingSenderId: "581611980731",
    appId: "1:581611980731:web:9a40040a510e2d73d2a69e",
    measurementId: "G-PR22DNKRFF",
  };

  firebase.initializeApp(firebaseConfig);
}

export const getCategories = async () => {
  const snapshot = await firebase
    .firestore()
    .collection("categories")
    .orderBy("createdAt", "desc")
    .get();
  const categories = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return categories;
};

export const setCategoryItem = async (name) => {
  firebase.firestore().collection("categories").doc().set({
    name: name,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const deleteCategoryItem = async (id) => {
  const categoryRef = firebase.firestore().collection("categories").doc(id);
  await categoryRef.delete();
};

export const updateCategoryItem = async (id, name) => {
  const updatedAt = firebase.firestore.Timestamp.now();
  const categoryRef = firebase.firestore().collection("categories").doc(id);
  await categoryRef.update({ name: name, updatedAt: updatedAt });
};

export const getMealByCategoryId = async (categoryId) => {
  //特定のドキュメントのサブコレクションを含めて取得
  const categoryDocs = await firebase
    .firestore()
    .collection("categories")
    .doc(categoryId)
    .collection("menu")
    .get();
  if (!categoryDocs.empty) {
    const meals = categoryDocs.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return meals;
  } else {
    return [];
  }

  // categories.forEach((category) => {
  //   const categoryDocs = await firebase
  //     .firestore()
  //     .collection("categories")
  //     .doc(category.id)
  //     .collection("menu")
  //     .get();
  //   const menu = categoryDocs.docs.map((doc) => ({
  //     ...doc.data(),
  //     id: doc.id,
  //   }));
  //   return menu;
  // });
};
