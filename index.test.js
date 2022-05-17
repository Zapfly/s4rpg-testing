import {jest} from '@jest/globals';
import s4rpg from 's4rpg'


test("connection works", () => {
    expect(s4rpg.testWord()).toEqual("hello World")
});

test("Creature Creater", () => {
    let testCreature = new s4rpg.Creature(1, 1, 1, 1);
    expect(testCreature.strengh).toEqual(1)
    expect(testCreature.speed).toEqual(1)
    expect(testCreature.stealth).toEqual(1)
    expect(testCreature.surveilance).toEqual(1)
});