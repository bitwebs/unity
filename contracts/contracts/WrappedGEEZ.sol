// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappedGEEZ is WrappedToken {
    constructor() public WrappedToken("Wrapped GEEZ Token", "GEEZ") {}
}
