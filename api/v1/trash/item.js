Items = new Mongo.Collection('items');

if (Meteor.isServer) {

  // Global API configuration

  var Item = new Restivus({
    useDefaultAuth: false,
    prettyJson: true,
    apiPath: 'api/',
    version: 'v1'
  });

  // Accounts.createUser({
  //           email: 'shemeermali@gmail.com',
  //           password: "sma848484"
  //       });

  // Generates: GET, POST on /api/items and GET, PUT, PATCH, DELETE on
  // /api/items/:id for the Items collection
  //Api.addCollection(Items);

  // Generates: POST on /api/users and GET, DELETE /api/users/:id for
  // Meteor.users collection

  Item.addRoute('items', {authRequired: true } , {
    get: function () {

        console.log(this.user);

      return Items.find().fetch();
    },
    delete: {
      roleRequired: ['user', 'admin'],
      authRequired: true,
      action: function () {
        if (Items.remove(this.urlParams.id)) {
          return {status: 'success', data: {message: 'Article removed'}};
        }
        return {
          statusCode: 404,
          body: {status: 'fail', message: 'Article not found'}
        };
      }
    }
  });


}
