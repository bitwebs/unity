// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappedBKRW is WrappedToken {
    constructor() public WrappedToken("Wrapped BKRW Token", "BKRW") {}
}
