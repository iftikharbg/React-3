import React from 'react'
import Button from "./button";

export default function Forest() {
    const images = [
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
    ]
    return (images.map((image, index) => {
        return <Button imageUrl={image} key={index} />
    })
    )
}
