define(['base/view', 'hgn!modules/user/userDetail'], function(BaseView, userDetailTemplate) {

  var UserDetailView = BaseView.extend({

    template: userDetailTemplate,

    render: function() {
      this.renderTemplate();
    }

  });

  return UserDetailView;

});