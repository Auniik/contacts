class Model 
{
    fillable = [];
    attributes = {};

    constructor(attributes = {}) {
        const prevAttributes  = this.attributes;

        this.attributes = {...prevAttributes, attributes}
    }

    get() {

    }
    

    static create(attributes) {
        
    }
}

module.exports = Model;