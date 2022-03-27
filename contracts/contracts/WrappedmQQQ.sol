// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappeddQQQ is WrappedToken {
    constructor() public WrappedToken("Wrapped Duality QQQ Token", "dQQQ") {}
}
