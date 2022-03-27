// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappeddTSLA is WrappedToken {
    constructor() public WrappedToken("Wrapped Duality TSLA Token", "dTSLA") {}
}
