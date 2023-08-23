// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract UUPS is Initializable, OwnableUpgradeable, UUPSUpgradeable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
    _disableInitializers();
    }

    function initialize() public initializer {
        value = 52011314;
        __Ownable_init();
        __UUPSUpgradeable_init();

    }
    uint256 private value;
                          
    event ValueChanged(uint256 value);

    function setValue(uint256 value_) public reinitializer(201) {
        value = value_;
    }

    function store(uint256 _value) public onlyOwner {
        value = _value + 1;
        emit ValueChanged(_value);
    }

    function getAmount() public view returns(uint) {
        return 201;
    }

    function retrieve() public view returns (uint256) {
        return value;
    }


    function _authorizeUpgrade(address newImplementation)
        internal
        onlyOwner
        override
    {}
}