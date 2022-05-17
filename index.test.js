import {jest} from '@jest/globals';
import s4rpg from 's4rpg'


test("connection works", () => {
    expect(s4rpg.testWord()).toEqual("hello World")
});

test("Creature Creater", () => {
    let testCreature = new s4rpg.Creature(1, 1, 1, 1);
    expect(testCreature.name).toEqual(undefined)
    expect(testCreature.strengh).toEqual(1)
    expect(testCreature.speed).toEqual(1)
    expect(testCreature.stealth).toEqual(1)
    expect(testCreature.surveilance).toEqual(1)
});

test("Creature Creation with config obj", () => {
    let creatureConfig = {
        name: "testCreature",
        strengh: 1,
        speed: 1,
        stealth: 1,
        surveilance: 1,
    }
    let testCreature = new s4rpg.Creature(creatureConfig);
    expect(testCreature.strengh).toEqual(1)
    expect(testCreature.speed).toEqual(1)
    expect(testCreature.stealth).toEqual(1)
    expect(testCreature.surveilance).toEqual(1)
    expect(testCreature.name).toEqual("testCreature")
})