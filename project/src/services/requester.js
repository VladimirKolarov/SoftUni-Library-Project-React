const request = async (method, url, data, header) => {
    try {
        let requestPrep;

        let requestHeaders = {
            "content-type": "application/json"
        }

        if (header) {
            requestHeaders["X-Authorization"] = header;
        }

        if (method === "GET") {
            requestPrep = fetch(url, {
                headers: requestHeaders
            });
        }
        else {
            requestPrep = fetch(url, {
                method,
                headers: requestHeaders,
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