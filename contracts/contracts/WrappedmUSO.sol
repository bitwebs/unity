// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import './WrappedToken.sol';

contract WrappeddUSO is WrappedToken {
    constructor() public WrappedToken("Wrapped Duality USO Token", "dUSO") {}
}
