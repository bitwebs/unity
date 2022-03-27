// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappeddBABA is WrappedToken {
    constructor() public WrappedToken("Wrapped Duality BABA Token", "dBABA") {}
}
