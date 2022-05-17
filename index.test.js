import {jest} from '@jest/globals';
import s4rpg from 's4rpg'


test("connection works", () => {
    expect(s4rpg.testWord()).toEqual("hello World")
});

test("Creature Creater", () => {
    let testCreature = new s4rpg.Creature(1, 1, 1, 1);
    expect(testCreature.name).toEqual(undefined)
    expect(testCreature.strength).toEqual(1)
    expect(testCreature.speed).toEqual(1)
    expect(testCreature.stealth).toEqual(1)
    expect(testCreature.surveilance).toEqual(1)
});

test("Creature Creation with config obj", () => {
    let creatureConfig = {
        name: "testCreature",
        strengh: 2,
        speed: 3,
        stealth: 7,
        surveilance: 11,
    }
    let testCreature = new s4rpg.Creature(creatureConfig);

    expect(testCreature.strengh).toEqual(2);
    expect(testCreature.speed).toEqual(3);
    expect(testCreature.stealth).toEqual(7);
    expect(testCreature.surveilance).toEqual(11);
    expect(testCreature.name).toEqual("testCreature");
    // expect(testCreature.calcDamage()).toEqual(1000);
})