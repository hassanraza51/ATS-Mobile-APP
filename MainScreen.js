/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
//import { Px } from "./assets/posize";

export default function MainScreen(props) {
  return (
    <View style={[styles.group, styles.group_layout]}>
      <View style={[styles.group1, styles.group1_layout]}>
        <View style={[styles.group2, styles.group2_layout]}>
          <ImageBackground
            style={[styles.img, styles.img_layout]}
            source={require("./assets/ff018dc7d86f0c1888e63ed5b841e73f.png")}
          />

          <View style={[styles.group3, styles.group3_layout]}>
            <View style={styles.group4}>
              <ImageBackground
                style={[styles.img, styles.img_layout1]}
                source={require("./assets/1661c2c116a5f5e9218276b6bdcff35d.png")}
              />

              <View style={[styles.group5, styles.group5_layout]}>
                <ImageBackground
                  style={[styles.decorator, styles.decorator_layout]}
                  source={require("./assets/343bb36367ad463e7b63fa026da05b7c.png")}
                />
                <ImageBackground
                  style={[styles.img, styles.img_layout2]}
                  source={require("./assets/fb22f7139c3f815d7eedd54fad3851b5.png")}
                />
              </View>
            </View>

            <ImageBackground
              style={[styles.img, styles.img_layout3]}
              source={require("./assets/Preloader.gif")}
            />
          </View>
        </View>

        <ImageBackground
          style={[styles.img, styles.img_layout4]}
          source={require("./assets/07ed6a29fc9440967e4add21cc9864fe.png")}
        />
      </View>
    </View>
  );
}

MainScreen.inStorybook = true;
MainScreen.fitScreen = false;
MainScreen.scrollHeight = 640;

const styles = StyleSheet.create({
  group: {
    width: "100%",
    backgroundColor: "#ffffffff",
    overflow: "hidden",
  },
  group_layout: {
    overflow: "hidden",
    marginTop: 0,
    marginBottom: 0,
    minHeight: 640,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  group1: {
    width: "100%",
  },
  group1_layout: {
    position: "absolute",
    overflow: "visible",
    height: 135,
    bottom: -67,
    left: -72,
    width: 195,
  },
  group2: {
    width: "100%",
  },
  group2_layout: {
    position: "absolute",
    overflow: "visible",
    top: -6,
    height: 135,
    width: 198,
    right: -309,
  },
  img: {
    resizeMode: "cover",
  },
  img_layout: {
    position: "absolute",
    top: 0,
    height: 135,
    left: 0,
    width: 198,
  },
  group3: {
    width: "100%",
  },
  group3_layout: {
    position: "absolute",
    overflow: "visible",
    top: -351,
    height: 464,
    left: -400,
    right: -108,
  },
  group4: {
    width: "100%",
    flexGrow: 1,
  },
  img_layout1: {
    marginTop: 0,
    height: 145,
    marginLeft: 240,
    width: 203,
    minWidth: 203,
  },
  group5: {
    width: "100%",
  },
  group5_layout: {
    position: "absolute",
    overflow: "visible",
    top: -242,
    height: 154,
    width: 178,
    right: -116,
  },
  decorator: {
    resizeMode: "contain",
  },
  decorator_layout: {
    position: "absolute",
    top: -90,
    height: 152,
    left: -50,
    width: 198,
  },
  img_layout2: {
    position: "absolute",
    top: -105,
    height: 154,
    left: 270,
    width: 178,
  },
  img_layout3: {
    position: "absolute",
    top: 0,
    height: 464,
    left: 0,
    width: 706,
  },
  img_layout4: {
    position: "absolute",
    top: 0,
    height: 135,
    left: 0,
    width: 195,
  },
});
