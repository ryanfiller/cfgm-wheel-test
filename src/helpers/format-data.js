const formatData = (data) => {

    const result = [];

    data.map( (item, index) => {
        return (
            result[index] = item,
            result[index].end = index + 1 < data.length ? data[index + 1].start : data[0].start,
            result[index].span = result[index].end - result[index].start,
            result[index].middle = result[index].end - (result[index].span / 2)
        );
    })
 
    return result;
}

export default formatData;