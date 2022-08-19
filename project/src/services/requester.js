const request = async (method, url, data, header) => {
    try {
        let requestPrep;

        if (method === "GET") {
            requestPrep = fetch(url, {
                headers: {
                    "X-Authorization": header,
                    "content-type": "application/json"
                }
            });
        }
        else {
            requestPrep = fetch(url, {
                method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
        }

        const responce = await requestPrep;

        const result = await responce.json();

        return result;
    } catch (error) {
        console.log("Requester Error: ", error);
    }
};

export const get = request.bind({}, "GET");
export const put = request.bind({}, "PUT");
export const post = request.bind({}, "POST");
export const del = request.bind({}, "DELETE");