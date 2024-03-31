import { configureStore } from "@reduxjs/toolkit";
import contact from "./contactUsSlice";
import faqs from "./faqsSlice";
import privacies from "./privaciesSlice";

export const store = configureStore({
  reducer: { contact, faqs, privacies },
});
