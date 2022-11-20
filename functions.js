
exports.extractMergeFields = (responseResult) => {
    const merger_array = responseResult.map((elem, ind) => {
        const merger = {}
        merger.id = ind + 1;
        merger.street_address = elem?.properties['Street Address']?.title[0]?.plain_text;
        merger.bathroom_count = elem?.properties["number of bathrooms"]?.number;
        merger.Bedroom_count = elem?.properties["number of bedrooms"].number;
        merger.property_type = elem?.properties["property type"]?.rich_text[0]?.plain_text;
        merger.garage_space = elem?.properties['car spaces']?.number;
        merger.image_1 = elem?.properties["property image 1"]?.url;
        merger.image_2 = elem?.properties["property image 2"]?.url;
        merger.image_3 = elem?.properties["property image 3"]?.url;
        merger.image_4 = elem?.properties["property image 4"]?.url;
        merger.postcode = elem?.properties["postcode"]?.number;
        merger.date = elem?.properties["Date"]?.date;
        merger.url = elem?.properties["url"];
        return merger;
    });
    return merger_array;
}


exports.get_merge_object = (street_address, merge_array) => {
    const arr = [];
    const temp_value = merge_array.find(element => (element?.street_address.trim().toLowerCase() == street_address?.trim().toLowerCase()));
    Object.keys(temp_value).forEach(elem => {
        arr.push({
            "find": elem,
            "replace": temp_value[elem]
        })
    })
    // filtering out irrelevant fields
    const placeholder_fields = ['street_address', 'postcode', 'property_type', 'Bedroom_count', 'bathroom_count', 'garage_space', 'image_1', 'image_2', 'image_3', 'image_4']
    return (arr.filter(elem => (
        placeholder_fields.includes(elem.find)
    )));
}
