

const Keys = {
  auth: "sdfsf877328947c2384sdfs/*23r2ec*dasdasd/*232/e2*as/d32837",
  refresh: "sdfsf877328947c2384sdfs/*23r2ec*dasdasd/*232/e2*as/d32837/refresh",
};

const load = (key) => JSON.parse(localStorage.getItem(key));

const remove = (key) => localStorage.removeItem(key);

const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export default { Keys, load, remove, save };
