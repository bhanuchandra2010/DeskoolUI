import React from 'react'

export default function PostData(type, userdata) {
    var baseURL = 'https://reqres.in/api/';
    return new Promise((resolve, reject) => {
        fetch(baseURL + type, {
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
