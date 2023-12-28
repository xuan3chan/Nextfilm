import '@/app/ui/css/checkbox.css'
import { roboto } from './fonts'

export const Checkbox = ({label, className, styleLabel}) => {
  return(
    <div className={`checkbox-wrapper-13 ${className} ${roboto.className}`}>
      <input id="c1-13" type="checkbox"/>
      <label className={`${styleLabel}`} htmlFor="c1-13">{label}</label>
    </div>
  )
}