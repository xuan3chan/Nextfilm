import '@/app/ui/css/checkbox.css'

export const Checkbox = ({label, className, styleLabel}) => {
  return(
    <div className={`checkbox-wrapper-13 ${className}`}>
      <input id="c1-13" type="checkbox"/>
      <label style={{fontSize: '13px'}} for="c1-13">{label}</label>
    </div>
  )
}