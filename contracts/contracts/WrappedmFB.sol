// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappeddFB is WrappedToken {
    constructor() public WrappedToken("Wrapped Duality FB Token", "dFB") {}
}
