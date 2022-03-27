// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappedBiq is WrappedToken {
    constructor() public WrappedToken("Wrapped BIQ Token", "BIQ") {}
}
