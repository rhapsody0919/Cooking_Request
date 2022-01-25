import {
  TouchableHighlight,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import React, { useState, useEffect } from "react";
import TextInputForm from "../components/TextInput";
import AddButton from "../components/AddButton";
import {
  getMealByCategoryId,
  getCategories,
  setCategoryItem,
  deleteCategoryItem,
} from "../src/lib/firebase";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerTitle: {
    textAlign: "center",
    fontSize: 30,
  },
  menu: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    justifyContent: "center",
    height: 50,
  },
  menuText: {
    textAlign: "center",
    fontSize: 20,
  },
  rowBack: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
  backTextWhite: {
    color: "#FFF",
    lineHeight: 46,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default MenuScreen = ({ navigation }) => {
  //第3引数が変更されたタイミングで実行。引数が空の配列を渡せばマウント時のみ実行
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getFirebaseItems();
      return unsubscribe;
    });
  }, [navigation]);

  const [name, setName] = useState("");
  const [menus, setMenu] = useState([]);
  const [id, setId] = useState(0);

  const getFirebaseItems = async () => {
    const categories = await getCategories();
    // categoriesにmenu情報のある配列を追加する
    const menus = categories;
    for (const menu of menus) {
      const meals = await getMealByCategoryId(menu.id);
      //menusが返ってきたら追加
      if (meals) {
        menu.meal = meals;
      }
    }
    setMenu(menus);
  };

  const setFirebaseItems = async (name) => {
    setCategoryItem(name);
  };

  const deleteFirebaseItems = async (id) => {
    deleteCategoryItem(id);
  };

  const register = () => {
    if (name == "") {
      return false;
    }
    // DB更新
    setFirebaseItems(name);
    //idとcategories、nameを更新
    setName("");
    // setId(id + 1);
    // menus.unshift({ id: id, name: name });
    getFirebaseItems();
  };

  const Menu = (props) => {
    return (
      <TouchableHighlight
        onPress={() => console.log("touched me")}
        style={styles.menu}
      >
        <Text style={styles.menuText}>{props.name}</Text>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>料理メニュー</Text>
      {/* 料理追加 */}
      <TextInputForm
        label={"カテゴリ"}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <AddButton onPress={register} label={"追加"} />

      <SwipeListView
        data={menus}
        renderItem={({ item, index }) => {
          return <Menu name={item.name} />;
        }}
        keyExtractor={(item) => item.id.toString()}
        renderHiddenItem={(data, index) => (
          <View style={styles.rowBack}>
            {/* 料理削除 */}
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnLeft]}
              onPress={() => {
                //firestoreから削除
                deleteFirebaseItems(data.item.id);
                //statusを変更
                setMenu(
                  menus.filter((menu) => {
                    return menu.id != data.item.id;
                  })
                );
              }}
            >
              <Text style={styles.backTextWhite}>削除</Text>
            </TouchableOpacity>
            {/* 料理編集 */}
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnRight]}
              onPress={() => {
                //入力フォームを呼び出す
                navigation.navigate("Edit", {
                  editItem: data.item,
                });
              }}
            >
              <Text style={styles.backTextWhite}>編集</Text>
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-150}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
      />
    </SafeAreaView>
  );
};
