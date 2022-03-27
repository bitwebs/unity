// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappedBUSD is WrappedToken {
    constructor() public WrappedToken("Wrapped BUSD Token", "BUSD") {}
}
