export const isArray = (item) => (item instanceof Array);

export const isFunction = (item) => (item instanceof Function);

export const isObject = (item) => (!isArray(item) && item instanceof Object && !isFunction(item));

export const isString = (item) => (typeof item === "string");

export const isTruthy = (item) => {
  if (isObject(item)) {
    return Object.keys(item).length > 0;
  }
  if (isArray(item) || isString(item)) {
    return item.length > 0;
  }
  return !!item;
}

export default {
  array: isArray,
  object: isObject,
  string: isString,
  truthy: isTruthy,
};
