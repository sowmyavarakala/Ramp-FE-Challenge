import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)
  const inputClassName = classNames("RampInputCheckbox--label", {
    "RampInputCheckbox--label-checked": checked,
    "RampInputCheckbox--label-disabled": disabled,
  })

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <input
        id={inputId}
        type="checkbox"
        className={inputClassName}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
    </div>
  )
}
