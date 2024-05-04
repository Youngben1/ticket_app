"use client";

import { useRouter } from "next/navigation";
import React, {useState} from "react";

    // const router = useRouter()

const TicketForm = () => {

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

        const handleSubmit = () => {
            console.log("submitted")
        }

    const startingTicketData = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "Software wahala",
    }


    const [formData, setFormData] = useState(startingTicketData);
    return (
    <div className="justify-center flex">
        <form className="flex flex-col gap-3 w-1/2" onClick={handleSubmit} method="post">
            <h3>Create your Ticket</h3>
            <label>Title</label>
            <input id="title" name="title" type="text" required={true} value={formData.title} onChange={handleChange} />
            <label>Description</label>
            <textarea id="description" name="description" type="text" required={true} value={formData.description} rows="5" onChange={handleChange} />
            <label>Category</label>
            <select name="category" type="text" required={true} value={formData.category} onChange={handleChange}>
                <option value="Software wahala">Software Wahala</option>
                <option value="Hardware wahala">Hardware Wahala</option>
                <option value="Temperament wahala">Temperament Wahala</option>
            </select>
        </form>
    </div>
  )
}

export default TicketForm