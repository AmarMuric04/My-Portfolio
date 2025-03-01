import { Dispatch, SetStateAction } from "react";

type KeyType = string | number;

export const handleToggleInclusion = (
  key: KeyType,
  setMustInclude: Dispatch<SetStateAction<KeyType[]>>,
  setMustNotInclude: Dispatch<SetStateAction<KeyType[]>>
) => {
  setMustInclude((prevMustInclude) => {
    if (prevMustInclude.includes(key)) {
      return prevMustInclude.filter((prev) => prev !== key);
    } else {
      setMustNotInclude((prev) => prev.filter((item) => item !== key));
      return [...prevMustInclude, key];
    }
  });
};

export const handleDoubleClickInclusion = (
  key: KeyType,
  setMustInclude: Dispatch<SetStateAction<KeyType[]>>,
  setMustNotInclude: Dispatch<SetStateAction<KeyType[]>>
) => {
  setMustInclude((prev) => prev.filter((item) => item !== key));
  setMustNotInclude((prev) => {
    if (prev.includes(key)) {
      return prev.filter((item) => item !== key);
    } else {
      return [...prev, key];
    }
  });
};

export const handleToggleCategory = (
  category: KeyType,
  setSelectedCategories: Dispatch<SetStateAction<KeyType[]>>,
  setExcludedCategories: Dispatch<SetStateAction<KeyType[]>>
) => {
  setSelectedCategories((prevSelected) => {
    if (prevSelected.includes(category)) {
      return prevSelected.filter((prev) => prev !== category);
    } else {
      setExcludedCategories((prev) => prev.filter((item) => item !== category));
      return [...prevSelected, category];
    }
  });
};

export const handleDoubleClickCategory = (
  category: KeyType,
  setSelectedCategories: Dispatch<SetStateAction<KeyType[]>>,
  setExcludedCategories: Dispatch<SetStateAction<KeyType[]>>
) => {
  setSelectedCategories((prev) => prev.filter((item) => item !== category));
  setExcludedCategories((prev) => {
    if (prev.includes(category)) {
      return prev.filter((item) => item !== category);
    } else {
      return [...prev, category];
    }
  });
};
