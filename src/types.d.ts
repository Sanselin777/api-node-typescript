/* typescript by default is going look fot this file, with this name */
/* like normal types, like string or number, we can create our own types */

/* interface is like a contract that object should have */
// we can extend interfaces

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

/* is  good to try to reuse types, its not necessary have a lot of types or interfaces */
/* we can use utilities types */

//one option with pick

/* export type NoSensitiveInfoDiaryEntry = Pick<
  DiaryEntry,
  "id" | "date" | "weather" | "visibility"
>; */

/* other option is Omit */
export type NoSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">;

export type NewDiaryEntry = Omit<DiaryEntry, "id">;
