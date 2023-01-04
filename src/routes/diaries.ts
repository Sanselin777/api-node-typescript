import express from "express";

import * as diaryService from "../services/diaryServices";
import { toNewDiaryEntry } from "../utils";
/* we use es6 modules with imports a exports,  but when is compiled , behind, is just commonjs */

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
  const diary = diaryService.findEntryById(+req.params.id);
  return diary ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);

    const addedDiaryEntry = diaryService.addDiary(newDiaryEntry);

    res.json(addedDiaryEntry);
  } catch (e) {
    let message = "";
    if (e instanceof Error) {
      message = e.message;
    } else {
      message = String(e);
    }
    res.status(400).send(message);
  }
});

export default router;
