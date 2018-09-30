var budgetController = (function() {

    // Private Attributes and Methods
    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        // Public Methods
        publicTest: function(b) {
            return add(b);
        }
    }
})();

var UIController = (function() {

})();

var controller = (function(budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

})(budgetController, UIController);