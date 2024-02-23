import { useState } from 'react'
import Select from 'react-select'

const options_data = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

interface OptionsType {
    value: string
    label: string
}

const MultiSelect = ({options, props, setter} : {options: OptionsType[], props?: any, setter?: any}) => {
    const [selectedOptions, setSelectedOptions] = useState<any>([])

    const handleChange = (e: OptionsType[]) => {
        setSelectedOptions(e)
        console.log(selectedOptions)
        setter ? 
            setter(
                e.map((el)=>{
                    try{
                        +el.value
                        return +el.value
                    }
                    catch{
                        return el.value
                    }
                })
            )
            : null
    }

    return (
        <Select
            value={selectedOptions}
            onChange={handleChange}
            isMulti
            name="colors"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            {...props}
        />
    )
}
export default MultiSelect
