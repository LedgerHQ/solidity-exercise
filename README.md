# Ledger Solidity exercise

Founded in 2014, Ledger is a leader in security and infrastructure solutions for cryptocurrencies and blockchain applications. Headquartered in Paris, with offices in Vierzon, London, New York, and Singapore, Ledger has a team of 800+ professionals developing products and services to safeguard cryptocurrency assets for individuals and companies.

## Introduction

The goal of this exercise is to create a multiplayer RPG where players collaborate to defeat huge bosses. Let's call it **World of Ledger**!

![artwork](https://img1.goodfon.com/wallpaper/nbig/a/c0/battle-orc-dwarves-fantasy-art.jpg)

In "World of Ledger", the admin is the game master. Their goal is to make appear, one by one, more and more powerful and frightening bosses. To overcome these bloodthirsty bosses, players will have to enter the arena by creating a character with random characteristics and unite to survive the counterattacks of the bosses. Collaboration will be the key, you will have to learn to share the victory to share the rewards!

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

This exercise **must be done in [Solidity](https://docs.soliditylang.org/)**. The development environment to compile, deploy, test, and run the code provided by [foundry](https://book.getfoundry.sh/) is already configured.

## Instructions

### Exercise

⚠️ All user stories and **one** feature request of your choice have to be implemented in Solidity. ⚠️ <br/>

The definition of done for a user story is:

- [x] Feature works as expected
- [x] Tests have been written
- [x] Quality controls are passed

### User stories

Please, read the following user stories to implement:

1. As an owner I want to inherit the admin permissions of the smart contract once it is deployed.
2. As an admin I want to be the only one able to populate the contract with customizable bosses.
3. As a user I want to be able to pseudo-randomly generate **one** character per address.
4. As a user I want to be able to attack the current boss with my character.
5. As a user I should be able to heal other characters with my character.
6. As a user I want to be able to claim rewards, such as experience, when defeating bosses.

### Additional rules

- Everytime a player attacks the boss, the boss will counterattack. Both will lose life points.
- A dead character can no longer do anything but can be healed.
- Only characters who attacked a boss can receive experience as reward.
- A new boss can't be populated if the current one isn't defeated.
- Players can't heal themselves.
- Only players who have already earned experience can cast the heal spell.

### Feature Requests

Please read the following feature requests and pick one to implement:

1. Earning experience isn't enough. Implement a level system based on the experience gained. Casting the heal spell will require a level 2 character and casting a fireball spell will require a level 3 character. The fire ball spell can only be cast every 24 hours. Each time a character dies, they must lose experience points
2. We decided to use [BAYCs](https://boredapeyachtclub.com/) as bosses. Please, interface the [BAYC contract](https://etherscan.io/token/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d) to allow admin to generate BAYC bosses. Develop the smart contract such that anyone can create a frontend connected to the contract and use the BAYC metadata to display the bosses.
3. Players should be able to brag about their participation in fights. Allow players to mint a non-fungible token as part of the rewards for defeating a boss. **Don't focus too much on the NFT itself, it doesn't need to be impressive or include any art**.
4. To onboard new players, we want to pay fees for them. Allow the contract to receive "meta-transactions" that we will broadcast in order to onboard players who don't hold any native tokens.

### Data structures

Here is the data shape of the character and boss object you'll have to implement. This data model is only a base that you can modify and extend as you wish. Feel free to make your own implementation.

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

- You can use additional libraries but you may be asked to justify your choices
- Take time to develop a readable contract
- Keep in mind that your smart contract should be interfaceable by a dapp
- Testing is very important for us, so your contract should be fully tested
- The devil is the details, double-check your work before submitting it!

## Restitution

Please document your code or modify this `README.md` file to describe your choices, practices, etc. <br/>
Share your code with us using a **private** repository on [GitHub](https://github.com/) and inviting [@qd-qd](https://github.com/qd-qd).

---

**Thank you for your time and good luck! 🍀** <br/>
**Powered by [Ledger](https://www.ledger.com/)**
