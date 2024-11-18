import React, { ChangeEvent, useState } from "react";
import useFormStore from "./useStore3";
import FormField from "./FormField";

interface NewField {
  label: string;
  type: "text" | "number" | "password" | "textarea" | "date" | "file";
  value: string;
}

const FormBuilder = () => {
  const { formFields, addField, removeField, updateField, resetForm } =
    useFormStore();

  const [newField, setNewField] = useState<NewField>({
    label: "",
    type: "text",
    value: "",
  });

  const handleAddField = () => {
    addField(newField);
    setNewField({ label: "", type: "text", value: "" });
  };

  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewField((prev) => ({ ...prev, [name]: value }));
  };

  const handleFieldUpdate = (index: number, updatedField: NewField) => {
    updateField(index, updatedField);
  };

  const handleFieldRemove = (index: number) => {
    removeField(index);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl text-black font-bold mb-4 text-center">
        Form Builder
      </h1>
      <div className="flex flex-col mb-4">
        <input
          type="text"
          name="label"
          className="border border-gray-700 outline-none px-4 py-2 rounded-md"
          placeholder="Field Label"
          value={newField.label}
          onChange={handleFieldChange}
        />

        <select
          name="type"
          value={newField.type}
          onChange={handleFieldChange} // Fixed this line
          className="p-2 mb-2 mt-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="password">Password</option>
          <option value="textarea">Textarea</option>
          <option value="file">File</option>
          <option value="date">Date</option>
        </select>
        <div className="flex justify-between">
          <button
            className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleAddField}
          >
            Add Field
          </button>

          <button
            className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
            onClick={resetForm}
          >
            Reset Form
          </button>
        </div>
      </div>
      <form>
        {formFields.map((field, index) => (
          <FormField
            key={index}
            field={field}
            index={index} // Pass the index
            onUpdate={handleFieldUpdate}
            onRemove={handleFieldRemove}
          />
        ))}
      </form>
    </div>
  );
};

export default FormBuilder;
