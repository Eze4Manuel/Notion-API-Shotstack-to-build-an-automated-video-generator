
const axios = require("axios");
const { Client, LogLevel } = require("@notionhq/client");
const { version, shotstack_base_url } = require("./config");
const { template_data } = require("./data");
const { extractMergeFields, get_merge_object } = require("./functions");

exports.shotstackRequest = (req, res, merge_array) => {
    try {

        // Initializing a client
        const notion = new Client({
            auth: process.env.NOTION_TOKEN,
            logLevel: LogLevel.DEBUG,
        })

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

exports.renderVideo = () => {
    try {
        (async () => {
            const response = await notion.search({
                filter: {
                    value: 'database',
                    property: 'object'
                }
            });
            let database_id = response.results.find(elem => (
                (elem.title.find(item => (item.plain_text == req.query.database_name)))
            ))?.id;

            if (database_id !== undefined) {
                const result = await notion.databases.query({
                    database_id: database_id
                });
                const merge_array = await extractMergeFields(result.results);
                if (req.query.street_address === undefined) return res.status(400).json({ data: merge_array, msg: 'Select a street address and call this endpoint again with the value for the street address', status: "success" });
                const merge_object = await get_merge_object(req.query.street_address, merge_array);
                if (merge_object == undefined) return res.status(400).json({ data: 'error', msg: 'No match for street address', status: "success" });
                else {
                    return await shotstackRequest(req, res, template_data(merge_object));
                }
            } else {
                return res.status(400).json({ data: 'error', msg: 'No such database found', status: "success" });
            }
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