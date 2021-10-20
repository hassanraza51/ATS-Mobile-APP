/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";

export default function Home(props) {
  return (
    <View style={[styles.content_box, styles.content_box_layout]}>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout]}>
          <View style={styles.flex_col}>
            <ImageBackground
              style={[styles.img, styles.img_layout]}
              source={require("./assets/2d2fbcb7f5c44607a6b05fc53aada402.png")}
            />
          </View>
          <View style={styles.flex_space} />
          <View style={styles.flex_col1}>
            <ImageBackground
              style={[styles.icon, styles.icon_layout]}
              source={require("./assets/b33f10dbb045aadd1d2a0e79c47909f3.png")}
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
          source={require("./assets/aab74e7bf9568cce67dfe910ff1f034e.png")}
        />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout1]}>
          <View style={styles.flex1_col}>
            <ImageBackground
              style={[styles.img, styles.img_layout2]}
              source={require("./assets/dc7e73b197e146694c9fa6e55fdf3b26.png")}
            />
          </View>
          <View style={styles.flex1_space} />
          <View style={styles.flex1_col1}>
            <View
              style={[styles.medium_title_box, styles.medium_title_box_layout]}
            >
              <Text style={styles.medium_title} ellipsizeMode={"clip"}>
                {"Welcome to Our APP! "}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.line, styles.line_layout1]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.ats_group_box, styles.ats_group_box_layout]}>
          <Text style={styles.ats_group} ellipsizeMode={"clip"}>
            {"ATS Group\r\n"}
          </Text>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout2]}>
          <View style={styles.flex2_col}>
            <ImageBackground
              style={[styles.icon, styles.icon_layout1]}
              source={require("./assets/69a6b7a6486a9f9b75f35dda3591affc.png")}
            />
          </View>
          <View style={styles.flex2_space} />
          <View style={styles.flex2_col}>
            <ImageBackground
              style={[styles.icon, styles.icon_layout2]}
              source={require("./assets/d7b091e26adc3bade989a89b9bcf909b.png")}
            />
          </View>
          <View style={styles.flex2_space} />
          <View style={styles.flex2_col}>
            <ImageBackground
              style={[styles.icon, styles.icon_layout3]}
              source={require("./assets/53b682c4be8f87bf9df9a4a45aec04f7.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View
          style={[styles.medium_title_box1, styles.medium_title_box1_layout]}
        >
          <Text style={styles.medium_title1} ellipsizeMode={"clip"}>
            {"A vision comes to age …\r\n"}
          </Text>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View
          style={[
            styles.small_paragraph_body_box,
            styles.small_paragraph_body_box_layout,
          ]}
        >
          <Text style={styles.small_paragraph_body} ellipsizeMode={"clip"}>
            <Text style={styles.small_paragraph_bodySpan0}>
              {"Established in 1968 by "}
            </Text>
            <Text style={styles.small_paragraph_bodySpan1}>
              {"Mian Nisar Elahi (Late)"}
            </Text>
            <Text style={styles.small_paragraph_bodySpan2}>
              {
                ", ATS was created to spearhead Pakistan’s industrial drive beyond typical textile business. By introducing materials with countless applications in modern life, our vision was to create world-class business to reduce dependency on import and raise performance in the sector."
              }
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View
          style={[
            styles.small_paragraph_body_box,
            styles.small_paragraph_body_box_layout1,
          ]}
        >
          <Text style={styles.small_paragraph_body} ellipsizeMode={"clip"}>
            {
              "Today that vision has been realized. ATS Group stands tall as the Pakistan’s largest and the fastest growing industrial concerns. Specializing in synthetic leather our portfolio also takes in intermediate/specialized chemicals, plastics films/technical products and textiles. These products touch people’s life; from textiles that clothe and protect us to synthetic leather that enhance enrich quality of life, ATS products are fundamental to the quality of life."
            }
          </Text>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View
          style={[
            styles.small_paragraph_body_box,
            styles.small_paragraph_body_box_layout2,
          ]}
        >
          <Text style={styles.small_paragraph_body} ellipsizeMode={"clip"}>
            {
              "At ATS we continue to build our strength: our commitment to quality, our proximity to markets, our investment in R&D and acquiring new technologies. The Group employs over 3,000 people; with the combined energy, drive and a spirit of collaboration we are building our future."
            }
          </Text>
        </View>
      </View>
    </View>
  );
}

Home.inStorybook = true;
Home.fitScreen = false;
Home.scrollHeight = 640;

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
    marginTop: 2.73,
    height: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  img_layout1: {
    marginTop: 6.27,
    height: 200,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  flex_layout1: {
    overflow: "visible",
    marginTop: 5,
    marginBottom: 0,
    marginLeft: 23,
    flexGrow: 1,
    marginRight: 0,
  },
  flex1_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 25,
  },
  img_layout2: {
    marginTop: 3,
    height: 19.44,
    marginBottom: 0.56,
    marginLeft: 0,
    width: 25,
    minWidth: 25,
    marginRight: 0,
  },
  flex1_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 31,
  },
  flex1_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 0,
  },
  medium_title_box_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  medium_title_box: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  line_layout1: {
    marginTop: 5,
    height: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  ats_group_box_layout: {
    marginTop: 4,
    marginBottom: 0,
    width: 134,
    minWidth: 134,
    marginLeft: "auto",
    marginRight: "auto",
  },
  ats_group_box: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  flex_layout2: {
    overflow: "visible",
    marginTop: 0,
    marginBottom: 0,
    width: 94,
    minWidth: 94,
    marginLeft: "auto",
    marginRight: "auto",
  },
  flex2_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 26,
  },
  icon_layout1: {
    marginTop: 0,
    height: 26,
    marginBottom: 0,
    marginLeft: 0,
    width: 26,
    minWidth: 26,
    marginRight: 0,
  },
  flex2_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 8,
  },
  icon_layout2: {
    marginTop: 0,
    height: 26,
    marginBottom: 0,
    marginLeft: 0,
    width: 26,
    minWidth: 26,
    marginRight: 0,
  },
  icon_layout3: {
    marginTop: 0,
    height: 26,
    marginBottom: 0,
    marginLeft: 0,
    width: 26,
    minWidth: 26,
    marginRight: 0,
  },
  medium_title_box1_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 30,
    flexGrow: 1,
    marginRight: 30,
  },
  medium_title_box1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  small_paragraph_body_box_layout: {
    marginTop: 2,
    marginBottom: 0,
    marginLeft: 3,
    flexGrow: 1,
    marginRight: 5,
  },
  small_paragraph_body_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  small_paragraph_bodySpan0: {
    color: "#000000ff",
    letterSpacing: 0,
    lineHeight: 13.2,
    fontSize: 11,
    fontWeight: "400",
    fontStyle: "normal",
  },
  small_paragraph_bodySpan1: {
    color: "#000000ff",
    letterSpacing: 0,
    lineHeight: 13.2,
    fontSize: 11,
    fontWeight: "700",
    fontStyle: "normal",
  },
  small_paragraph_bodySpan2: {
    color: "#000000ff",
    letterSpacing: 0,
    lineHeight: 13.2,
    fontSize: 11,
    fontWeight: "400",
    fontStyle: "normal",
  },
  small_paragraph_body_box_layout1: {
    marginTop: 1,
    marginBottom: 0,
    marginLeft: 3,
    flexGrow: 1,
    marginRight: 5,
  },
  small_paragraph_body_box_layout2: {
    marginTop: 6,
    marginBottom: 19,
    marginLeft: 3,
    flexGrow: 1,
    marginRight: 7,
  },
});
