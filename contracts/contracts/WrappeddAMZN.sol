// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappeddAMZN is WrappedToken {
    constructor() public WrappedToken("Wrapped Duality AMZN Token", "dAMZN") {}
}
