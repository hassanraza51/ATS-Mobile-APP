/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";
import { Px } from "./posize";

export default function Menu(props) {
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
        <View style={[styles.flex, styles.flex_layout1]}>
          <View style={styles.flex1_col}>
            <ImageBackground
              style={[styles.icon, styles.icon_layout1]}
              source={require("../assets/097262dbfd883f4a01d0fadddb34ca36.png")}
            />
          </View>
          <View style={styles.flex1_space} />
          <View style={styles.flex1_col1}>
            <View style={[styles.home_box, styles.home_box_layout]}>
              <Text style={styles.home} ellipsizeMode={"clip"}>
                {"Home"}
              </Text>
            </View>
          </View>
          <View style={styles.flex1_space1} />
          <View style={styles.flex1_col2}>
            <ImageBackground
              style={[styles.img, styles.img_layout1]}
              source={require("../assets/07cc25b29af7754adfb27ed015e21a66.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.line, styles.line_layout1]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout2]}>
          <View style={styles.flex2_col}>
            <ImageBackground
              style={[styles.icon, styles.icon_layout2]}
              source={require("../assets/4b1de6d54873c643c9e6413302c41157.png")}
            />
          </View>
          <View style={styles.flex2_space} />
          <View style={styles.flex2_col1}>
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
          <View style={styles.flex2_space1} />
          <View style={styles.flex2_col2}>
            <ImageBackground
              style={[styles.img, styles.img_layout2]}
              source={require("../assets/07cc25b29af7754adfb27ed015e21a66.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.line, styles.line_layout2]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout3]}>
          <View style={styles.flex3_col}>
            <ImageBackground
              style={[styles.icon, styles.icon_layout3]}
              source={require("../assets/32214d171ca8cf5f9abb28448a72183e.png")}
            />
          </View>
          <View style={styles.flex3_space} />
          <View style={styles.flex3_col1}>
            <View
              style={[
                styles.small_text_body_box,
                styles.small_text_body_box_layout,
              ]}
            >
              <Text style={styles.small_text_body} ellipsizeMode={"clip"}>
                {"Research & Development"}
              </Text>
            </View>
          </View>
          <View style={styles.flex3_space1} />
          <View style={styles.flex3_col2}>
            <ImageBackground
              style={[styles.img, styles.img_layout3]}
              source={require("../assets/07cc25b29af7754adfb27ed015e21a66.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.line, styles.line_layout3]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout4]}>
          <View style={styles.flex4_col}>
            <ImageBackground
              style={[styles.icon, styles.icon_layout4]}
              source={require("../assets/ed5bbd18197af5563c350b9bd41c0ca0.png")}
            />
          </View>
          <View style={styles.flex4_space} />
          <View style={styles.flex4_col1}>
            <View
              style={[
                styles.companty_info_box,
                styles.companty_info_box_layout,
              ]}
            >
              <Text style={styles.companty_info} ellipsizeMode={"clip"}>
                {"Companty Info"}
              </Text>
            </View>
          </View>
          <View style={styles.flex4_space1} />
          <View style={styles.flex4_col}>
            <ImageBackground
              style={[styles.img, styles.img_layout4]}
              source={require("../assets/5535576975772c60e1b67e228d36075d.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.line, styles.line_layout4]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout5]}>
          <View style={styles.flex5_col}>
            <ImageBackground
              style={[styles.img, styles.img_layout5]}
              source={require("../assets/e70eda847a83476b030e3be77d24f2de.png")}
            />
          </View>
          <View style={styles.flex5_space} />
          <View style={styles.flex5_col1}>
            <View style={[styles.about_us_box, styles.about_us_box_layout]}>
              <Text style={styles.about_us} ellipsizeMode={"clip"}>
                {"About Us"}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.line, styles.line_layout5]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout6]}>
          <View style={styles.flex6_col}>
            <ImageBackground
              style={[styles.icon, styles.icon_layout5]}
              source={require("../assets/9598eeacdad6f768fbe0fcbef263f153.png")}
            />
          </View>
          <View style={styles.flex6_space} />
          <View style={styles.flex6_col1}>
            <View
              style={[styles.the_company_box, styles.the_company_box_layout]}
            >
              <Text style={styles.the_company} ellipsizeMode={"clip"}>
                {"The Company"}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.line, styles.line_layout6]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout7]}>
          <View style={styles.flex7_col}>
            <ImageBackground
              style={[styles.img, styles.img_layout6]}
              source={require("../assets/2e20d6a3de9c15147338c1ad27077088.png")}
            />
          </View>
          <View style={styles.flex7_space} />
          <View style={styles.flex7_col1}>
            <View style={[styles.group, styles.group_layout]}>
              <View style={[styles.line, styles.line_layout7]} />
              <View
                style={[
                  styles.company_philosophy_box,
                  styles.company_philosophy_box_layout,
                ]}
              >
                <Text style={styles.company_philosophy} ellipsizeMode={"clip"}>
                  {"Company Philosophy"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.line, styles.line_layout8]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.group, styles.group_layout2]}>
          <ImageBackground
            style={[styles.group, styles.group_layout1]}
            source={require("../assets/43df9bfc8ac1c278060ecfa946ce40a4.png")}
            resizeMode="contain"
          >
            <View
              style={[
                styles.small_paragraph_body_box,
                styles.small_paragraph_body_box_layout,
              ]}
            >
              <Text style={styles.small_paragraph_body} ellipsizeMode={"clip"}>
                {"Founder’s Message"}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.group, styles.group_layout6]}>
          <View style={[styles.group, styles.group_layout5]}>
            <Px.ImageBackground
              x="1fr 6.25px 1fr"
              y="-9.58px 5.75px 1fr"
              absolute
              style={styles.group5}
              source={require("../assets/fb989d958a8a800e873f2be01963961c.png")}
              resizeMode="contain"
            >
              <ImageBackground
                style={[styles.group, styles.group_layout4]}
                source={require("../assets/b6ca8c3f888733e75037d577dc58ee72.png")}
                resizeMode="contain"
              >
                <ImageBackground
                  style={[styles.group, styles.group_layout3]}
                  source={require("../assets/b4277aadfa9c1d6c52cbe1292dad9fb2.png")}
                  resizeMode="contain"
                >
                  <View
                    style={[
                      styles.small_text_body_box,
                      styles.small_text_body_box_layout1,
                    ]}
                  >
                    <Text style={styles.small_text_body} ellipsizeMode={"clip"}>
                      {"From the Desk of C.E.O"}
                    </Text>
                  </View>
                </ImageBackground>
              </ImageBackground>
            </Px.ImageBackground>

            <ImageBackground
              style={[styles.img, styles.img_layout7]}
              source={require("../assets/6ed1aff950aa39db5898fac8b6638856.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.line, styles.line_layout9]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout8]}>
          <View style={styles.flex8_col}>
            <ImageBackground
              style={[styles.group8, styles.group8_layout]}
              source={require("../assets/42a2dc2f158761a6c2773b1620cd3f03.png")}
              resizeMode="contain"
            >
              <View style={[styles.group, styles.group_layout7]}>
                <ImageBackground
                  style={[styles.icon, styles.icon_layout6]}
                  source={require("../assets/fed4972f72a0ba73632e306da443ec48.png")}
                />
                <ImageBackground
                  style={[styles.img, styles.img_layout8]}
                  source={require("../assets/7c41a48072d6d72e68e58b993d993ba1.png")}
                />
              </View>
            </ImageBackground>
          </View>
          <View style={styles.flex8_space} />
          <View style={styles.flex8_col1}>
            <View
              style={[
                styles.small_text_body_box,
                styles.small_text_body_box_layout2,
              ]}
            >
              <Text style={styles.small_text_body} ellipsizeMode={"clip"}>
                {"News & Events"}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.line, styles.line_layout10]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.group, styles.group_layout10]}>
          <ImageBackground
            style={[styles.group, styles.group_layout9]}
            source={require("../assets/a2cd7582df4edcb85418c715a15ace12.png")}
            resizeMode="contain"
          >
            <View style={[styles.group, styles.group_layout8]}>
              <View style={[styles.line, styles.line_layout11]} />
              <Px.View
                x="1fr 240fr 1fr"
                y="0px 24fr 1fr"
                style={styles.small_paragraph_body_box1}
              >
                <Text
                  style={styles.small_paragraph_body}
                  ellipsizeMode={"clip"}
                >
                  {"Corporate Social Responsibility"}
                </Text>
              </Px.View>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout9]}>
          <View style={styles.flex9_col}>
            <ImageBackground
              style={[styles.img, styles.img_layout9]}
              source={require("../assets/0d0ac89f1c08be8eeee54492f72c5db2.png")}
            />
          </View>
          <View style={styles.flex9_space} />
          <View style={styles.flex9_col1}>
            <View style={[styles.products_box, styles.products_box_layout]}>
              <Text style={styles.products} ellipsizeMode={"clip"}>
                {"Products"}
              </Text>
            </View>
          </View>
          <View style={styles.flex9_space1} />
          <View style={styles.flex9_col2}>
            <ImageBackground
              style={[styles.img, styles.img_layout10]}
              source={require("../assets/5535576975772c60e1b67e228d36075d.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.line, styles.line_layout12]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout10]}>
          <View style={styles.flex10_col}>
            <ImageBackground
              style={[styles.icon, styles.icon_layout7]}
              source={require("../assets/561fcac37968ef8b83fe57eceb4e9d29.png")}
            />
          </View>
          <View style={styles.flex10_space} />
          <View style={styles.flex10_col1}>
            <View
              style={[
                styles.chemical_division_box,
                styles.chemical_division_box_layout,
              ]}
            >
              <Text style={styles.chemical_division} ellipsizeMode={"clip"}>
                {"Chemical Division"}
              </Text>
            </View>
          </View>
          <View style={styles.flex10_space1} />
          <View style={styles.flex10_col2}>
            <ImageBackground
              style={[styles.img, styles.img_layout11]}
              source={require("../assets/5535576975772c60e1b67e228d36075d.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.line, styles.line_layout13]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout11]}>
          <View style={styles.flex11_col}>
            <ImageBackground
              style={[styles.icon, styles.icon_layout8]}
              source={require("../assets/561fcac37968ef8b83fe57eceb4e9d29.png")}
            />
          </View>
          <View style={styles.flex11_space} />
          <View style={styles.flex11_col1}>
            <View
              style={[
                styles.plastic_division_box,
                styles.plastic_division_box_layout,
              ]}
            >
              <Text style={styles.plastic_division} ellipsizeMode={"clip"}>
                {"Plastic Division"}
              </Text>
            </View>
          </View>
          <View style={styles.flex11_space1} />
          <View style={styles.flex11_col2}>
            <ImageBackground
              style={[styles.img, styles.img_layout12]}
              source={require("../assets/5535576975772c60e1b67e228d36075d.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.line, styles.line_layout14]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout12]}>
          <View style={styles.flex12_col}>
            <ImageBackground
              style={[styles.icon, styles.icon_layout9]}
              source={require("../assets/561fcac37968ef8b83fe57eceb4e9d29.png")}
            />
          </View>
          <View style={styles.flex12_space} />
          <View style={styles.flex12_col1}>
            <View
              style={[styles.geomembrane_box, styles.geomembrane_box_layout]}
            >
              <Text style={styles.geomembrane} ellipsizeMode={"clip"}>
                {"Geomembrane"}
              </Text>
            </View>
          </View>
          <View style={styles.flex12_space1} />
          <View style={styles.flex12_col2}>
            <ImageBackground
              style={[styles.img, styles.img_layout13]}
              source={require("../assets/5535576975772c60e1b67e228d36075d.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.line, styles.line_layout15]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout13]}>
          <View style={styles.flex13_col}>
            <ImageBackground
              style={[styles.icon, styles.icon_layout10]}
              source={require("../assets/561fcac37968ef8b83fe57eceb4e9d29.png")}
            />
          </View>
          <View style={styles.flex13_space} />
          <View style={styles.flex13_col1}>
            <View
              style={[
                styles.small_text_body_box,
                styles.small_text_body_box_layout3,
              ]}
            >
              <Text style={styles.small_text_body} ellipsizeMode={"clip"}>
                {"Synthetic Leather Division"}
              </Text>
            </View>
          </View>
          <View style={styles.flex13_space1} />
          <View style={styles.flex13_col2}>
            <ImageBackground
              style={[styles.img, styles.img_layout14]}
              source={require("../assets/5535576975772c60e1b67e228d36075d.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.line, styles.line_layout16]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout14]}>
          <View style={styles.flex14_col}>
            <ImageBackground
              style={[styles.img, styles.img_layout15]}
              source={require("../assets/104c5f7a2a8b53c5632d6d2bfb5a4244.png")}
            />
          </View>
          <View style={styles.flex14_space} />
          <View style={styles.flex14_col1}>
            <View style={[styles.ats_metals_box, styles.ats_metals_box_layout]}>
              <Text style={styles.ats_metals} ellipsizeMode={"clip"}>
                {"ATS Metals"}
              </Text>
            </View>
          </View>
          <View style={styles.flex14_space1} />
          <View style={styles.flex14_col2}>
            <ImageBackground
              style={[styles.img, styles.img_layout16]}
              source={require("../assets/5535576975772c60e1b67e228d36075d.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.line, styles.line_layout17]} />
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.flex, styles.flex_layout15]}>
          <View style={styles.flex15_col}>
            <ImageBackground
              style={[styles.img, styles.img_layout17]}
              source={require("../assets/e343832ba965a05da3a27542c22b64dd.png")}
            />
          </View>
          <View style={styles.flex15_space} />
          <View style={styles.flex15_col1}>
            <View style={[styles.contact_us_box, styles.contact_us_box_layout]}>
              <Text style={styles.contact_us} ellipsizeMode={"clip"}>
                {"Contact Us"}
              </Text>
            </View>
          </View>
          <View style={styles.flex15_space1} />
          <View style={styles.flex15_col2}>
            <ImageBackground
              style={[styles.img, styles.img_layout18]}
              source={require("../assets/07cc25b29af7754adfb27ed015e21a66.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.content_box_row}>
        <View style={[styles.group13, styles.group13_layout]}>
          <ImageBackground
            style={[styles.cover_group, styles.cover_group_layout]}
            source={require("../assets/c0d891425a5a79a77ca2cbb1d1ea2154.png")}
            resizeMode="contain"
          >
            <ImageBackground
              style={[styles.img, styles.img_layout19]}
              source={require("../assets/9b4c23f6c2a12848f8ae880fd758bcc1.png")}
            />
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

Menu.inStorybook = true;
Menu.fitScreen = false;
Menu.scrollHeight = 640;

const styles = StyleSheet.create({
  content_box: {
    backgroundColor: "#fbc370ff",
    overflow: "hidden",
  },
  content_box_layout: {
    overflow: "hidden",
    marginTop: 0,
    marginBottom: 0,
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
  flex_layout1: {
    overflow: "visible",
    marginTop: 12.5,
    marginBottom: 0,
    marginLeft: 7,
    flexGrow: 1,
    marginRight: 7,
  },
  flex1_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 15,
  },
  icon_layout1: {
    marginTop: 0,
    height: 15,
    marginBottom: 2.63,
    marginLeft: 0,
    width: 15,
    minWidth: 15,
    marginRight: 0,
  },
  flex1_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 10,
  },
  flex1_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 35,
  },
  home_box_layout: {
    marginTop: 2,
    marginBottom: 10.63,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  home_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  flex1_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 269,
  },
  flex1_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 10.09,
  },
  img_layout1: {
    marginTop: 2,
    height: 15.63,
    marginBottom: 0,
    marginLeft: 0,
    width: 10.09,
    minWidth: 10.09,
    marginRight: 0,
  },
  line_layout1: {
    marginTop: 5.43,
    height: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  flex_layout2: {
    overflow: "visible",
    marginTop: 8.94,
    marginBottom: 0,
    marginLeft: 7,
    flexGrow: 1,
    marginRight: 7,
  },
  flex2_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 15,
  },
  icon_layout2: {
    marginTop: 0,
    height: 15,
    marginBottom: 1.63,
    marginLeft: 0,
    width: 15,
    minWidth: 15,
    marginRight: 0,
  },
  flex2_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 10,
  },
  flex2_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 79,
  },
  quality_control_box_layout: {
    marginTop: 2,
    marginBottom: 9.63,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  quality_control_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  flex2_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 225,
  },
  flex2_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 10.09,
  },
  img_layout2: {
    marginTop: 1,
    height: 15.63,
    marginBottom: 0,
    marginLeft: 0,
    width: 10.09,
    minWidth: 10.09,
    marginRight: 0,
  },
  line_layout2: {
    marginTop: 5.43,
    height: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  flex_layout3: {
    overflow: "visible",
    marginTop: 9.94,
    marginBottom: 0,
    marginLeft: 7,
    flexGrow: 1,
    marginRight: 7,
  },
  flex3_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 15,
  },
  icon_layout3: {
    marginTop: 0,
    height: 15,
    marginBottom: 0.63,
    marginLeft: 0,
    width: 15,
    minWidth: 15,
    marginRight: 0,
  },
  flex3_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 10,
  },
  flex3_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 134,
  },
  small_text_body_box_layout: {
    marginTop: 0,
    marginBottom: 8.63,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  small_text_body_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  flex3_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 170,
  },
  flex3_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 10.09,
  },
  img_layout3: {
    marginTop: 0,
    height: 15.63,
    marginBottom: 0,
    marginLeft: 0,
    width: 10.09,
    minWidth: 10.09,
    marginRight: 0,
  },
  line_layout3: {
    marginTop: 6.43,
    height: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  flex_layout4: {
    overflow: "visible",
    marginTop: 4.94,
    marginBottom: 0,
    marginLeft: 7,
    flexGrow: 1,
    marginRight: 7,
  },
  flex4_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 15,
  },
  icon_layout4: {
    marginTop: 0,
    height: 15,
    marginBottom: 0,
    marginLeft: 0,
    width: 15,
    minWidth: 15,
    marginRight: 0,
  },
  flex4_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 10,
  },
  flex4_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 79,
  },
  companty_info_box_layout: {
    marginTop: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  companty_info_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  flex4_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 222,
  },
  img_layout4: {
    marginTop: 4,
    height: 10,
    marginBottom: 1,
    marginLeft: 0,
    width: 15,
    minWidth: 15,
    marginRight: 0,
  },
  line_layout4: {
    marginTop: 10.06,
    height: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  flex_layout5: {
    overflow: "visible",
    marginTop: 6.94,
    marginBottom: 0,
    marginLeft: 32,
    flexGrow: 1,
    marginRight: 32,
  },
  flex5_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 5,
  },
  img_layout5: {
    marginTop: 1,
    height: 12,
    marginBottom: 1,
    marginLeft: 0,
    width: 5,
    minWidth: 5,
    marginRight: 0,
  },
  flex5_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 15,
  },
  flex5_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 106,
  },
  about_us_box_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  about_us_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  line_layout5: {
    marginTop: 6.14,
    height: 1,
    marginBottom: 0,
    marginLeft: 25,
    flexGrow: 1,
    marginRight: 0,
  },
  flex_layout6: {
    overflow: "visible",
    marginTop: 6.86,
    marginBottom: 0,
    marginLeft: 25,
    flexGrow: 1,
    marginRight: 25,
  },
  flex6_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 20,
  },
  icon_layout5: {
    marginTop: 0,
    height: 20,
    marginBottom: 3,
    marginLeft: 0,
    width: 20,
    minWidth: 20,
    marginRight: 0,
  },
  flex6_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 7,
  },
  flex6_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 120,
  },
  the_company_box_layout: {
    marginTop: 4,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  the_company_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  line_layout6: {
    marginTop: 1.14,
    height: 1,
    marginBottom: 0,
    marginLeft: 25,
    flexGrow: 1,
    marginRight: 0,
  },
  flex_layout7: {
    overflow: "visible",
    marginTop: 4.86,
    marginBottom: 0,
    marginLeft: 28,
    flexGrow: 1,
    marginRight: 28,
  },
  flex7_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 15,
  },
  img_layout6: {
    marginTop: 0,
    height: 20,
    marginBottom: 3,
    marginLeft: 0,
    width: 15,
    minWidth: 15,
    marginRight: 0,
  },
  flex7_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 12,
  },
  flex7_col1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 151,
  },
  group: {
    width: "100%",
  },
  group_layout: {
    overflow: "visible",
    marginTop: 6,
    marginBottom: 0,
    minHeight: 17,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  line_layout7: {
    position: "absolute",
    height: 1,
    bottom: -37.140167236328125,
    left: -30.001220703125,
    right: -154,
  },
  company_philosophy_box_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  company_philosophy_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  line_layout8: {
    marginTop: 3.14,
    height: 1,
    marginBottom: 0,
    marginLeft: 25,
    flexGrow: 1,
    marginRight: 0,
  },
  group_layout2: {
    overflow: "visible",
    marginTop: 6.86,
    height: 27,
    marginBottom: 0,
    marginLeft: 25,
    flexGrow: 1,
    marginRight: 0,
  },
  group_layout1: {
    position: "absolute",
    overflow: "visible",
    top: 0,
    height: 20,
    left: 1.001220703125,
    width: 19,
  },
  small_paragraph_body_box_layout: {
    position: "absolute",
    height: 23,
    bottom: -7,
    width: 200,
    right: -210,
  },
  small_paragraph_body_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  group_layout6: {
    overflow: "visible",
    marginTop: 1.4,
    marginBottom: 0,
    minHeight: 22.6,
    marginLeft: 26.13,
    flexGrow: 1,
    marginRight: 100,
  },
  group_layout5: {
    overflow: "visible",
    marginTop: 9.58,
    marginBottom: 9.67,
    minHeight: 3.35,
    marginLeft: 0,
    width: 18.75,
    minWidth: 18.75,
  },
  group5: {
    width: "100%",
    flexGrow: 1,
  },
  group_layout4: {
    position: "absolute",
    overflow: "visible",
    height: 5.27,
    bottom: -6.2291460037231445,
    left: -3.125,
    right: -3.125,
  },
  group_layout3: {
    position: "absolute",
    overflow: "visible",
    height: 5.75,
    bottom: -5.2708539962768555,
    left: -1.5625,
    right: -1.5625,
  },
  small_text_body_box_layout1: {
    position: "absolute",
    top: -6.895843505859375,
    height: 18,
    width: 205,
    right: -216.6875,
  },
  img_layout7: {
    marginTop: 0,
    height: 3.35,
    marginLeft: 0,
    width: 18.75,
    minWidth: 18.75,
  },
  line_layout9: {
    marginTop: 0.14,
    height: 1,
    marginBottom: 0,
    marginLeft: 25,
    flexGrow: 1,
    marginRight: 0,
  },
  flex_layout8: {
    overflow: "visible",
    marginTop: 5.86,
    marginBottom: 0,
    marginLeft: 24,
    flexGrow: 1,
    marginRight: 24,
  },
  flex8_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 23,
  },
  group8: {
    width: "100%",
    overflow: "hidden",
  },
  group8_layout: {
    overflow: "hidden",
    marginTop: 0,
    marginBottom: 3,
    minHeight: 20,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  group_layout7: {
    overflow: "visible",
    marginTop: 10.07,
    marginBottom: 5.58,
    minHeight: 4.34,
    marginLeft: 7.61,
    width: 5.02,
    minWidth: 5.02,
  },
  icon_layout6: {
    position: "absolute",
    top: -2.267181396484375,
    height: 8.42,
    left: -5.5919189453125,
    width: 8.29,
  },
  img_layout8: {
    marginTop: 0,
    height: 4.34,
    marginLeft: 0,
    width: 5.02,
    minWidth: 5.02,
  },
  flex8_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 8,
  },
  flex8_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 146,
  },
  small_text_body_box_layout2: {
    marginTop: 5,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  line_layout10: {
    marginTop: 5.14,
    height: 1,
    marginBottom: 0,
    marginLeft: 25,
    flexGrow: 1,
    marginRight: 0,
  },
  group_layout10: {
    overflow: "visible",
    marginTop: 5.86,
    marginBottom: 0,
    minHeight: 31,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  group_layout9: {
    overflow: "visible",
    marginTop: 0,
    marginBottom: 7,
    minHeight: 24,
    marginLeft: 26,
    width: 21,
    minWidth: 21,
  },
  group_layout8: {
    position: "absolute",
    overflow: "visible",
    height: 24,
    bottom: -7,
    width: 240,
    right: -248,
  },
  line_layout11: {
    position: "absolute",
    height: 1,
    bottom: 1.939300537109375,
    left: -55,
    right: -65,
  },
  small_paragraph_body: {
    color: "#000000ff",
    textAlign: "justify",
    letterSpacing: 0,
    lineHeight: 14.399999999999999,
    fontSize: 12,
    fontWeight: "400",
    fontStyle: "normal",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  small_paragraph_body_box1: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  flex_layout9: {
    overflow: "visible",
    marginTop: 9,
    marginBottom: 0,
    marginLeft: 7,
    flexGrow: 1,
    marginRight: 7,
  },
  flex9_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 21,
  },
  img_layout9: {
    marginTop: 0,
    height: 19,
    marginBottom: 2,
    marginLeft: 0,
    width: 21,
    minWidth: 21,
    marginRight: 0,
  },
  flex9_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 8,
  },
  flex9_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 118,
  },
  products_box_layout: {
    marginTop: 3,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  products_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  flex9_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 179,
  },
  flex9_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 15,
  },
  img_layout10: {
    marginTop: 4,
    height: 10,
    marginBottom: 7,
    marginLeft: 0,
    width: 15,
    minWidth: 15,
    marginRight: 0,
  },
  line_layout12: {
    marginTop: 4.06,
    height: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  flex_layout10: {
    overflow: "visible",
    marginTop: 3.94,
    marginBottom: 0,
    marginLeft: 28,
    flexGrow: 1,
    marginRight: 12,
  },
  flex10_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 19,
  },
  icon_layout7: {
    marginTop: 0,
    height: 19,
    marginBottom: 0,
    marginLeft: 0,
    width: 19,
    minWidth: 19,
    marginRight: 0,
  },
  flex10_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 8,
  },
  flex10_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 96,
  },
  chemical_division_box_layout: {
    marginTop: 5,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  chemical_division_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  flex10_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 182,
  },
  flex10_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 15,
  },
  img_layout11: {
    marginTop: 7,
    height: 10,
    marginBottom: 2,
    marginLeft: 0,
    width: 15,
    minWidth: 15,
    marginRight: 0,
  },
  line_layout13: {
    marginTop: 3.14,
    height: 1,
    marginBottom: 0,
    marginLeft: 25,
    flexGrow: 1,
    marginRight: 0,
  },
  flex_layout11: {
    overflow: "visible",
    marginTop: 0.86,
    marginBottom: 0,
    marginLeft: 28,
    flexGrow: 1,
    marginRight: 12,
  },
  flex11_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 19,
  },
  icon_layout8: {
    marginTop: 0,
    height: 19,
    marginBottom: 0,
    marginLeft: 0,
    width: 19,
    minWidth: 19,
    marginRight: 0,
  },
  flex11_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 8,
  },
  flex11_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 82,
  },
  plastic_division_box_layout: {
    marginTop: 5,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  plastic_division_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  flex11_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 196,
  },
  flex11_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 15,
  },
  img_layout12: {
    marginTop: 7,
    height: 10,
    marginBottom: 2,
    marginLeft: 0,
    width: 15,
    minWidth: 15,
    marginRight: 0,
  },
  line_layout14: {
    marginTop: 2.14,
    height: 1,
    marginBottom: 0,
    marginLeft: 25,
    flexGrow: 1,
    marginRight: 0,
  },
  flex_layout12: {
    overflow: "visible",
    marginTop: 1.86,
    marginBottom: 0,
    marginLeft: 28,
    flexGrow: 1,
    marginRight: 12,
  },
  flex12_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 19,
  },
  icon_layout9: {
    marginTop: 0,
    height: 19,
    marginBottom: 0,
    marginLeft: 0,
    width: 19,
    minWidth: 19,
    marginRight: 0,
  },
  flex12_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 8,
  },
  flex12_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 79,
  },
  geomembrane_box_layout: {
    marginTop: 4,
    marginBottom: 1,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  geomembrane_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  flex12_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 199,
  },
  flex12_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 15,
  },
  img_layout13: {
    marginTop: 6,
    height: 10,
    marginBottom: 3,
    marginLeft: 0,
    width: 15,
    minWidth: 15,
    marginRight: 0,
  },
  line_layout15: {
    marginTop: 0.14,
    height: 1,
    marginBottom: 0,
    marginLeft: 25,
    flexGrow: 1,
    marginRight: 0,
  },
  flex_layout13: {
    overflow: "visible",
    marginTop: 0.86,
    marginBottom: 0,
    marginLeft: 28,
    flexGrow: 1,
    marginRight: 12,
  },
  flex13_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 19,
  },
  icon_layout10: {
    marginTop: 0,
    height: 19,
    marginBottom: 0,
    marginLeft: 0,
    width: 19,
    minWidth: 19,
    marginRight: 0,
  },
  flex13_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 8,
  },
  flex13_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 138,
  },
  small_text_body_box_layout3: {
    marginTop: 4,
    marginBottom: 1,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  flex13_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 140,
  },
  flex13_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 15,
  },
  img_layout14: {
    marginTop: 6,
    height: 10,
    marginBottom: 3,
    marginLeft: 0,
    width: 15,
    minWidth: 15,
    marginRight: 0,
  },
  line_layout16: {
    marginTop: 2.14,
    height: 1,
    marginBottom: 0,
    marginLeft: 25,
    flexGrow: 1,
    marginRight: 0,
  },
  flex_layout14: {
    overflow: "visible",
    marginTop: 0.86,
    marginBottom: 0,
    marginLeft: 30,
    flexGrow: 1,
    marginRight: 12,
  },
  flex14_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 17,
  },
  img_layout15: {
    marginTop: 0,
    height: 20,
    marginBottom: 0,
    marginLeft: 0,
    width: 17,
    minWidth: 17,
    marginRight: 0,
  },
  flex14_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 8,
  },
  flex14_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 61,
  },
  ats_metals_box_layout: {
    marginTop: 5,
    marginBottom: 1,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  ats_metals_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  flex14_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 217,
  },
  flex14_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 15,
  },
  img_layout16: {
    marginTop: 6,
    height: 10,
    marginBottom: 4,
    marginLeft: 0,
    width: 15,
    minWidth: 15,
    marginRight: 0,
  },
  line_layout17: {
    marginTop: 1.82,
    height: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  flex_layout15: {
    overflow: "visible",
    marginTop: 6.18,
    marginBottom: 0,
    marginLeft: 11,
    flexGrow: 1,
    marginRight: 11,
  },
  flex15_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 17,
  },
  img_layout17: {
    marginTop: 0,
    height: 20,
    marginBottom: 0,
    marginLeft: 0,
    width: 17,
    minWidth: 17,
    marginRight: 0,
  },
  flex15_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 6,
  },
  flex15_col1: {
    flexGrow: 0,
    flexShrink: 1,
    minWidth: 59,
  },
  contact_us_box_layout: {
    marginTop: 2,
    marginBottom: 4,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  contact_us_box: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  flex15_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 243,
  },
  flex15_col2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 10.09,
  },
  img_layout18: {
    marginTop: 2,
    height: 15.63,
    marginBottom: 2.37,
    marginLeft: 0,
    width: 10.09,
    minWidth: 10.09,
    marginRight: 0,
  },
  group13: {
    width: "100%",
    backgroundColor: "#000000ff",
  },
  group13_layout: {
    overflow: "visible",
    marginTop: 6.82,
    marginBottom: 27.18,
    minHeight: 1,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  cover_group: {
    width: "100%",
  },
  cover_group_layout: {
    position: "absolute",
    top: -248.57943725585938,
    height: 6.36,
    left: 31.1849365234375,
    width: 9.38,
  },
  img_layout19: {
    marginTop: 0.39,
    height: 2.72,
    marginLeft: 5.01,
    width: 4.12,
    minWidth: 4.12,
  },
});
