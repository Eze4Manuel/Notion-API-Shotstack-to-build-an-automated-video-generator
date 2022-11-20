
const axios = require("axios");
const { version, shotstack_base_url, notion_base_url } = require("./config");
const { template_data } = require("./functions");
const { extractMergeFields, get_merge_object } = require("./functions");

const shotstackRequest = (req, res, merge_array) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-api-key': `${process.env.SHOTSTACK_API_KEY}`
        };
        axios.post(`${shotstack_base_url}${version}/render`, JSON.stringify(merge_array), {
            headers: headers
        })
            .then(async (response) => {
                return res.status(200).json({ data: response.data, msg: 'data fetched', status: "success" });
            })
            .catch((error) => {
                console.log(error);
                return res.status(400).json({ data: 'Something went wrong', msg: 'data fetched', status: "failed" });
            });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ msg: 'Something went wrong', status: "failed" });
    }
}

exports.renderVideo = (req, res) => {
    try {
        (async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
                'Notion-Version': "2022-06-28"
            };
            const body_data = {
                "filter": {
                    "value": "database",
                    "property": "object"
                }
            }
            // Searching for list of databases belonging to the used API token
            axios.post(`${notion_base_url}v1/search`, body_data, {
                headers: headers
            }).then(async (response) => {

                // extracting ID of the database that matches the database name passed alongside the request
                let database_id = response.data.results.find(elem => (
                    (elem.title.find(item => (item.plain_text == req.query.database_name)))
                ))?.id;

                // checking if database exists
                if (database_id !== undefined) {
                    axios.post(`${notion_base_url}v1/databases/${database_id}/query`, {}, {
                        headers: headers
                    }).then(async (response) => {

                        const merge_array = await extractMergeFields(response.data.results);

                        // returning database query if specific row is not selected
                        if (req.query.street_address === undefined) return res.status(400).json({ data: merge_array, msg: 'Select a street address and call this endpoint again with the value for the street address', status: "success" });

                        const merge_object = await get_merge_object(req.query.street_address, merge_array);

                        // checking if street address exist in database
                        if (merge_object == undefined) return res.status(400).json({ data: 'error', msg: 'No match for street address', status: "success" });

                        // rendeing video using database properties
                        else return await shotstackRequest(req, res, template_data(merge_object));

                    }).catch((error) => {
                        console.log(error);
                        return res.status(400).json({ data: {}, msg: 'No data fetched', status: "failed" });
                    })
                } else {
                    return res.status(400).json({ data: 'error', msg: 'No such database found', status: "success" });
                }
            }).catch((error) => {
                console.log(error);
                return res.status(400).json({ data: {}, msg: 'No data fetched', status: "failed" });
            })
        })();
    } catch (error) {
        console.log(error);
        return res.status(400).json({ data: database_id, msg: 'data fetched', status: "success" });
    }
}


exports.queryShotstackStatus = (req, res, render_id) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-api-key': `${process.env.SHOTSTACK_API_KEY}`
        };
        axios.get(`${shotstack_base_url}${version}/render/${render_id}`, {
            headers: headers
        })
            .then(async (response) => {
                if (response.data?.response?.status !== 'done') {
                    return res.status(200).json({ data: { status: response.data?.response?.status }, msg: 'data fetched', status: "success" });
                } else {
                    return res.status(200).json({
                        data:
                        {
                            status: response.data?.response?.status,
                            url: response.data?.response?.url,
                            render_time: response.data?.response?.renderTime
                        }, msg: 'data fetched', status: "success"
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                return res.status(400).json({ msg: 'data fetched', status: "failed" });
            });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ msg: 'Something went wrong', status: "failed" });
    }
}