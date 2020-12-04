const Model = require("./Model");


class Contact extends Model
{
    fillable = ['id', 'first_name', 'last_name', 'mobile_number'];
}

module.exports = Contact