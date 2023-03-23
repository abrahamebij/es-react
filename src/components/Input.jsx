function FormInput(props) {
  return (
    <div className='w-full'>
    <label htmlFor={props.for}>
      <div className="mb-1.5">
        <span className="font-semibold text-black dark:text-white">
          {props.name}
        </span>
        &nbsp;
        <span className="text-primary font-bold">
          {props.required ? "*" : ""}
        </span>
      </div>
      </label>

      <input
        type={props.type}
        value={props.value}
        id={props.for}
        name={props.for}
        className={`w-full text-gray-600 dark:text-gray-400 dark:bg-slate-900 dark:border-gray-600  border border-gray-300 focus:border-gray-400 px-3 py-1 rounded-md caret-primary ${props.className}`}
        required={props.required}
        placeholder={props.placeholder}
      />
      {props.sub
        ? props.sub.map((e, i) => {
            return (
              <span className="text-tiny pt-1.5" key={i}>
                {e}
              </span>
            );
          })
        : null}
    </div>
  );
}

function Input(props) {
  return (
    <input
      type={props.type}
      value={props.value}
      name={props.name}
      className={`w-full text-gray-600 dark:text-gray-400 dark:bg-slate-900 border border-gray-300 dark:border-gray-600 focus:border-gray-400 px-3 py-1 rounded-md caret-primary ${props.className}`}
      required={props.required}
      placeholder={props.placeholder}
      ref={props.myRef}
      onChange={props.onChange}
    />
  );
}

function Area(props) {
  return (
    <div className='w-full'>
    <label htmlFor={props.for} className={`${props.className}`}>
      <div className="mb-1.5">
        <span className="font-semibold text-black dark:text-white">
          {props.name}
        </span>
        &nbsp;
        <span className="text-primary font-bold">
          {props.required ? "*" : ""}
        </span>
      </div>
    </label>

      <textarea
        id={props.for}
        name={props.for}
        className={`w-full text-gray-600 dark:text-gray-400 dark:bg-slate-900 dark:border-gray-600 border border-gray-300 focus:border-gray-400 px-3 py-1 rounded-md caret-primary h-32 lg:h-48 resize-none ${props.AreaClassName}`}
        placeholder={props.placeholder}
        minLength={props.minLength}
      >
        {props.value}
      </textarea>

      {props.sub
        ? props.sub.map((e, i) => {
            return (
              <span className="text-tiny pt-1.5" key={i}>
                {e}
              </span>
            );
          })
        : null}
    </div>
  );
}

function Select(props) {
  return (
    <div className='w-full'>
    <label htmlFor={props.for}>
      <div className="mb-1.5">
        <span className="font-semibold text-black dark:text-white">
          {props.name}
        </span>
        &nbsp;
        <span className="text-primary font-bold">
          {props.required ? "*" : ""}
        </span>
      </div>
      </label>

      <select
        name={props.for}
        id={props.for}
        className={`w-full text-gray-600 dark:text-gray-400 dark:bg-slate-900 dark:border-gray-600 border border-gray-300 focus:border-gray-400 px-3 py-1 rounded-md ${props.SelectClassName}`}
        defaultValue='none'
      >
        <option value="none">
          None
        </option>
        {props.options.map((e, i) => {
          return (
            <option value={e.toLowerCase()} key={i}>
              {e}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormInput;
export { Area, Input, Select };
