// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappeddCOIN is WrappedToken {
    constructor() public WrappedToken("Wrapped Duality COIN Token", "dCOIN") {}
}
