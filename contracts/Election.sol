pragma solidity ^0.4.2;

contract Election {
    //We need model the candidate
    struct Candidate {
        uint id;
        string name;
        uint count;
    }
    //Store candidates
    //fetch candidates
    mapping(uint => Candidate) public candidates;
    //Store candidate's count 
    uint public candidatesCount;

    function Election () public {
        addCandidate("Jolie Lin");
        addCandidate("Gerardo Fernandez");
    }

    function addCandidate (string _name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
}