var Elections = artifacts.require("./Election.sol");

contract("Election", function(accounts) {
  var electionInstance;

  it("Initializes with two candidates", function() {
    return Elections.deployed()
      .then(function(instance) {
        return instance.candidatesCount();
      })
      .then(function(count) {
        assert.equal(count, 2);
      });
  });
  it("Initializes the candidate with the correct values", function() {
    return Elections.deployed(function(instance) {
      electionInstance = instance;
      return electionInstance.candidates(1);
    })
      .then(function(candidate) {
        assert.equal(candidate[0], 1, "containes the correct ID");
        assert.equal(candidate[1], "Jolie Lin", "containes the correct name");
        assert.equal(candidate[2], 0, "containes the correct vote count");
        return electionInstance.candidates(2);
      })
      .then(function(candidate) {
        assert.equal(candidate[0], 2, "containes the correct ID");
        assert.equal(
          candidate[1],
          "Gerardo Fernandez",
          "containes the correct name"
        );
        assert.equal(candidate[2], 0, "containes the correct vote count");
      });
  });
});
