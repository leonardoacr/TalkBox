import { ChangeEvent } from "react"

interface InputTextProps {
  label: string
  id: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputText = (props: InputTextProps) => {
  return (
    <div>
      <label htmlFor={props.id} className="mb-2 block font-medium">
        {props.label}
      </label>
      <input
        type="text"
        id={props.id}
        name={props.id}
        required
        className="w-full rounded-lg border border-sky-900 px-4 py-1.5 
        focus:border-sky-600 focus:outline-none"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default InputText
