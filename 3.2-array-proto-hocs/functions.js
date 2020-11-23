'use strict'

// Задача 1
console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    const weaponsName = weapons.map(weapon => weapon.name);
    return weaponsName;
}

function getCountReliableWeapons(durability) {
    return weapons.filter(weapon => weapon.durability > durability).length;
}

function hasReliableWeapons(durability) {
    return weapons.some(weapon => weapon.durability > durability);
}

function getReliableWeaponsNames(durability) {
    const durabilityWeapons = weapons.filter(weapon => weapon.durability > durability);
    return durabilityWeapons.map(weapon => weapon.name);
}

function getTotalDamage() {
    let damage = 0;
    weapons.find(weapon => {
        damage += weapon.attack;
    })
    return damage;
}
