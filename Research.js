/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";

export default function Research(props) {
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
        <ImageBackground
          style={[styles.img, styles.img_layout1]}
          source={require("../assets/201efd8cbf4e17faf6e6b0601defc437.png")}
        />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.subtitle_box, styles.subtitle_box_layout]}>
          <Text style={styles.subtitle} ellipsizeMode={"clip"}>
            {"Research & Development"}
          </Text>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout1]}>
          <View style={styles.flex1_col}>
            <ImageBackground
              style={[styles.img, styles.img_layout2]}
              source={require("../assets/1a2f6e251fbc751dfcde96eed69a35a3.png")}
            />
          </View>
          <View style={styles.flex1_space} />
          <View style={styles.flex1_col}>
            <ImageBackground
              style={[styles.img, styles.img_layout3]}
              source={require("../assets/aeb46add3770e6fd3d20a5192cc8f046.png")}
            />
          </View>
          <View style={styles.flex1_space} />
          <View style={styles.flex1_col}>
            <ImageBackground
              style={[styles.img, styles.img_layout4]}
              source={require("../assets/7a4c961e9fd899fced89145fd8b7fec0.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.text_body_box, styles.text_body_box_layout]}>
          <Text style={styles.text_body} ellipsizeMode={"clip"}>
            {"We Create Your Imaginations..."}
          </Text>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.group, styles.group_layout1]}>
          <View style={[styles.group, styles.group_layout]}>
            <View
              style={[
                styles.small_paragraph_body_box,
                styles.small_paragraph_body_box_layout,
              ]}
            >
              <Text style={styles.small_paragraph_body} ellipsizeMode={"clip"}>
                {
                  "Innovations are no end in themselves for ATS. When it comes to developing materials we are the perfect partner. With ATS you will benefit from our expertise in design, service and quality. As the development and system partner we are able to contribute value in the discussions with our clients. The ideas we deliver help shape final product. As a leading innovator we possess a wealth of processes and knowledge that gives our customers the edge along the value chain from delivering innovative ideas right up to production maturity. We meet high quality demands of the industry with ongoing Quality Assurance standards.\r\n\r\n\n\n\n\n\n\n\n\n\n\nOur latest developments many of which are unique exemplify or approach. In the industry new trends to enhance life are continuously emerging and we are quick to respond by offering our customers the innovations they need. With materials with high mechanical properties than any other producer we make a major contribution to brand loyalty."
                }
              </Text>
            </View>
            <ImageBackground
              style={[styles.img5, styles.img5_layout]}
              source={require("../assets/28d4917e287c8afc870bb0f43454a16f.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

Research.inStorybook = true;
Research.fitScreen = false;
Research.scrollHeight = 640;

const styles = StyleSheet.create({
  content_box: {
    backgroundColor: "#fbc370ff",
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
    marginTop: 20,
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
  img_layout1: {
    marginTop: 1.5,
    height: 170,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  subtitle_box_layout: {
    marginTop: 2,
    marginBottom: 0,
    marginLeft: 67,
    flexGrow: 1,
    marginRight: 67,
  },
  subtitle_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  flex_layout1: {
    overflow: "visible",
    marginTop: 1,
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
  img_layout2: {
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
  img_layout3: {
    marginTop: 0,
    height: 13,
    marginBottom: 0,
    marginLeft: 0,
    width: 15.77,
    minWidth: 15.77,
    marginRight: 0,
  },
  img_layout4: {
    marginTop: 0,
    height: 13,
    marginBottom: 0,
    marginLeft: 0,
    width: 15.77,
    minWidth: 15.77,
    marginRight: 0,
  },
  text_body_box_layout: {
    marginTop: 2,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  text_body_box: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  group: {
    width: "100%",
  },
  group_layout1: {
    overflow: "visible",
    marginTop: 1,
    height: 338,
    marginBottom: 4,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  group_layout: {
    position: "absolute",
    overflow: "visible",
    top: 133,
    height: 136,
    left: 0,
    right: 0,
  },
  small_paragraph_body_box_layout: {
    position: "absolute",
    top: -133,
    height: 338,
    left: 3,
    right: 2,
  },
  small_paragraph_body_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  img5: {
    resizeMode: "contain",
    borderRadius: 19,
  },
  img5_layout: {
    marginTop: 0,
    height: 136,
    marginLeft: 0,
    width: 360,
    minWidth: 360,
  },
});
