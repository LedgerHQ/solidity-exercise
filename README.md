# Ledger Solidity exercise

Founded in 2014, Ledger is a leader in security and infrastructure solutions for cryptocurrencies and blockchain applications. Headquartered in Paris, with offices in Vierzon, New York, London and Singapore, Ledger has a team of 280+ professionals developing products and services to safeguard cryptocurrency assets for individuals and companies.

## Introduction

The goal of this exercise is to create a multiplayer RPG where players collaborate to defeat huge bosses. Let's call it **World of Ledger**!

![artwork](https://img1.goodfon.com/wallpaper/nbig/a/c0/battle-orc-dwarves-fantasy-art.jpg)

In "World of Ledger", the admin is the master of the game. His goal is to make appear, one by one, more and more powerful and frightening bosses. To overcome these bloodthirsty bosses, players will have to enter the arena by creating a character with random characteristics and unite to survive the counterattacks of the bosses. Collaboration will be the key, you will have to learn to share the victory to share the reward!

## Objective

This exercise aims to:

1. Test your engineering skills
2. Test your thinking process when you're creating something from scratch

Below you will find the instructions of this exercise.

## Before beginning

Keep in mind that:

- You only have to be focused on the smart contract, not on the UI
- Code quality will be examined

## Environment

### Engines versions

- [solc](https://github.com/ethereum/solidity): **0.8.19** (`solc --version`)
- [forge](https://book.getfoundry.sh/forge/): **0.2.0** (`forge --version`)

### Installation

```sh
forge install
```

#### Environment

This exercise **must be done in [Solidity](https://docs.soliditylang.org/)**. The development environment to compile, deploy, test and run the code provided by forge by [foundry](https://book.getfoundry.sh/) is already configured.

## Instructions

### Exercise

⚠️ All user stories and **one** feature request of your choice have to be implemented in Solidity. ⚠️ <br/>

The definition of done for a user story is:

- [x] Feature work as expected
- [x] Tests have been written
- [x] Quality controls are passed

### User stories

Please, read the following user stories to implement:

1. As an owner I want to inherit the admin permissions of the smart contract once it is deployed
2. As an admin I want to be the only one able to populate the contract with customizable bosses
3. As an user I want to be able to pseudo-randomly generated **one** character per address
4. As an user I want to be able to attack the current boss with my character
5. As an user I should be able to heal other characters with my character
6. As an user I want to be able to claim rewards of defeated bosses

### Additional rules

- Everytime a player attack the boss, the boss will counterattack the player. Both will loose life points
- A dead character can no longer do anything but can be healed
- Only characters who attacked the boss can receive the reward in xp
- A new boss can't be populated if the current one isn't defeated
- A player can't heal himself
- Only players who already earn experiences can cast the heal spell

### Feature Requests

Please, read the following feature requests and pick one to implement:

1. Earning experiences isn't enough. Implement a level system based on the experience gained. Casting the heal spell will require a level 2 character and casting a fire ball spell will require a level 3 character. The fire ball spell can only be casted every 24 hours. Each time a character dies, he must loose experience points
2. We decided to use BAYC as bosses. Please, interface the BAYC contract to allow admin to generate BAYCs bosses. Develop the smart contract in such a way that anyone can create a frontend connected to the contract and use the BAYC metadata to display the boss.
3. Players should be able to brag their fights participations. Allow players to mint a non-fungible token when they claim the reward of a defeated boss. **Don't be focus on the NFT itself, it doesn't need to be impressive or include any art**
4. To emboard new players we want to pay fees for them. Allow the contract to receive "meta-transaction" that we will broadcast in order to onboard players who don't hold any native tokens.

### Data structures

Here is the data shape of the character and boss object you'll have to implement. This data are only a base that you can modify and extend as you wish. Feel free to made your own implementation.

```typescript
type Boss = {
  hp: number;
  damage: number;
  reward: number;
};

type Character = {
  hp: number;
  damage: number;
  xp: number;
};
```

## Notes

### General

- You can use additional libraries but you can be asked to justify your choices
- Take time to develop a readable contract
- Keep in mind that your smart contract should be interfaceable by a dapp
- Testing is very important for us, so your app should be fully tested
- At Ledger we really focus on details. Verify your work before sending it to us

## Restitution

Please document your code or modify this `README.md` file to describe your choices, practices, etc. <br/>
Share your code with us using a **private** repository on [GitHub](https://github.com/) and invite [@qd-qd](https://github.com/qd-qd)

---

**Thank you for your time and good luck! 🍀** <br/>
**Powered by [Ledger](https://www.ledger.com/)**
