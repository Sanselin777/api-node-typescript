import diaryData from "./diaries.json";
import { DiaryEntry, NoSensitiveInfoDiaryEntry, NewDiaryEntry } from "../types";

/* when we consume apis we can use assertion of types */
const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const findEntryById = (
  id: number
): NoSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  if (!entry) return undefined;
  const { comment, ...noCommentEntry } = entry;
  return noCommentEntry;
};

export const getEntriesWithoutSensitiveInfo = (): NoSensitiveInfoDiaryEntry[] =>
  diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const diary = {
    id: Math.max(...diaryData.map((d) => d.id)) + 1,
    ...newDiaryEntry,
  };
  diaryData.push(diary);
  return diary;
};
