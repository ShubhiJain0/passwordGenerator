import { create } from "zustand";

interface formField {
  label : string;
  type : 'text' | 'password' | 'number' | 'textarea' | 'date' | 'file';
  value : string;
}

interface FormStoreState {
  formFields : formField[];
  addField : (field : formField) =>void;
  removeField : (index : number) =>void;
  updateField : (index :number, updatedField : formField) =>void;
  resetForm : () =>void;
}

const useFormStore = create<FormStoreState>((set)=>({
  formFields : [],

  addField : (field : formField) =>set((state)=>({formFields : [...state.formFields , field]})),

  removeField : (index: number) =>set((state)=>({formFields: state.formFields.filter((_, i)=> i!== index)})),

updateField : (index :number, updatedField : formField) =>set((state)=>({
  formFields : state.formFields.map((field , i)=> i===index ? updatedField : field)
})),

resetForm : ()=>set(() =>({
  formFields : [],
})),

}))

export default useFormStore;