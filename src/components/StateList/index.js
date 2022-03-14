import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import * as stateActions from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import Item from "../ListItem";

const StateList = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.appData.loading);
  const states = useSelector((state) => state.appData.states);

  const fetchData = async () => {
    const resp = await fetch(
      "http://pos.idtretailsolutions.com/countytest/states"
    );
    const { data } = await resp.json();
    dispatch(stateActions.getStates(data));
    dispatch(stateActions.loadingStatesComplete());
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={states}
        renderItem={renderItem}
        keyExtractor={(item) => item.state}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StateList;
