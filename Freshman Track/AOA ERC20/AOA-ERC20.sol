// SPDX-License-Identifier: aIT
pragma solidity ^0.8.5;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract ERC20Token is ERC20 {
    constructor() ERC20("Assalam-O-Alaikum", "AOA") {
        _mint(msg.sender, 55 * (10**18));
    }
}
