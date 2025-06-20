//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl
 */
contract YourContract {
    uint256 public counter = 0;
    address public owner = msg.sender;

    event Increamented(address indexed whoDidIt, uint256 value);
    event Decreamented(address indexed WhoDidit, uint256 value);

    function inc() public {
        counter++;
        emit Increamented(msg.sender, counter);
    }

    function dec() public {
        require(counter > 0, "Counter ia Zero");
        counter--;
        emit Decreamented(msg.sender, counter);
    }

    function reset() public {
        require(msg.sender == owner, "Only Owner can reset the counter");
        counter = 0;
    }
}
