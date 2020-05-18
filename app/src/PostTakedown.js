import React from 'react'
import React, { useState } from "react";
import axios from 'axios';

const PostTakedown = () => {

    const [form, setForm]=useState({
        name:'',
        description:'',
        image_url:'',
        mount_user_id:''

    });

    
    return (
        <div>
            <form>
                <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Move Name"
                
                />
            </form>
            
        </div>
    )
}

export default PostTakedown