import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/slices/languageSlice";
import { useTranslation } from "react-i18next";
import { SH, SF, SW } from "../utils/Responsiveness/Dimensions";
import Colors from "../utils/Colors/Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface Props {
    visible: boolean;
    onClose: () => void;
}

const LanguageModal: React.FC<Props> = ({ visible, onClose }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const selectLanguage = (lang: string) => {
        dispatch(setLanguage(lang));
        onClose();
    };

    return (
        <Modal visible={visible} transparent animationType="fade">
            <View
                style={{
                    flex: 1,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        width: "100%",
                        backgroundColor: Colors.white,
                        borderRadius: SW(15),
                        paddingVertical: SH(20),
                        paddingHorizontal: SW(20),
                        elevation: 5,
                    }}
                >
                    <Text
                        style={{
                            fontSize: SF(18),
                            textAlign: "center",
                            marginBottom: SH(15),
                            color: Colors.black,
                            fontFamily: "Ubuntu-Medium",
                        }}
                    >
                        {t("selectLang")}
                    </Text>

                    <TouchableOpacity
                        style={{
                            paddingVertical: SH(12),
                        }}
                        onPress={() => selectLanguage("en")}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: SF(16),
                                color: Colors.black,
                                fontFamily: "Ubuntu-Regular",
                            }}
                        >
                            {t("english")}
                        </Text>
                    </TouchableOpacity>

                    <View style={{ height: SH(1), backgroundColor: Colors.lightGray }} />

                    <TouchableOpacity
                        style={{
                            paddingVertical: SH(12),
                        }}
                        onPress={() => selectLanguage("ar")}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: SF(16),
                                color: Colors.black,
                                fontFamily: "Ubuntu-Regular",
                            }}
                        >
                            {t("arabic")}
                        </Text>
                    </TouchableOpacity>

                    <View style={{ height: SH(1), backgroundColor: Colors.lightGray }} />

                    <TouchableOpacity
                        onPress={onClose}
                        style={{
                            marginTop: SH(10),
                            alignSelf: "center",
                        }}
                    >
                        <MaterialCommunityIcons
                            name="close"
                            size={SF(26)}
                            color={Colors.red}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default LanguageModal;
