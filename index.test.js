import {jest} from '@jest/globals';
import s4rpg from 's4rpg'


test("connection works", () => {
    expect(s4rpg.testWord()).toEqual("hello World")
})

