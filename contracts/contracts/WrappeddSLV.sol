// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappeddSLV is WrappedToken {
    constructor() public WrappedToken("Wrapped Duality SLV Token", "dSLV") {}
}
