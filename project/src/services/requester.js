const request = async (method, url, data) => {
    try {
        let requestPrep;

        if (method === "GET") {
            requestPrep = fetch(url);
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
        console.log(error);
    }
};

export const get = request.bind({}, "GET");
export const put = request.bind({}, "PUT");
export const post = request.bind({}, "POST");
export const del = request.bind({}, "DELETE");