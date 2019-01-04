// Counter = new Mongo.Collection('Counter');


if (Meteor.isServer) {

    // Global API configuration

    var ApiType = new Restivus({
        useDefaultAuth: true,
        prettyJson: true,
        apiPath: '/',
        version: 'v1'

    });

    ApiType.addRoute('counter2', {
        authRequired: false
    }, {
            put: function () {

                var _id = Counter.update({ _id: 'jm3FJkK4AkAyDtKBy' }, {
                    $inc: {
                        'value': 1
                    },
                    // $set: {
                    //     updated_date: moment().format()
                    // }
                });


                return {
                    status: 'success'
                }


            },
            delete: function () {

                var _id = Counter.update({ _id: 'jm3FJkK4AkAyDtKBy' }, {
                    $inc: {
                        'value': -1
                    },
                    // $set: {
                    //     updated_date: moment().format()
                    // }
                });





                return {
                    status: 'success'
                }


            }

        });



}