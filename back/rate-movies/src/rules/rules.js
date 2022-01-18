exports.checkFields = (fields) => {
    const {name, year, time} = fields;
    if(name === '' || year === '' || time === ''){
        return true;
    }
    return false;
}