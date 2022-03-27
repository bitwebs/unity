// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappeddGOOGL is WrappedToken {
    constructor() public WrappedToken("Wrapped Duality GOOGL Token", "dGOOGL") {}
}
