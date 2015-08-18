var React = require('react/addons');

var MyComponent = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    render: function() {
        return (
            <div></div>
        )
    }

});

module.exports = MyComponent;