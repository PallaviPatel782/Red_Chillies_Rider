import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "../../../i18n.config";
import { applyRTLSettings } from "../../utils/Language/languageHelpers";
import { Alert } from "react-native";
import RNRestart from "react-native-restart"; 

const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang: "en",
  },
  reducers: {
    setLanguage: (state, action) => {
      const lang = action.payload;
      state.lang = lang;

      i18n.changeLanguage(lang);
      AsyncStorage.setItem("appLanguage", lang);

      applyRTLSettings(lang).then((needReload) => {
        if (needReload) {
          RNRestart.restart(); 
        }
      });
    },

    setInitialLanguage: (state, action) => {
      const lang = action.payload;
      state.lang = lang;
      i18n.changeLanguage(lang);
      applyRTLSettings(lang);
    },
  },
});

export const { setLanguage, setInitialLanguage } = languageSlice.actions;
export default languageSlice.reducer;
