import styles from "./Input.module.scss"

const Input = ({classNames, onChange, stylesProp, type, value, defaultValue, props} : {classNames?: string[], onChange?: (any?: any)=>any, stylesProp?: any, type?: string, value?: any, defaultValue?: any, props: any}) => {
    return (
        <input 
            type={type || "text"}
            defaultValue={defaultValue ? defaultValue : ""}
            className={`${styles.Input}
            ${classNames && classNames.length > 0
                ? 
                    classNames.map((el)=>{return el}).join(" ")
                : ""}
            `}
            style={{...stylesProp}} 
            onChange={onChange ? onChange : null}
            {...props}
        />
    );
};

export default Input;