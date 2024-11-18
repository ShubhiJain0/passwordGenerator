import { create } from "zustand";

type PasswordState = {
  length: number;
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUpperCase: boolean;
  includeLowerCase: boolean;
  generatedPassword: string;
  setLength: (length: number) => void;
  toggleNumbers: () => void;
  toggleSymbols: () => void;
  toggleUpperCase: () => void;
  toggleLowerCase: () => void;
  generatePassword: () => void;
};

const usePasswordStore = create<PasswordState>((set) => ({
  length: 12,
  includeNumbers: true,
  includeSymbols: false,
  includeUpperCase: true,
  includeLowerCase: true,
  generatedPassword: "",
  setLength: (length: number) => set({ length }),
  toggleNumbers: () =>
    set((state) => ({ includeNumbers: !state.includeNumbers })),
  toggleSymbols: () =>
    set((state) => ({ includeSymbols: !state.includeSymbols })),
  toggleUpperCase: () =>
    set((state) => ({ includeUpperCase: !state.includeUpperCase })),
  toggleLowerCase: () =>
    set((state) => ({ includeLowerCase: !state.includeLowerCase })),
  generatePassword: () =>
    set((state) => {
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()_+][{}";
      const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
      const lowerCase = "qwertyuiopasdfghjklzxcvbnm";

      let characters = "";

      if (state.includeNumbers) characters += numbers;
      if (state.includeSymbols) characters += symbols;
      if (state.includeUpperCase) characters += upperCase;
      if (state.includeLowerCase) characters += lowerCase;

      if (!characters) {
        return {
          generatedPassword: "Please enable at least one character type.",
        };
      }

      let password = "";

      for (let i = 0; i < state.length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
      }

      return { generatedPassword: password };
    }),
}));

export default usePasswordStore;
