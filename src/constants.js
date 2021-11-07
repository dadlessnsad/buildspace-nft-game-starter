const CONTRACT_ADDRESS = '0x62b0c318D1102eD82ccD0dc2fA8d0Dc673e83B24';

const transformCharacterData = (characterData) => {
  return {
    name:         characterData.name,
    imageURI:     characterData.imageURI,
    HP:           characterData.HP.toNumber(),
    maxHP:        characterData.maxHP.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};

export { CONTRACT_ADDRESS, transformCharacterData };