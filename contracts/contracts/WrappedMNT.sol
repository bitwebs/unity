// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappedBMNT is WrappedToken {
    constructor() public WrappedToken("Wrapped BMNT Token", "BMNT") {}
}
