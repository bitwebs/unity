// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappedBSDR is WrappedToken {
    constructor() public WrappedToken("Wrapped BSDR Token", "BSDR") {}
}
