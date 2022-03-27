// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappeddTWTR is WrappedToken {
    constructor() public WrappedToken("Wrapped Duality TWTR Token", "dTWTR") {}
}
