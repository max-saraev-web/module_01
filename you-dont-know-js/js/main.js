'use strict';

const banner = document.querySelector('.ads');
banner.remove();

const items = document.querySelector('.items');

const itemOne = items.querySelector('.item_one');

const itemTwo = items.querySelector('.item_two');
const titleTwo = itemTwo.querySelector('.item__title');
const itemTwoList = itemTwo.firstElementChild.querySelector('.props__list');

const itemThree = items.querySelector('.item_three');
const titleThree = itemThree.querySelector('.item__title');
const itemThreeList = itemThree.firstElementChild.querySelector('.props__list');


const itemFour = items.querySelector('.item_four');
const itemFourList = itemFour.firstElementChild.querySelector('.props__list');
const itemFourListItems = itemFourList.querySelectorAll('.props__item');


const itemFive = items.querySelector('.item_five');
const titleFive = itemFive.querySelector('.item__title');
const itemFiveList = itemFive.firstElementChild.querySelector('.props__list');


const itemSix = items.querySelector('.item_six');
const titleSix = itemSix.querySelector('.item__title');
const itemSixList = itemSix.firstElementChild.querySelector('.props__list');
const additionInfoBlockTwo = itemSixList.querySelectorAll('.props__item_two');


// ? - actions
items.prepend(itemOne);
itemOne.after(itemTwo);
itemTwo.after(itemThree);
itemFourListItems[1].after(itemTwoList.querySelector('.props__item_four'));
itemTwoList.before(titleFive);
itemFiveList.before(titleSix);
itemSixList.before(titleTwo);
titleThree.textContent = `This и прототипы объектов`;
additionInfoBlockTwo.forEach(elem => itemTwoList.append(elem));
titleThree.after(itemFiveList);
titleFive.after(itemThreeList);
itemFive.firstElementChild.append(itemThreeList);
