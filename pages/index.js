import React, { Fragment } from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  transform: {
    transform: [{ scaleY: 1 }]
  }
});

const Index = props => (
  <Fragment>
    {/* Uncommenting the below Text resolves the style mismatch */}
    {/* <Text style={styles.transform}>Transform style match</Text> */}
    <Text style={{ transform: [{ scaleY: 1 }] }}>
      Transform style mistmatch
    </Text>
    <Text style={styles.transform}>Transform style match</Text>
  </Fragment>
);

export default Index;
