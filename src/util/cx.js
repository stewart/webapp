function classnames(...args) {
  let classes = [];
  let hasOwn = {}.hasOwnProperty;

  for (let arg of args) {
    if (!arg) {
      continue;
    }

    let type = typeof arg;

    if (type === "string" || type === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      classes.push(classnames(...arg));
    } else if (type === "object") {
      for (let key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(" ");
}

export default classnames;
