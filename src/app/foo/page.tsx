"use client"
import { useState } from "react"
import { PostTitle } from "../_components/post-title";
import { Button } from "@mui/material";

export default function Foo() {

    const [number, setNumber] = useState(0);

    return <div>
        <PostTitle>Hello World</PostTitle>
        <p>the current value is {number}</p>
        <Button variant="contained" onClick={() => {
            setNumber(number + 1);
        }}>Click</Button>
    </div>
}