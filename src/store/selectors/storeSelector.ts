import { FormState } from "../slices/initialDataSlice";
import { RootState } from "../store";

export const formStateSelector = (state: RootState): FormState => state.form;