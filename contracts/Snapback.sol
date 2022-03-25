//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Snapback is ERC1155 {

    uint256 public tokenPrice;
    // address contractAddress;
    address public owner;

    string private constant IPFS_PREFIX = "https://ipfs.io/ipfs/";

    uint256 public constant AVASTARS = 1;
    uint256 public constant DRIPPERS = 2;
    uint256 public constant UNOFFICAL_PUNKS = 3;
    uint256 public constant COCAIN_COWBOY = 4;

    constructor(uint256 _tokenPrice) ERC1155(string(abi.encodePacked(IPFS_PREFIX, "QmPossjCcLxQsGrcGB9pvqKCXfoorbsyxp3iALQ5WiVvk6/{id}.json"))) {
        owner = msg.sender;
        // contractAddress = storeAddress;
        tokenPrice = _tokenPrice;
    }

    function mintToken(uint256 id) payable public {
        require(
            msg.value == tokenPrice,
            "Please submit asking price in order to complete the purchase"
        );

        // Pay price to owner
        payable(owner).transfer(msg.value);

        // Mint NFT
        _mint(msg.sender, id, 1, "");

        // setApprovalForAll(contractAddress, true);
    }

    function burnToken(uint256 id) public {
        _burn(msg.sender, id, 1);
    }

    function uri(uint256 id) public view virtual override returns (string memory) {
        return string(
            abi.encodePacked(
                IPFS_PREFIX,
                "QmPossjCcLxQsGrcGB9pvqKCXfoorbsyxp3iALQ5WiVvk6/",
                Strings.toString(id),
                ".json"
            )
        );
    }
}
