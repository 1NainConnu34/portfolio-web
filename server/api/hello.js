import axios from "axios";

export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()

    const { data } = await axios({
        method: 'get',
        url: 'https://api.github.com/users/1NainConnu34/repos',
        headers: {
            Authorization: `Bearer ${config.token}`,
            "Content-type": "application/json",
            'Accept-Encoding': 'identity',
            
        },
    })
    return data;
});
