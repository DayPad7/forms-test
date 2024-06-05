// Input.jsx
import { useFormContext } from "react-hook-form";

const Generator = ({ element }) => {
  const { register } = useFormContext();
  const isRequired = element.required || false;

  return (
    <div key={element.id} className="flex flex-col w-full gap-2">
      <label htmlFor={element.id} className="font-semibold capitalize">
        {element.title}
      </label>

      {element.type === "select" ? (
        <select
          key={element.id}
          name={element.id}
          required={isRequired}
          defaultValue=""
          {...register(element.id)}
        >
          <option value="" disabled>
            {element.placeholder}
          </option>
          {element.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : element.type === "checkbox" ? (
        <div className="flex flex-row gap-3 ">
          {element.options.map((option) => (
            <label key={option.value} className="inline-flex items-center">
              <input
                type="checkbox"
                value={option.value}
                {...register(`${element.id}.${option.value}`)}
                required={isRequired}
              />
              <span className="ml-2">{option.label}</span>
            </label>
          ))}
        </div>
      ) : element.type === "textarea" ? (
        <textarea
          id={element.id}
          required={isRequired}
          className="p-5 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60"
          placeholder={element.placeholder}
          {...register(element.id)}
        />
      ) : (
        <div className="flex flex-col w-full gap-2">
          <div className="flex justify-between">
            <input
              id={element.id}
              type={element.type}
              required={isRequired}
              className="p-5 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60"
              placeholder={element.placeholder}
              {...register(element.id)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Generator;
