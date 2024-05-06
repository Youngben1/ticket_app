"use client";

import { useRouter } from "next/navigation";
import React, {useState} from "react";


const TicketForm = () => {

    const router = useRouter()

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

        const handleSubmit = async (e) => {
            e.preventDefault();
            const res = await fetch("api/Tickets", {
                method: "POST",
                BODY: JSON.stringify({formData}),
                "content-type": "application/json",
            })

            if(!res.ok) {
                throw new Error("Failed to create ticket.")
            }

            router.refresh()
            router.push("/")
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
            <label>Priority</label>
            <div>
                <input id="priority-1" type="radio" name="priority" value={1} onChange={handleChange} checked={formData.priority == 1} />
                <label>1</label>
                <input id="priority-2" type="radio" name="priority" value={2} onChange={handleChange} checked={formData.priority == 2} />
                <label>2</label>
                <input id="priority-3" type="radio" name="priority" value={3} onChange={handleChange} checked={formData.priority == 3} />
                <label>3</label>
                <input id="priority-4" type="radio" name="priority" value={4} onChange={handleChange} checked={formData.priority == 4} />
                <label>4</label>
                <input id="priority-5" type="radio" name="priority" value={5} onChange={handleChange} checked={formData.priority == 5} />
                <label>5</label>
            </div>
            <label>Progress</label>
            <input id="progress" name="progress" type="range" onChange={handleChange} value={formData.progress} min="0" max="100" />

            <label>Status</label>
            <select name="status" type="text" required={true} value={formData.status} onChange={handleChange}>
                <option value="Not started">Not Started</option>
                <option value="Started">Started</option>
                <option value="Pending">Pending</option>
            </select>
            <input type="submit" className="btn" value="Create Ticket" onClick={handleSubmit} />
        </form>
    </div>
  )
}

export default TicketForm