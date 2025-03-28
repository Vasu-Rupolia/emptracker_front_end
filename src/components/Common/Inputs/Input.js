const Input = ({type, name="", value="", className, onChange="", placeholder}) => {
    return (
        <input 
            type={type} 
            name={name} 
            value={value}
            className={className} 
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

export default Input;