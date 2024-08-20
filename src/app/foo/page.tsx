"use client"
import { useState } from "react"
import { PostTitle } from "../_components/post-title";

export default function Foo() {

    const [number, setNumber] = useState(0);

    return <div>
        <PostTitle>Hello World</PostTitle>
        <p>the current value is {number}</p>
        <button className="btn btn-blue" onClick={() => {
            setNumber(number + 1);
        }}>Add 1</button>
    </div>
}