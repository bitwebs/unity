// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappeddVIXY is WrappedToken {
    constructor() public WrappedToken("Wrapped Duality VIXY Token", "dVIXY") {}
}
