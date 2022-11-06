//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Moody {
    uint256 public moodCount = 0;
    string public name = "Moody Contract";
    mapping(uint256 => Mood) public moods;

    struct Mood {
        uint256 id;
        string hash;
        string message;
        string category;
        string date;
        address author;
    }

    event MoodUploaded(
        uint256 id,
        string hash,
        string message,
        string category,
        string date,
        address author
    );

    constructor() {
        console.log("Deploying a Moody Contract");
    }

    function uploadMood(
        string memory _moodHash,
        string memory _message,
        string memory _category,
        string memory _date
    ) public {
        // Validating
        require(bytes(_moodHash).length > 0);
        require(msg.sender != address(0));

        moodCount++;
        moods[moodCount] = Mood(
            moodCount,
            _moodHash,
            _message,
            _category,
            _date,
            msg.sender
        );
        emit MoodUploaded(
            moodCount,
            _moodHash,
            _message,
            _category,
            _date,
            msg.sender
        );
    }
}