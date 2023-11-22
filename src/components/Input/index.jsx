import { toTitleCase } from "@/functions"

const Input = ({register, label, ...params}) => {
    return(
        <label>
            <span className="font-bold">{toTitleCase(label)}</span>
            <input className="w-full h-10 rounded-lg border border-gray-700 p-3 mt-2" {...register(label)} {...params}  />
        </label>
    )
}

export default Input