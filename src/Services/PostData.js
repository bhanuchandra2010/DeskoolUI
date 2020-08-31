import React from 'react'

export default function PostData(userdata) {
    return new Promise((resolve, reject) => {
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(userdata)
        })
            .then((response) => response.json())
            .then((responsejson) => {
                resolve(responsejson);
            })
            .catch((error) => {
                reject(error);
            })
    });
}
