//Activity = new Mongo.Collection('activity');
//const Chatkit = require('pusher-chatkit-server')



//import { Chatkit } from 'pusher-chatkit-server';


if (Meteor.isServer) {

    // Global API configuration
    var ApiService = new Restivus({
        useDefaultAuth: true,
        prettyJson: true,
        apiPath: '/',
        version: 'v1'
    });



    ApiService.addRoute('test/',
        { authRequired: false }, {
            //insert one
            post: {
                action: function () {
                    console.log("hello");

                    var email = this.bodyParams.email;
                    // var name = this.bodyParams.name;
                    // var age = this.bodyParamss.age;
                    // var location = this.bodyParams.location;
                    var data = Users.insert({ "email": email })
                  //  var check = Users.find({ "email": email }).fetch();

                    if (check.length > 0) {
                        return {
                            statusCode: 206,
                            body: {
                                status: 'fail',
                                message: 'Name already exist'
                            }
                        }
                    }

                    else {
                        // var data = Users.insert({ "email": email, "name": name, "age": age, "location": location })
                        return {
                            message: "Successfully Inserted",
                            data: data
                        }
                    }
                }
            },

            //getAll
            get: function () {
                return Users.find().fetch().sort({ "name": -1 });
            }
        });




}
