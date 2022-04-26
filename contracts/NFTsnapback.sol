//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTsnapback is ERC1155 {
    using Counters for Counters.Counter;

    string public name = "O.G.C || NFTsnapback";

    uint256 public tokenPrice; // Price of token for minter
    address public owner; // Contract owner address

    uint256 public tokensUserCap; // Max minting limit of specific user against specific token id

    Counters.Counter private _tokenIds; // Auto generated token IDs

    mapping (uint256 => string) private _tokenURIs; // Dynamic token URIs
    mapping (uint256 => uint256) private _tokenIdCaps; // Max minting limit of specific token id

    mapping(uint256 => Counters.Counter) private _countByType; // Tokens count by token ID
    mapping(address => mapping(uint256 => Counters.Counter)) private _countByUser; // Tokens count by token id & user

    // Modifier to check if sender is owner
    modifier onlyOwner {
      require(msg.sender == owner);
      _;
    }

    constructor(uint256 _tokenPrice, uint256 _tokensUserCap) ERC1155("Anything_you_want") {
        owner = msg.sender;
        tokenPrice = _tokenPrice;
        tokensUserCap = _tokensUserCap;
    }

    function createToken(string memory _tokenURI, uint256 _cap) public onlyOwner returns (uint256) {
        uint256 newItemId = _tokenIds.current();
        _setTokenUri(newItemId, _tokenURI);
        _tokenIds.increment();

        // Setting minting limit
        _setTokenCap(newItemId, _cap);
        return newItemId;
    }

    // Set token URI
    function _setTokenUri(uint256 tokenId, string memory tokenURI) private {
        _tokenURIs[tokenId] = tokenURI;
    }

    // Set max minting limit for token ID
    function _setTokenCap(uint256 tokenId, uint256 cap) private {
        _tokenIdCaps[tokenId] = cap;
    }

    // Get minting limit for token ID
    function getTokenCap(uint256 tokenId) public view returns (uint256) {
        return _tokenIdCaps[tokenId];
    }

    // Get latest token ID
    function getLatestTokenId() public view returns (string memory) {
        uint256 currentItemId = _tokenIds.current();
        if (currentItemId == 0) {
            return "";
        }
        return Strings.toString(currentItemId - 1);
    }

    // Mint single token against token ID
    function mintToken(uint256 id) payable public {
        require(
            msg.value == tokenPrice,
            "Please submit asking price in order to complete the purchase"
        );
        require(
            id < _tokenIds.current(),
            "Invalid ID"
        );
        require(
            _countByType[id].current() < _tokenIdCaps[id],
            "No tokens left"
        );
        require(
            _countByUser[msg.sender][id].current() < tokensUserCap,
            "Tokens limit exceeded"
        );

        // Pay price to owner
        payable(owner).transfer(msg.value);

        // Mint NFT
        _mint(msg.sender, id, 1, "");

        // Increment
        _countByType[id].increment();
        _countByUser[msg.sender][id].increment();
    }

    function burnToken(uint256 id) public {
        _burn(msg.sender, id, 1);

        // Decrement
        // _countByType[id].decrement();
        // _countByUser[msg.sender][id].decrement();
    }

    function uri(uint256 id) public view virtual override returns (string memory) {
        return(_tokenURIs[id]);
    }
}
