import { PostType } from "@/data/eventTypes";

const key = "saved";
const keyArray = "saved_array";
const onServer = () => typeof window === "undefined";

function getLsData(): { [id: number]: PostType } {
  try {
    const temp = localStorage.getItem(key);
    return temp ? JSON.parse(temp) : {};
  } catch (error) {
    console.error("Error accessing localStorage data:", error);
    return {};
  }
}

function getLsArray(): number[] {
  try {
    const temp = localStorage.getItem(keyArray);
    return temp ? JSON.parse(temp) : [];
  } catch (error) {
    console.error("Error accessing localStorage array:", error);
    return [];
  }
}

function setLsData(data: { [id: number]: PostType }): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error setting localStorage data:", error);
  }
}

function setLsArray(data: number[]): void {
  try {
    localStorage.setItem(keyArray, JSON.stringify(data));
  } catch (error) {
    console.error("Error setting localStorage array:", error);
  }
}

export function addPostToLocalStorage(post: PostType): void {
  if (onServer()) return;

  const updated = getLsData();
  updated[post.id] = post;
  setLsData(updated);

  const updatedArray = getLsArray();
  updatedArray.push(post.id);
  setLsArray(updatedArray);
}

export function removePostFromLocalStorage(postId: number): void {
  if (onServer()) return;

  const data = getLsData();
  delete data[postId];
  setLsData(data);

  const dataArray = getLsArray();
  const index = dataArray.indexOf(postId);
  if (index !== -1) {
    dataArray.splice(index, 1);
    setLsArray(dataArray);
  }
}

export function getAllPostsFromLocalStorage(): { [id: number]: PostType } {
  if (onServer()) return {};

  return getLsData();
}

export function getSavedArrayFromLocalStorage(): number[] {
  if (onServer()) return [];

  try {
    const temp = localStorage.getItem(keyArray);
    return temp ? JSON.parse(temp) : [];
  } catch (error) {
    console.error("Error accessing localStorage array:", error);
    return [];
  }
}
