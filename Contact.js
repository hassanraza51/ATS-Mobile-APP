/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
//import { Px } from "./posize";

export default function Contact(props) {
  return (
    <View style={[styles.group, styles.group_layout]}>
      <View style={[styles.flex, styles.flex_layout]}>
        <View style={styles.flex_row}>
          <ImageBackground
            style={[styles.group1, styles.group1_layout]}
            source={require("./assets/66ca7d133cea6f3996f745fbf51d0413.png")}
            resizeMode="contain"
          >
            <ImageBackground
              style={[styles.group2, styles.group2_layout]}
              source={require("./assets/2d2fbcb7f5c44607a6b05fc53aada402.png")}
              resizeMode="contain"
            />
          </ImageBackground>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.group3, styles.group3_layout]}>
            <View
              style={[
                styles.paragraph_body_box,
                styles.paragraph_body_box_layout,
              ]}
            >
              <Text style={styles.paragraph_body} ellipsizeMode={"clip"}>
                {
                  "ATS Synthetic (Pvt) Ltd.\r4-KM Kacha Road, Kahna Nau\rLahore, Punjab, Pakistan"
                }
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.flex_row}>
          <ImageBackground
            style={[styles.group4, styles.group4_layout]}
            source={require("./assets/28cf6d3ffb76a8757e2791942f684767.png")}
            resizeMode="contain"
          >
            <View
              style={[styles.our_location_box, styles.our_location_box_layout]}
            >
              <Text style={styles.our_location} ellipsizeMode={"clip"}>
                {"Our Location"}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.group5, styles.group5_layout]}>
            <View style={[styles.line, styles.line_layout]} />
            <View style={[styles.line, styles.line_layout1]} />
          </View>
        </View>
        <View style={styles.flex_row}>
          <ImageBackground
            style={[styles.group6, styles.group6_layout]}
            source={require("./assets/28cf6d3ffb76a8757e2791942f684767.png")}
            resizeMode="contain"
          >
            <View style={[styles.highlights_box, styles.highlights_box_layout]}>
              <Text style={styles.highlights} ellipsizeMode={"clip"}>
                {"Our Head Office"}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.group7, styles.group7_layout]}>
            <View
              style={[
                styles.paragraph_body_box,
                styles.paragraph_body_box_layout1,
              ]}
            >
              <Text style={styles.paragraph_body} ellipsizeMode={"clip"}>
                {
                  "ATS Synthetic, 3rd Floor, ATS Heights,\r7 Durand Road،Garhi Shahu,\rLahore, Punjab, Pakistan"
                }
              </Text>
            </View>
            <ImageBackground
              style={[styles.image, styles.image_layout]}
              source={require("./assets/b76990ddc0218b62961f3ef1ea99e707.png")}
            />
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.group8, styles.group8_layout]}>
            <ImageBackground
              style={[styles.decorator, styles.decorator_layout]}
              source={require("./assets/7af80e83e01fef6ee14ffad1fd83f9fc.png")}
            />
            <ImageBackground
              style={[styles.icon, styles.icon_layout]}
              source={require("./assets/c62c2cba14db8ee4e9e113dc7cea0b5a.png")}
            />
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.group9, styles.group9_layout]}>
            <View
              style={[
                styles.small_text_body_box,
                styles.small_text_body_box_layout,
              ]}
            >
              <Text style={styles.small_text_body} ellipsizeMode={"clip"}>
                {"Fax:"}
              </Text>
            </View>
            <ImageBackground
              style={[styles.icon, styles.icon_layout1]}
              source={require("./assets/6fafc5f27634f2acabf55d24ecef99c1.png")}
            />
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.group10, styles.group10_layout]}>
            <View
              style={[styles.stay_social_box, styles.stay_social_box_layout]}
            >
              <Text style={styles.stay_social} ellipsizeMode={"clip"}>
                {"Stay Social"}
              </Text>
            </View>
            <ImageBackground
              style={[styles.icon, styles.icon_layout2]}
              source={require("./assets/60c23667843bd85ec357fe9524e2f969.png")}
            />
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.flex1, styles.flex1_layout]}>
            <View style={styles.flex1_col}>
              <View style={[styles.group11, styles.group11_layout]}>
                <View
                  style={[
                    styles.contact_details_box,
                    styles.contact_details_box_layout,
                  ]}
                >
                  <Text style={styles.contact_details} ellipsizeMode={"clip"}>
                    {"Contact Details"}
                  </Text>
                </View>
                <View
                  style={[styles.text_body_box, styles.text_body_box_layout]}
                >
                  <Text style={styles.text_body} ellipsizeMode={"clip"}>
                    {"For General Information"}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.flex1_space} />
            <View style={styles.flex1_col1}>
              <View style={[styles.group12, styles.group12_layout]}>
                <ImageBackground
                  style={[styles.decorator, styles.decorator_layout1]}
                  source={require("./assets/7af80e83e01fef6ee14ffad1fd83f9fc.png")}
                />
                <View
                  style={[
                    styles.paragraph_body_box,
                    styles.paragraph_body_box_layout2,
                  ]}
                >
                  <Text style={styles.paragraph_body2} ellipsizeMode={"clip"}>
                    {"For Geomembrane Orders & Enquiry"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.flex2, styles.flex2_layout]}>
            <View style={styles.flex2_col}>
              <View style={[styles.cover_group, styles.cover_group_layout]}>
                <View
                  style={[styles.click_here_box, styles.click_here_box_layout]}
                >
                  <Text style={styles.click_here} ellipsizeMode={"clip"}>
                    {"Click Here"}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.flex2_space} />
            <View style={styles.flex2_col}>
              <View style={[styles.cover_group, styles.cover_group_layout1]}>
                <View
                  style={[styles.click_here_box, styles.click_here_box_layout]}
                >
                  <Text style={styles.click_here} ellipsizeMode={"clip"}>
                    {"Click Here"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.group13, styles.group13_layout]}>
            <View style={[styles.group14, styles.group14_layout]}>
              <View style={[styles.line, styles.line_layout2]} />
              <ImageBackground
                style={[styles.img, styles.img_layout]}
                source={require("./assets/28cf6d3ffb76a8757e2791942f684767.png")}
              />
            </View>

            <View
              style={[styles.highlights_box, styles.highlights_box_layout1]}
            >
              <Text style={styles.highlights} ellipsizeMode={"clip"}>
                {"Find Us On Map"}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.flex_row}>
          <View style={[styles.group15, styles.group15_layout]}>
            <View style={[styles.group16, styles.group16_layout]}>
              <View
                style={[
                  styles.small_text_body_box1,
                  styles.small_text_body_box1_layout,
                ]}
              >
                <Text style={styles.small_text_body1} ellipsizeMode={"clip"}>
                  {" info@atssynthetic.com.pk, info@atssynthetic.com"}
                </Text>
              </View>
              <Px.View
                x="0px 217fr 1fr"
                y="0px minmax(0px, max-content) 1fr"
                style={styles.txt_box}
              >
                <Text style={styles.txt} ellipsizeMode={"clip"}>
                  {"+92 42 35978091 – 6, +92 42 36288391"}
                </Text>
              </Px.View>

              <View style={[styles.group17, styles.group17_layout]}>
                <ImageBackground
                  style={[styles.icon, styles.icon_layout3]}
                  source={require("./assets/ad7fb65f5e2a2ef7d80a8321ad6c4eb3.png")}
                />
                <Px.View
                  x="0px 199fr 1fr"
                  y="0px minmax(0px, max-content) 1fr"
                  style={styles.txt_box}
                >
                  <Text style={styles.txt} ellipsizeMode={"clip"}>
                    {" 092 42 35978098, 092 42 36288401"}
                  </Text>
                </Px.View>

                <View style={[styles.group18, styles.group18_layout]}>
                  <View style={[styles.group19, styles.group19_layout]}>
                    <ImageBackground
                      style={[styles.icon, styles.icon_layout4]}
                      source={require("./assets/7e32af9271486ebc9bb5a46b2f007922.png")}
                    />
                    <ImageBackground
                      style={[styles.img, styles.img_layout1]}
                      source={require("./assets/ecf43e00902f489009db11fc39e2a667.png")}
                    />
                  </View>

                  <ImageBackground
                    style={[styles.img, styles.img_layout2]}
                    source={require("./assets/901eacd2282feeb90c14013c11ab1dd0.png")}
                  />
                </View>
              </View>

              <View style={[styles.group20, styles.group20_layout]}>
                <View style={[styles.line, styles.line_layout3]} />
                <View style={[styles.rect, styles.rect_layout]} />

                <View style={[styles.group21, styles.group21_layout]}>
                  <View style={[styles.group22, styles.group22_layout]}>
                    <View
                      style={[
                        styles.small_text_body_box,
                        styles.small_text_body_box_layout1,
                      ]}
                    >
                      <Text
                        style={styles.small_text_body}
                        ellipsizeMode={"clip"}
                      >
                        {"Email:"}
                      </Text>
                    </View>
                    <Px.View
                      x="1fr 41fr 1fr"
                      y="0px minmax(0px, max-content) 1fr"
                      style={styles.txt_box2}
                    >
                      <Text style={styles.txt2} ellipsizeMode={"clip"}>
                        {"Phone:"}
                      </Text>
                    </Px.View>
                  </View>

                  <ImageBackground
                    style={[styles.img3, styles.img3_layout]}
                    source={require("./assets/e034803692c70f0d8e0c13e70128f78a.png")}
                  />
                </View>
              </View>
            </View>

            <ImageBackground
              style={[styles.image1, styles.image1_layout]}
              source={require("./assets/8fb79e652940667985da56a78a34febc.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

Contact.inStorybook = true;
Contact.fitScreen = false;
Contact.scrollHeight = 640;

const styles = StyleSheet.create({
  group: {
    width: "100%",
    backgroundColor: "#fbc370ff",
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
  flex: {},
  flex_layout: {
    overflow: "visible",
    marginTop: 39.75,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  flex_row: {
    flexGrow: 0,
    flexShrink: 1,
  },
  group1: {
    width: "100%",
  },
  group1_layout: {
    overflow: "visible",
    marginTop: 0,
    marginBottom: 0,
    minHeight: 15.5,
    marginLeft: "auto",
    width: 15.4,
    minWidth: 15.4,
    marginRight: 6.3,
  },
  group2: {
    width: "100%",
  },
  group2_layout: {
    position: "absolute",
    overflow: "visible",
    top: -18.75,
    height: 45,
    left: -336.300048828125,
    width: 317,
  },
  group3: {
    width: "100%",
    backgroundColor: "#000000ff",
  },
  group3_layout: {
    overflow: "visible",
    marginTop: 14.25,
    marginBottom: 0,
    minHeight: 1,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  paragraph_body_box_layout: {
    position: "absolute",
    height: 30,
    bottom: -57.5,
    left: 0,
    right: 0,
  },
  paragraph_body_box: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  group4: {
    width: "100%",
  },
  group4_layout: {
    overflow: "visible",
    marginTop: 4.5,
    marginBottom: 0,
    minHeight: 17,
    marginLeft: 117,
    width: 16,
    minWidth: 16,
  },
  our_location_box_layout: {
    position: "absolute",
    top: -2,
    height: 21,
    width: 104,
    right: -110,
  },
  our_location_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  group5: {
    width: "100%",
  },
  group5_layout: {
    overflow: "visible",
    marginTop: 39.5,
    marginBottom: 0,
    minHeight: 1,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  line: {
    width: "100%",
    backgroundColor: "#000000ff",
  },
  line_layout: {
    position: "absolute",
    height: 1,
    bottom: -198,
    left: 0,
    right: 0,
  },
  line_layout1: {
    marginTop: 0,
    height: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  group6: {
    width: "100%",
  },
  group6_layout: {
    overflow: "visible",
    marginTop: 4.5,
    marginBottom: 0,
    minHeight: 17,
    marginLeft: 105,
    width: 16,
    minWidth: 16,
  },
  highlights_box_layout: {
    position: "absolute",
    top: -2,
    height: 21,
    width: 129,
    right: -135,
  },
  highlights_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  group7: {
    width: "100%",
  },
  group7_layout: {
    overflow: "visible",
    marginTop: 43,
    marginBottom: 0,
    minHeight: 12,
    marginLeft: 103,
    width: 10,
    minWidth: 10,
  },
  paragraph_body_box_layout1: {
    position: "absolute",
    top: -37,
    height: 30,
    left: -107,
    right: -251,
  },
  image: {
    resizeMode: "contain",
  },
  image_layout: {
    marginTop: 0,
    height: 12,
    marginBottom: 0,
    marginLeft: 0,
    width: 10,
    minWidth: 10,
    marginRight: 0,
  },
  group8: {
    width: "100%",
  },
  group8_layout: {
    overflow: "visible",
    marginTop: 6,
    marginBottom: 0,
    minHeight: 15,
    marginLeft: 2,
    width: 15.08,
    minWidth: 15.08,
  },
  decorator: {
    resizeMode: "contain",
  },
  decorator_layout: {
    position: "absolute",
    height: 20,
    bottom: -130,
    width: 24,
    right: -179.9157304763794,
  },
  icon: {
    resizeMode: "contain",
  },
  icon_layout: {
    marginTop: 0,
    height: 15,
    marginBottom: 0,
    marginLeft: 0,
    width: 15.08,
    minWidth: 15.08,
    marginRight: 0,
  },
  group9: {
    width: "100%",
  },
  group9_layout: {
    overflow: "visible",
    marginTop: 7,
    marginBottom: 0,
    minHeight: 12,
    marginLeft: 3.01,
    width: 12.07,
    minWidth: 12.07,
  },
  small_text_body_box_layout: {
    position: "absolute",
    height: 14,
    bottom: -23,
    width: 26,
    right: -30.598264694213867,
  },
  small_text_body_box: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  icon_layout1: {
    marginTop: 0,
    height: 12,
    marginBottom: 0,
    marginLeft: 0,
    width: 12.07,
    minWidth: 12.07,
    marginRight: 0,
  },
  group10: {
    width: "100%",
  },
  group10_layout: {
    overflow: "visible",
    marginTop: 31,
    marginBottom: 0,
    minHeight: 12,
    marginLeft: 125,
    width: 12,
    minWidth: 12,
  },
  stay_social_box_layout: {
    position: "absolute",
    top: -5,
    height: 21,
    width: 95,
    right: -100,
  },
  stay_social_box: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  icon_layout2: {
    marginTop: 0,
    height: 12,
    marginBottom: 0,
    marginLeft: 0,
    width: 12,
    minWidth: 12,
    marginRight: 0,
  },
  flex1: {
    flexDirection: "row",
  },
  flex1_layout: {
    overflow: "visible",
    marginTop: 44,
    marginBottom: 0,
    marginLeft: 23.5,
    flexGrow: 1,
    marginRight: 2,
  },
  flex1_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 143,
  },
  group11: {
    width: "100%",
  },
  group11_layout: {
    overflow: "visible",
    marginTop: 0,
    marginBottom: 15,
    minHeight: 15,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  contact_details_box_layout: {
    position: "absolute",
    top: -143,
    height: 21,
    width: 129,
    right: -76,
  },
  contact_details_box: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text_body_box_layout: {
    marginTop: 0,
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
  flex1_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 24.5,
  },
  flex1_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 167,
  },
  group12: {
    width: "100%",
  },
  group12_layout: {
    overflow: "visible",
    marginTop: 0,
    marginBottom: 0,
    minHeight: 30,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  decorator_layout1: {
    position: "absolute",
    top: -3,
    height: 20,
    left: -191,
    width: 24,
  },
  paragraph_body_box_layout2: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  flex2: {
    flexDirection: "row",
  },
  flex2_layout: {
    overflow: "visible",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 39,
    flexGrow: 1,
    marginRight: 39,
  },
  flex2_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 73,
  },
  cover_group: {
    width: "100%",
    backgroundColor: "#66f136ff",
    borderRadius: 6,
  },
  cover_group_layout: {
    overflow: "visible",
    marginTop: 0,
    marginBottom: 1,
    minHeight: 27,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  click_here_box_layout: {
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 3.5,
    flexGrow: 1,
    marginRight: 5.5,
  },
  click_here_box: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  flex2_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 121,
  },
  cover_group_layout1: {
    overflow: "visible",
    marginTop: 1,
    marginBottom: 0,
    minHeight: 27,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  group13: {
    width: "100%",
  },
  group13_layout: {
    overflow: "visible",
    marginTop: 8,
    marginBottom: 0,
    minHeight: 21,
    marginLeft: "auto",
    width: 128,
    minWidth: 128,
    marginRight: 105,
  },
  group14: {
    width: "100%",
  },
  group14_layout: {
    position: "absolute",
    overflow: "visible",
    top: 2,
    height: 17,
    left: -22,
    width: 16,
  },
  line_layout2: {
    position: "absolute",
    top: -3.5,
    height: 1,
    left: -105,
    right: -239,
  },
  img: {
    resizeMode: "cover",
  },
  img_layout: {
    marginTop: 0,
    height: 17,
    marginLeft: 0,
    width: 16,
    minWidth: 16,
  },
  highlights_box_layout1: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  group15: {
    width: "100%",
  },
  group15_layout: {
    overflow: "visible",
    marginTop: 0,
    marginBottom: 0,
    minHeight: 217,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  group16: {
    width: "100%",
  },
  group16_layout: {
    position: "absolute",
    overflow: "visible",
    top: -187,
    height: 14,
    left: 61.33154296875,
    right: 81.66845703125,
  },
  small_text_body_box1_layout: {
    position: "absolute",
    top: -20,
    height: 14,
    left: -7.039306640625,
    right: -49.960693359375,
  },
  small_text_body_box1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  txt: {
    color: "#000000ff",
    textAlign: "left",
    letterSpacing: 0,
    lineHeight: 14.399999999999999,
    fontSize: 12,
    fontWeight: "400",
    fontStyle: "normal",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  txt_box: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  group17: {
    width: "100%",
  },
  group17_layout: {
    position: "absolute",
    overflow: "visible",
    height: 14,
    bottom: -22,
    left: -16.090087890625,
    right: 34.090087890625,
  },
  icon_layout3: {
    position: "absolute",
    top: 0,
    height: 12,
    left: -41.230224609375,
    width: 12.07,
  },
  txt: {
    color: "#000000ff",
    textAlign: "left",
    letterSpacing: 0,
    lineHeight: 14.399999999999999,
    fontSize: 12,
    fontWeight: "400",
    fontStyle: "normal",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  group18: {
    width: "100%",
  },
  group18_layout: {
    position: "absolute",
    overflow: "visible",
    height: 20,
    bottom: -54,
    width: 28,
    right: -18.758544921875,
  },
  group19: {
    width: "100%",
  },
  group19_layout: {
    position: "absolute",
    overflow: "visible",
    top: -5,
    height: 25,
    left: -137,
    width: 13.39,
  },
  icon_layout4: {
    position: "absolute",
    top: 3,
    height: 21.87,
    width: 21.88,
    right: -72.48535346984863,
  },
  img_layout1: {
    marginTop: 0,
    height: 25,
    marginLeft: 0,
    width: 13.39,
    minWidth: 13.39,
  },
  img_layout2: {
    marginTop: 0,
    height: 20,
    marginLeft: 0,
    width: 28,
    minWidth: 28,
  },
  group20: {
    width: "100%",
  },
  group20_layout: {
    position: "absolute",
    overflow: "visible",
    height: 1,
    bottom: -24.5,
    left: -61.33154296875,
    right: -81.66845703125,
  },
  line_layout3: {
    position: "absolute",
    top: -81,
    height: 1,
    left: 0,
    right: 0,
  },
  rect: {
    width: "100%",
    backgroundColor: "#000000ff",
  },
  rect_layout: {
    marginTop: 0,
    height: 1,
    marginLeft: 0,
    width: 360,
    minWidth: 360,
  },
  group21: {
    width: "100%",
  },
  group21_layout: {
    position: "absolute",
    overflow: "visible",
    height: 71,
    bottom: -126.5,
    left: 169.5,
    width: 1,
  },
  group22: {
    width: "100%",
  },
  group22_layout: {
    position: "absolute",
    overflow: "visible",
    top: -94,
    height: 14,
    left: -150.7921848297119,
    width: 41,
  },
  small_text_body_box_layout1: {
    position: "absolute",
    top: -20,
    height: 14,
    left: -0.011236190795898438,
    right: 4.011236190795898,
  },
  txt2: {
    color: "#000000ff",
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 14.399999999999999,
    fontSize: 12,
    fontWeight: "700",
    fontStyle: "normal",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  txt_box2: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  img3: {
    resizeMode: "cover",
    borderStyle: "solid",
    borderColor: "#000000ff",
  },
  img3_layout: {
    marginTop: 0,
    height: 71,
    marginLeft: 0,
    width: 1,
    minWidth: 1,
  },
  image1: {
    resizeMode: "contain",
    borderRadius: 25,
  },
  image1_layout: {
    marginTop: 0,
    height: 217,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
});
