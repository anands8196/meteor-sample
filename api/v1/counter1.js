// Counter = new Mongo.Collection('Counter');


if (Meteor.isServer) {

    // Global API configuration

    var ApiType = new Restivus({
        useDefaultAuth: true,
        prettyJson: true,
        apiPath: '/',
        version: 'v1'

    });

    ApiType.addRoute('counter1', {
        authRequired: false
    }, {
            put: function () {

                console.log("hello")
                var _id = Counter.update({ _id: 'AuyAsBNo9ndN8YijS' }, {
                    $inc: {
                        'value': 1
                    },
                    // $set: {
                    //     // updated_date: moment().format()
                    // }
                });


                return {
                    status: 'success'
                }


            },
            delete: function () {

                var _id = Counter.update({ _id: 'AuyAsBNo9ndN8YijS' }, {
                    $inc: {
                        'value': -1
                    },
                    // $set: {
                    //     // updated_date: moment().format()
                    // }
                });





                return {
                    status: 'success'
                }


            }

        });



}