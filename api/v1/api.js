Counter = new Mongo.Collection('counter');


if (Meteor.isServer) {

    // Global API configuration

    var ApiType = new Restivus({
        useDefaultAuth: true,
        prettyJson: true,
        apiPath: '/',
        version: 'v1'
       
    });

    ApiType.addRoute('api', {
        authRequired: false
    }, {
            get: function () {

                var _id1 = Counter.insert({
                    value: 0,
                    // added_date: moment().format()

                });


                var _id2 = Counter.insert({
                    value: 0,
                    // added_date: moment().format()

                });


                return {
                    status: 'success'
                }


            }

        });



}