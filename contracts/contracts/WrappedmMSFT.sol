// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappeddMSFT is WrappedToken {
    constructor() public WrappedToken("Wrapped Duality MSFT Token", "dMSFT") {}
}
