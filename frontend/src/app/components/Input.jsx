import React from "react";

export default function Input(props) {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            className="border-1 border-gray-200 py-2 px-5 rounded-xl w-full transition-all duration-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-400 focus:outline-none"
        >
        </input>
    )
}