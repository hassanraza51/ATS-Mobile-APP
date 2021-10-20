/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import { Px } from "./posize";

export default function Orders(props) {
  return (
    <View style={[styles.content_box, styles.content_box_layout]}>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout]}>
          <View style={styles.flex_col}>
            <ImageBackground
              style={[styles.img, styles.img_layout]}
              source={require("../assets/2d2fbcb7f5c44607a6b05fc53aada402.png")}
            />
          </View>
          <View style={styles.flex_space} />
          <View style={styles.flex_col1}>
            <ImageBackground
              style={[styles.icon, styles.icon_layout]}
              source={require("../assets/66ca7d133cea6f3996f745fbf51d0413.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.line, styles.line_layout]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.subtitle_box, styles.subtitle_box_layout]}>
          <Text style={styles.subtitle} ellipsizeMode={"clip"}>
            {"For Orders & Inquires"}
          </Text>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout1]}>
          <View style={styles.flex1_col}>
            <ImageBackground
              style={[styles.img, styles.img_layout1]}
              source={require("../assets/1a2f6e251fbc751dfcde96eed69a35a3.png")}
            />
          </View>
          <View style={styles.flex1_space} />
          <View style={styles.flex1_col}>
            <ImageBackground
              style={[styles.img, styles.img_layout2]}
              source={require("../assets/aeb46add3770e6fd3d20a5192cc8f046.png")}
            />
          </View>
          <View style={styles.flex1_space} />
          <View style={styles.flex1_col}>
            <ImageBackground
              style={[styles.img, styles.img_layout3]}
              source={require("../assets/7a4c961e9fd899fced89145fd8b7fec0.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.text_body_box, styles.text_body_box_layout]}>
          <Text style={styles.text_body} ellipsizeMode={"clip"}>
            {"Name:"}
          </Text>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.rect, styles.rect_layout]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.text_body_box, styles.text_body_box_layout1]}>
          <Text style={styles.text_body} ellipsizeMode={"clip"}>
            {"Email:"}
          </Text>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.rect, styles.rect_layout1]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.text_body_box, styles.text_body_box_layout2]}>
          <Text style={styles.text_body} ellipsizeMode={"clip"}>
            {"Phone:"}
          </Text>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.rect, styles.rect_layout2]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.text_body_box, styles.text_body_box_layout3]}>
          <Text style={styles.text_body} ellipsizeMode={"clip"}>
            {"Subject:"}
          </Text>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.rect, styles.rect_layout3]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.text_body_box, styles.text_body_box_layout4]}>
          <Text style={styles.text_body} ellipsizeMode={"clip"}>
            {"Message:"}
          </Text>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.rect, styles.rect_layout4]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.group, styles.group_layout]}>
          <Px.View
            x="14.5fr minmax(0px, max-content) 15.5fr"
            y="11px minmax(0px, max-content) 9fr"
            style={styles.send_box}
          >
            <Text style={styles.send} ellipsizeMode={"clip"}>
              {"Send"}
            </Text>
          </Px.View>
        </View>
      </View>
    </View>
  );
}

Orders.inStorybook = true;
Orders.fitScreen = false;
Orders.scrollHeight = 640;

const styles = StyleSheet.create({
  content_box: {
    backgroundColor: "#fac370ff",
    overflow: "hidden",
  },
  content_box_layout: {
    overflow: "hidden",
    marginTop: 0,
    marginBottom: 0,
    minHeight: 640,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  content_box_row: {
    flexGrow: 0,
    flexShrink: 0,
    minHeight: 0,
  },
  flex: {
    flexDirection: "row",
  },
  flex_layout: {
    overflow: "visible",
    marginTop: 21,
    marginBottom: 0,
    marginLeft: 2,
    flexGrow: 1,
    marginRight: 2,
  },
  flex_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 317,
  },
  img: {
    resizeMode: "contain",
  },
  img_layout: {
    marginTop: 0,
    height: 45,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  flex_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 19.3,
  },
  flex_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 15.4,
  },
  icon: {
    resizeMode: "contain",
  },
  icon_layout: {
    marginTop: 18.75,
    height: 15.5,
    marginBottom: 10.75,
    marginLeft: 0,
    width: 15.4,
    minWidth: 15.4,
    marginRight: 0,
  },
  line: {
    width: "100%",
    backgroundColor: "#000000ff",
  },
  line_layout: {
    marginTop: 3.5,
    height: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  subtitle_box_layout: {
    marginTop: 4.5,
    marginBottom: 0,
    marginLeft: 84,
    flexGrow: 1,
    marginRight: 83,
  },
  subtitle_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  flex_layout1: {
    overflow: "visible",
    marginTop: 7,
    marginBottom: 0,
    width: 57,
    minWidth: 57,
    marginLeft: "auto",
    marginRight: "auto",
  },
  flex1_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 15.77,
  },
  img_layout1: {
    marginTop: 0,
    height: 13,
    marginBottom: 0,
    marginLeft: 0,
    width: 15.77,
    minWidth: 15.77,
    marginRight: 0,
  },
  flex1_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 4.85,
  },
  img_layout2: {
    marginTop: 0,
    height: 13,
    marginBottom: 0,
    marginLeft: 0,
    width: 15.77,
    minWidth: 15.77,
    marginRight: 0,
  },
  img_layout3: {
    marginTop: 0,
    height: 13,
    marginBottom: 0,
    marginLeft: 0,
    width: 15.77,
    minWidth: 15.77,
    marginRight: 0,
  },
  text_body_box_layout: {
    marginTop: 11,
    marginBottom: 0,
    marginLeft: 21,
    width: 42,
    minWidth: 42,
  },
  text_body_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  rect: {
    width: "100%",
    backgroundColor: "#c5c5c5ff",
  },
  rect_layout: {
    marginTop: 1,
    height: 26,
    marginBottom: 0,
    marginLeft: 20,
    width: 220,
    minWidth: 220,
  },
  text_body_box_layout1: {
    marginTop: 9,
    marginBottom: 0,
    marginLeft: 21,
    width: 39,
    minWidth: 39,
  },
  rect_layout1: {
    marginTop: 1,
    height: 26,
    marginBottom: 0,
    marginLeft: 20,
    flexGrow: 1,
    marginRight: 25,
  },
  text_body_box_layout2: {
    marginTop: 9,
    marginBottom: 0,
    marginLeft: 21,
    width: 45,
    minWidth: 45,
  },
  rect_layout2: {
    marginTop: 1,
    height: 26,
    marginBottom: 0,
    marginLeft: 20,
    width: 189,
    minWidth: 189,
  },
  text_body_box_layout3: {
    marginTop: 7,
    marginBottom: 0,
    marginLeft: 21,
    width: 52,
    minWidth: 52,
  },
  rect_layout3: {
    marginTop: 1,
    height: 26,
    marginBottom: 0,
    marginLeft: 20,
    flexGrow: 1,
    marginRight: 22,
  },
  text_body_box_layout4: {
    marginTop: 8,
    marginBottom: 0,
    marginLeft: 21,
    width: 62,
    minWidth: 62,
  },
  rect_layout4: {
    marginTop: 1,
    height: 208,
    marginBottom: 0,
    marginLeft: 20,
    flexGrow: 1,
    marginRight: 22,
  },
  group: {
    width: "100%",
    backgroundColor: "#0884caff",
    borderRadius: 10,
  },
  group_layout: {
    overflow: "visible",
    marginTop: 20,
    height: 44,
    marginBottom: 19,
    width: 81,
    minWidth: 81,
    marginLeft: "auto",
    marginRight: "auto",
  },
  send: {
    color: "#000000ff",
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 24,
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  send_box: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
