/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import { Px } from "./posize";

export default function Quality(props) {
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
          source={require("../assets/a38277ce45b8182e146f79682fcd0977.png")}
        />
      </View>
      <View style={styles.content_box_row}>
        <View
          style={[
            styles.quality_control_box,
            styles.quality_control_box_layout,
          ]}
        >
          <Text style={styles.quality_control} ellipsizeMode={"clip"}>
            {"Quality Control"}
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
        <View
          style={[styles.paragraph_body_box, styles.paragraph_body_box_layout]}
        >
          <Text style={styles.paragraph_body} ellipsizeMode={"clip"}>
            {
              "With ATS you will benefit from expertise in design, service and quality…"
            }
          </Text>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.group, styles.group_layout5]}>
          <View style={[styles.group, styles.group_layout4]}>
            <View style={[styles.group, styles.group_layout3]}>
              <ImageBackground
                style={[styles.group, styles.group_layout2]}
                source={require("../assets/1a2f6e251fbc751dfcde96eed69a35a3.png")}
                resizeMode="contain"
              >
                <ImageBackground
                  style={[styles.group, styles.group_layout1]}
                  source={require("../assets/aeb46add3770e6fd3d20a5192cc8f046.png")}
                  resizeMode="contain"
                >
                  <View style={[styles.group, styles.group_layout]}>
                    <Px.View
                      x="1fr minmax(0px, max-content) 1fr"
                      y="0px minmax(0px, max-content) 1fr"
                      style={styles.highlights_box}
                    >
                      <Text style={styles.highlights} ellipsizeMode={"clip"}>
                        {"Raw Materials Testing"}
                      </Text>
                    </Px.View>
                    <View
                      style={[
                        styles.small_paragraph_body_box,
                        styles.small_paragraph_body_box_layout,
                      ]}
                    >
                      <Text
                        style={styles.small_paragraph_body}
                        ellipsizeMode={"clip"}
                      >
                        {
                          "At ATS we maintain the concept of total quality. Organizing procedures and sophisticated technical instruments are appropriately integrated. Professionals in this team and quality inspectors aim to embrace proactive approach within each stage/process of production. Every production batch is always tested in order to verify the overall quality related to the destination of the product.\r\nTo further enhance our quality we are a member of Technology UK, the worlds leading research and technology organization for footwear and leather. We are in an ongoing agreement with SATRA for technical assistance. Our QC lab is equipped with SATRA testing equipment and many other testing tools such as tear/tensile test machines, UV test, Incubator, viscosity meter, abrasion testers, density scales, spectrophotometers; flame test, anti-fungus tests, bally and vamp flexometer with temperature control feature."
                        }
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </ImageBackground>

              <ImageBackground
                style={[styles.img, styles.img_layout5]}
                source={require("../assets/7a4c961e9fd899fced89145fd8b7fec0.png")}
              />
            </View>

            <ImageBackground
              style={[styles.img, styles.img_layout6]}
              source={require("../assets/095686c9d9012365026b0c146a3b4126.png")}
            />
          </View>
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
              "In order to maintain quality throughout, ATS uses strict criteria in selecting raw materials. Raw material testing facility, operating parallel with QC department. Professional and chemists work under a fool proof quality assurance system covering all steps from the testing of the incoming commodities to the dispatch of the finished products through routine and random sample testing, assuring no compromise on quality. Our testing facility is geared with modern textile testing tools, pilot reactors, gas chromatography and other chemical and application testing equipment."
            }
          </Text>
        </View>
      </View>
    </View>
  );
}

Quality.inStorybook = true;
Quality.fitScreen = false;
Quality.scrollHeight = 640;

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
    height: 149,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  quality_control_box_layout: {
    marginTop: 1,
    marginBottom: 0,
    width: 135,
    minWidth: 135,
    marginLeft: "auto",
    marginRight: "auto",
  },
  quality_control_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  flex_layout1: {
    overflow: "visible",
    marginTop: 0,
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
  paragraph_body_box_layout: {
    marginTop: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  paragraph_body_box: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  group: {
    width: "100%",
  },
  group_layout5: {
    overflow: "visible",
    marginTop: 1,
    marginBottom: 0,
    minHeight: 214,
    marginLeft: 2,
    flexGrow: 1,
    marginRight: 2,
  },
  group_layout4: {
    overflow: "visible",
    marginTop: 177,
    marginBottom: 2,
    minHeight: 35,
    marginLeft: "auto",
    width: 65,
    minWidth: 65,
    marginRight: 17,
  },
  group_layout3: {
    position: "absolute",
    overflow: "visible",
    height: 13,
    bottom: -2,
    left: -82.765869140625,
    width: 15.77,
  },
  group_layout2: {
    position: "absolute",
    overflow: "visible",
    top: 0,
    height: 13,
    left: -41.234130859375,
    width: 15.77,
  },
  group_layout1: {
    position: "absolute",
    overflow: "visible",
    top: 0,
    height: 13,
    width: 15.77,
    right: -20.616943359375,
  },
  group_layout: {
    position: "absolute",
    overflow: "visible",
    top: -19,
    height: 19,
    left: -72.616943359375,
    right: -71.61709976196289,
  },
  highlights: {
    color: "#000000ff",
    textAlign: "justify",
    letterSpacing: 0,
    lineHeight: 19.2,
    fontSize: 16,
    fontWeight: "700",
    fontStyle: "normal",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  highlights_box: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  small_paragraph_body_box_layout: {
    position: "absolute",
    top: -182,
    height: 182,
    left: -98,
    right: -98,
  },
  small_paragraph_body_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  img_layout5: {
    marginTop: 0,
    height: 13,
    marginLeft: 0,
    width: 15.77,
    minWidth: 15.77,
  },
  img_layout6: {
    marginTop: 0,
    height: 35,
    marginLeft: 0,
    width: 65,
    minWidth: 65,
  },
  small_paragraph_body_box_layout1: {
    marginTop: 2,
    marginBottom: 18,
    marginLeft: 2,
    flexGrow: 1,
    marginRight: 2,
  },
});
