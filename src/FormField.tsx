import React from "react";

interface FormFieldProps {
  field: {
    label: string;
    type: "text" | "number" | "password" | "textarea" | "date" | "file";
    value: string;
  };
  index: number;
  onUpdate: (
    index: number,
    updatedField: {
      label: string;
      type: "text" | "number" | "password" | "textarea" | "date" | "file";
      value: string;
    }
  ) => void;
  onRemove: (index: number) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  field,
  onUpdate,
  onRemove,
  index,
}) => {
  // Handle change for input and textarea
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onUpdate(index, { ...field, value: e.target.value });
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onUpdate(index, { ...field, value: e.target.files[0].name }); // Store file name or path
    }
  };

  return (
    <div className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
      <label className="block font-medium mb-2">{field.label}</label>
      {field.type === "textarea" ? (
        <textarea
          value={field.value}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : field.type === "file" ? (
        <input
          type="file"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-lg"
        />
      ) : (
        <input
          type={field.type}
          value={field.value}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
      <button
        onClick={() => onRemove(index)}
        className="mt-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
      >
        Remove
      </button>
    </div>
  );
};

export default FormField;
