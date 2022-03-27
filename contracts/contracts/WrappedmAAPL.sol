// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappeddAAPL is WrappedToken {
    constructor() public WrappedToken("Wrapped Duality AAPL Token", "dAAPL") {}
}
