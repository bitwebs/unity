// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import "./UnityVault.sol";

contract iETH is UnityVault {
    constructor(address _token) public UnityVault(_token) {}
}
