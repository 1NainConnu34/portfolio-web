import axios from 'axios';

let token = process.env.GITHUB_TOKEN

export default defineEventHandler(async (event) => {  
    const { data } = await axios({
        method: 'get',
        url: 'https://api.github.com/users/1NainConnu34/repos',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
            'Accept-Encoding': 'Identify',
        },
    })

    return (data);
})
