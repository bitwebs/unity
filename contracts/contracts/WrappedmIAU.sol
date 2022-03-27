// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappeddIAU is WrappedToken {
    constructor() public WrappedToken("Wrapped Duality IAU Token", "dIAU") {}
}
