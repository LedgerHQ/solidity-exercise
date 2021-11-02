# Ledger web3 exercise

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
- You do not necessary have to find the perfect gasless solution, we are interested in the way you'll conceive the program
- You do not have to write code out of the `/contracts` folder, nevertheless you can if you think it's necessary
- Keep in mind your code quality will be appreciated

## Environment
### Engines versions
- [Node](https://nodejs.org/en/): **16.X.X** (`node -v`)
- [npm](https://www.npmjs.com/): **8.X.X** (`npm -v`)

### Installation
```sh
npm install # or yarn
```

### Scripts
You will need to use [npm](https://www.npmjs.com/) scripts to run, test and build this application.

#### Environment
This exercise **must be done in [Solidity](https://docs.soliditylang.org/)**. The development environment to compile, deploy, test and run the code provided by [hardhat](https://hardhat.org/) is already configured.

#### Tools and libraries
The tools and libraries listed below are already set-up for you. However, feel free to modify the configuration or even the stack to fit your needs.
- [Ethers.js](https://docs.ethers.io/v5/): a JavaScript library to interact with Ethereum
- [Waffle](https://getwaffle.io/): a library for testing smart contracts.
- [Chai](https://chaijs.com): a BDD/TDD assertion library
- [Solhint](https://protofire.github.io/solhint/): a Solidity linter
- [Typescript](https://www.typescriptlang.org/): a strongly typed programming language that builds on JavaScript
- [Typechain](https://github.com/dethcrypto/TypeChain): a TypeScript blinders for Ethereum smart contracts

## Instructions

### Exercise
⚠️ All user stories and **one** feature request of your choice have to be implemented in Solidity. ⚠️ <br/>
You will have to implement them in the `/contracts` folder.

The definition of done for a user story is:
- [x] Feature work as expected
- [x] Tests have been written
- [x] Quality controls are passed

### User stories
Please, read the following user stories to implement:
1. As an owner I want to inherit the admin permissions of the smart contract once it is deployed
2. As an admin I want to be the only one able to populate the contract with customizable bosses
3. As an user I want to be able to randomly generated **one** character per address
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
2. We decided to use cryptopunks as bosses. Please, interface the cryptopunk contract to allow admin to generate cryptopunks bosses. Develop the smart contract in such a way that anyone can create a frontend connected to the contract and use the cryptopunk metadata to display the boss.
3. Players should be able to brag their fights participations. Allow players to mint a non-fungible token when they claim the reward of a defeated boss. Inspired by the LOOT project, the NFT should be fully on-chain and display some information about the defeated boss. **Don't be focus on the NFT itself, it doesn't need to be impressive or include any art**

### Data structures
Here is the data shape of the character and boss object you'll have to implement. This data are only a base that you can modify and extend as you wish. Feel free to made your own implementation.

```typescript
type Boss = {
    hp: number;
    damage: number;
    reward: number;
}

type Character = {
    hp: number;
    damage: number;
    xp: number;
}
```

## Notes
### General
- You can use additional libraries but you can be asked to justify your choices
- Take time to construct a readable contract
- Keep in mind that your smart contract should be usable by anyone (frontend, dapps...)
- Testing is very important for us, so your app should be tested
- At Ledger we really focus on details. Verify your work before sending it to us

## Restitution
Please document your code or modify this `README.md` file to describe your choices, practices, etc. <br/>
Share your code with us using a **private** repository - [GitHub](https://github.com/).


---


**Thank you for your time and good luck! 🍀** <br/>
**Powered by [Ledger](https://www.ledger.com/)**
