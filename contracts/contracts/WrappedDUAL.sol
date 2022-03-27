// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappedDUAL is WrappedToken {
    constructor() public WrappedToken("Wrapped DUAL Token", "DUAL") {}
}
